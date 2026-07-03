/**
 * analytics.ts
 * umami 点击上报 + 本地 localStorage 缓存
 * 
 * umami 免费 Cloud 版：https://umami.is/
 * - 注册后获得 Website ID 和 Script URL
 * - 每个 Skill 详情页浏览时上报自定义事件 skill-view
 */

// umami 实例类型声明
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
    };
  }
}

/** 上报 Skill 查看事件 */
export function trackSkillView(skillId: string, category: string) {
  try {
    // umami 自动追踪 pageview，额外上报自定义事件
    window.umami?.track('skill-view', { skillId, category });
  } catch (e) {
    // 静默失败，不影响用户体验
  }
}

/** 本地缓存：最近查看的 Skill（用于 fallback 显示热门） */
const LOCAL_KEY = 'ds_skill_views';

export function incrementLocalView(skillId: string) {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    const views: Record<string, number> = raw ? JSON.parse(raw) : {};
    views[skillId] = (views[skillId] ?? 0) + 1;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(views));
  } catch (e) {
    // localStorage 不可用时静默忽略
  }
}

export function getTopLocalSkills(topN = 4): string[] {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return [];
    const views: Record<string, number> = JSON.parse(raw);
    return Object.entries(views)
      .sort((a, b) => b[1] - a[1])
      .slice(0, topN)
      .map(([id]) => id);
  } catch (e) {
    return [];
  }
}
