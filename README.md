# Design Skills

> 设计师 + AI Agent 双栖的 Skill 平台

**网站地址**：https://liruiying.github.io/design-skills

---

## 什么是 Design Skills？

收录设计领域核心 Skill，人类可直接阅读，AI 可直接调用。从色彩系统到组件规范，从设计流程到可访问性，一站掌握。

## 技术栈

- **框架**：[Astro](https://astro.build) v7
- **样式**：Tailwind CSS v4
- **搜索**：[Pagefind](https://pagefind.app)（纯静态全文搜索）
- **托管**：GitHub Pages

## AI 调用

AI 可通过以下地址获取全部 Skill 索引：

```
https://liruiying.github.io/design-skills/skills-index.json
```

索引字段说明：
- `name`：Skill 唯一标识
- `ai_trigger`：AI 应在什么场景调用此 Skill
- `ai_output`：调用后会产出什么
- `raw_url`：Skill 原始 Markdown 文件地址

## Skill 分类

| 分类 | 说明 |
|------|------|
| 视觉规范 | 色彩、排版、间距、图标 |
| 组件设计 | 按钮、表单、导航、空状态 |
| 交互模式 | 手势、动效、反馈、加载 |
| 可访问性 | 对比度、键盘导航、语义化 |
| 设计流程 | 竞品分析、用户旅程、设计交付 |
| AI辅助 | 组件审计、规范生成、代码转换 |
| 平台规范 | iOS、Android、小程序 |

## 本地开发

```bash
npm install
npm run dev
```

构建并生成搜索索引：

```bash
npm run build
```

## 添加新 Skill

在 `src/content/skills/` 下新建 `your-skill-name.md`，填写以下 frontmatter：

```yaml
---
name: "your-skill-name"
title: "技能标题"
description: "一句话描述（80字内）"
category: "视觉规范"  # 从7大分类中选一个
tags: ["标签1", "标签2"]
ai_trigger:
  - "AI 应在什么场景调用"
ai_output: "调用后产出什么"
difficulty: "intermediate"  # beginner / intermediate / advanced
tools: ["Figma"]
related: []
updated: "2026-07-03"
---

## 正文内容...
```
