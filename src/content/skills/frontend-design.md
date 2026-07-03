---
name: "frontend-design"
title: "前端界面设计"
description: "解决「AI 生成界面都一样」的问题。让 AI 生成有设计感的前端界面，内置组件规范和视觉原则，避免千篇一律的 UI。"
category: "视觉生成"
tags: ["前端", "UI生成", "组件规范", "视觉原则", "Design System"]
ai_trigger:
  - "生成有设计感的界面"
  - "避免 AI 生成 UI 千篇一律"
  - "让界面更有品质感"
ai_output: "符合视觉规范的前端组件代码，包含颜色、字体、间距的完整设计决策说明"
difficulty: "beginner"
tools: ["Claude", "Cursor", "CodeFlicker"]
related: ["color-system", "typography"]
updated: "2026-07"
---

## 是什么

Anthropic Frontend Design Skill 是 Claude 官方出品的前端界面设计规范，收录了让 AI 生成「有设计感界面」的核心原则。

安装后，每次生成 UI 时 AI 会自动遵循这套视觉标准，不再产出千篇一律的灰白色方块界面。

## 核心原则

### 颜色系统
- 使用有层次感的色板，不只是黑白灰
- 主色调 + 辅助色 + 功能色三层结构
- 深色模式变量预留

### 排版规范
- 字号层级清晰（Display / H1 / H2 / Body / Caption）
- 中文优先考虑 PingFang SC，英文 Inter 或 DM Sans
- Letter-spacing 对中文标题做 -0.02em 收紧

### 组件规范
- 按钮：主次危险三种语义
- 卡片：统一圆角 + 阴影层级
- 表单：焦点态、错误态、禁用态完整
- 间距：4px 基础单位

### 视觉原则
- 留白优先，不要填满每一处空间
- 信息层级 > 视觉装饰
- 每个元素必须有存在的理由

## AI 调用示例

```
请按照 Anthropic Frontend Design 规范，帮我生成一个用户登录页面。
要求：
- 白色背景，主色 #002FA7
- 表单居中，宽度 400px
- 输入框有焦点态和错误态
- 按钮使用主色调，hover 有过渡动画
```

## 安装方式

```bash
/plugin marketplace add anthropics/skills
```

GitHub：[anthropics/skills ↗](https://github.com/anthropics/skills)  
Stars：★ 96k+
