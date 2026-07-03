/**
 * fetch-github-skills.mjs
 * 构建前运行，从 GitHub Search API 拉取热门设计 Skill 仓库，写入 src/data/github-skills.json
 * 
 * 搜索策略：
 * - 关键词：design skill / ui-design / ux-skill / design-system
 * - 筛选：stars >= 100，最近有更新
 * - 排序：star 数降序
 * - 每类最多取 5 个，合并去重后取 Top 20
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '../src/data/github-skills.json');

// GitHub API 请求（支持可选 Token，避免 rate limit）
async function searchGitHub(query, perPage = 8) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=${perPage}`;
  
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'design-skills-website',
  };
  
  // 如果有 GITHUB_TOKEN 环境变量则使用（GitHub Actions 中自动注入）
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const resp = await fetch(url, { headers });
  if (!resp.ok) {
    console.warn(`GitHub API 请求失败 [${resp.status}]: ${query}`);
    return [];
  }
  const data = await resp.json();
  return data.items || [];
}

function formatStars(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

// 推断 Skill 分类
function inferCategory(repo) {
  const text = (repo.name + ' ' + (repo.description || '') + ' ' + (repo.topics || []).join(' ')).toLowerCase();
  if (text.includes('a11y') || text.includes('accessibility') || text.includes('wcag')) return '可访问性';
  if (text.includes('component') || text.includes('ui-kit') || text.includes('design-system')) return '组件设计';
  if (text.includes('animation') || text.includes('motion') || text.includes('interaction')) return '交互模式';
  if (text.includes('figma') || text.includes('handoff') || text.includes('spec')) return '设计流程';
  if (text.includes('ai') || text.includes('llm') || text.includes('claude')) return 'AI辅助';
  if (text.includes('ios') || text.includes('android') || text.includes('mobile')) return '平台规范';
  return '视觉规范';
}

async function main() {
  console.log('🔍 正在从 GitHub 拉取热门设计 Skill...');

  const queries = [
    'design skill stars:>200 language:markdown',
    'ui-design skill claude stars:>100',
    'ux design system skill stars:>100',
    'figma design skill stars:>50',
    'frontend design skill stars:>200',
  ];

  const allItems = [];
  const seenIds = new Set();

  for (const query of queries) {
    try {
      const items = await searchGitHub(query, 6);
      for (const item of items) {
        if (!seenIds.has(item.id)) {
          seenIds.add(item.id);
          allItems.push(item);
        }
      }
      // 避免触发 rate limit
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.warn(`查询失败: ${query}`, e.message);
    }
  }

  // 按 Star 排序，取 Top 18
  allItems.sort((a, b) => b.stargazers_count - a.stargazers_count);
  const top = allItems.slice(0, 18);

  const result = top.map(repo => ({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description || '暂无描述',
    stars: repo.stargazers_count,
    starsFormatted: formatStars(repo.stargazers_count),
    url: repo.html_url,
    owner: repo.owner?.login || '',
    ownerAvatar: repo.owner?.avatar_url || '',
    language: repo.language || null,
    topics: (repo.topics || []).slice(0, 4),
    updatedAt: repo.updated_at,
    category: inferCategory(repo),
  }));

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`✅ 已写入 ${result.length} 个 GitHub Skill 到 src/data/github-skills.json`);
  
  if (result.length === 0) {
    console.warn('⚠️  未获取到数据，将使用 fallback 数据');
  }
}

main().catch(e => {
  console.error('❌ fetch-github-skills 失败:', e);
  // 写入空数组，确保构建不失败
  writeFileSync(OUTPUT_PATH, '[]', 'utf-8');
});
