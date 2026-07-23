---
name: "guizang-ppt-skill"
title: "归藏 PPT Skill"
description: "面向 Claude Code、Codex 等 Agent 的网页 PPT 工作流，生成兼具杂志叙事感与瑞士网格秩序的单文件 HTML 演示稿。"
category: "视觉生成"
tags: ["PPT", "HTML", "瑞士风", "电子杂志", "在线演示"]
ai_trigger:
  - "把文章或 Markdown 制作成可在线演示的 HTML PPT"
  - "生成瑞士国际主义或电子杂志风格的演示稿"
  - "为 PPT 生成统一风格的配图、信息图或封面"
  - "需要可翻页、可分享、可继续编辑的单文件网页演示"
ai_output: "一套可直接打开和分享的单文件 HTML PPT，可包含配图、动效、演示导航与多平台封面。"
difficulty: "intermediate"
tools: ["Claude Code", "Codex", "GPT Image"]
related: ["designai-ppt-html", "designai-ppt-image", "designai-generate-image"]
updated: "2026-07"
sortOrder: 2026072301
showcase:
  url: "https://ppt-1784792825-bb08c858.frontend-cloud.corp.kuaishou.com/"
  eyebrow: "AI CLASSROOM · DESIGN WORKFLOW"
  title: "从 Prompt 到 Skill"
  subtitle: "设计师如何把一次 AI 对话，封装成可复用、可协作、可迭代的工作流资产。"
  meta: "16 页 · 在线演示"
  caption: "瑞士国际主义 Style B 实际案例。点击预览可体验键盘、滚轮、触屏翻页与 ESC 索引。"
---

## 是什么

归藏 PPT Skill 是一个为 Claude Code、Codex 等本地 Agent 设计的网页 PPT 工作流。它不只负责“排几页内容”，还把风格选择、内容节奏、版式约束、配图、质量检查和浏览器预览组合成一套可复用流程。

最终交付为单文件 HTML：无需构建和服务器，浏览器直接打开即可演示、分享和继续修改。

## 两套视觉系统

### Style A · 电子杂志 × 电子墨水

强调叙事、观点和个人表达，适合分享、演讲、文化内容与创意提案。内置封面、章节、数据大字报、图文、图片网格、对比等 10 种布局。

### Style B · 瑞士国际主义

强调网格、事实和信息秩序，使用 16 列网格、直角色块、发丝线和高对比字号。内置 22 种锁定版式，适合产品发布、分析报告、方法论与 Demo Day。

## 核心能力

- 生成支持键盘、滚轮、触屏和底部圆点导航的横向翻页演示
- 使用预设主题和锁定版式，减少随机排版导致的视觉失控
- 为 PPT 生成纪实照片、信息图、流程图、系统关系图和 UI 情景图
- 从同一主题延展公众号头图、分享卡、小红书和视频号封面
- 提供低性能静态模式，动态背景可随时退场
- 使用检查清单与瑞士风校验脚本完成发布前质检

## 适用场景

- 长文章、Markdown 或方案文档转 6–10 页演讲 PPT
- 产品分析、方法论、AI 发布会与行业内部分享
- 需要在线演示、链接分享和后续编辑的汇报
- 需要统一制作 PPT 配图、封面和截图视觉

> 不建议用于大段表格、超高信息密度培训课件，或需要多人实时协作编辑的场景。

## 使用示例

```text
帮我基于这篇文章生成一份 8 页左右的瑞士风 PPT，
需要 3 张配图，图片比例跟模板槽位匹配。
```

```text
帮我把这份产品分析文档做成电子杂志风演讲 PPT，
重点突出观点和叙事节奏。
```

## 安装方式

```bash
npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill
```

GitHub：[op7418/guizang-ppt-skill ↗](https://github.com/op7418/guizang-ppt-skill)

## 标准工作流

1. **选择风格**：Style A 电子杂志风，或 Style B 瑞士国际主义。
2. **澄清需求**：确认受众、时长、素材、图片需求、主题色和硬约束。
3. **建立节奏**：先做页面节奏表，再选择对应布局骨架。
4. **填充内容**：控制每页信息密度，保持 hero 页与内容页交替。
5. **制作配图**：按模板槽位匹配 21:9、16:10 等图片比例。
6. **质量自检**：运行检查清单；瑞士风额外运行版式校验器。
7. **浏览器预览**：检查溢出、留白、标题间距、翻页和静态模式。

## 输出规格

- 单文件 HTML 演示稿
- Style A 5 套电子墨水主题
- Style B 4 套高饱和锚点色
- 10 种杂志风布局与 22 种瑞士风锁定版式
- 可选 PPT 配图、流程图、信息图与多平台封面
