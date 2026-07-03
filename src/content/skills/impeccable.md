---
name: "impeccable"
title: "设计精炼命令集"
description: "17 个设计命令，极致细节把控。提供 /polish、/audit、/distill、/enhance、/refine 等专门命令，精确控制设计流程每个环节。"
category: "组件打磨"
tags: ["设计命令", "polish", "audit", "细节优化", "设计审查"]
ai_trigger:
  - "优化现有界面的细节"
  - "审查设计稿质量"
  - "精炼 UI 方案"
  - "提升界面品质感"
ai_output: "针对具体设计问题的精确修改建议，包含问题定位、修改方案和验证标准"
difficulty: "intermediate"
tools: ["Claude", "CodeFlicker"]
related: ["frontend-design", "ui-ux-pro-max"]
updated: "2026-07"
---

## 是什么

Impeccable 是一套专注「设计品质提升」的命令集，每个命令对应一个特定的设计优化场景。

与其他 Skill 不同，Impeccable 不是生成器，而是**精炼器**——它帮你把已有的设计从 80 分提升到 95 分。

## 17 个核心命令

### 视觉优化类
- `/polish` — 全面润色，提升整体品质感
- `/enhance` — 强化视觉层级，让重点更突出
- `/refine` — 精细化间距、圆角、字重等细节

### 审查类
- `/audit` — 全面设计审查，输出问题清单
- `/contrast` — 检查色彩对比度是否达到 WCAG AA 标准
- `/spacing` — 检查间距一致性

### 提炼类
- `/distill` — 从复杂设计中提炼核心，删除冗余元素
- `/simplify` — 简化界面，减少认知负担
- `/focus` — 突出主要行动路径，弱化次要内容

### 风格类
- `/editorial` — 转换为杂志/编辑风格
- `/minimal` — 转换为极简风格
- `/bold` — 转换为大胆强调风格

### 动效类
- `/animate` — 为关键状态添加过渡动画建议
- `/micro` — 设计微交互细节

### 文字类
- `/copy` — 优化 UI 文案，让描述更清晰
- `/tone` — 调整文字风格（正式/友好/简洁）
- `/hierarchy` — 重构文字层级

## AI 调用示例

```
/audit
请审查这段登录页面代码，重点检查：
1. 色彩对比度是否达标
2. 表单间距是否统一
3. 按钮文案是否清晰
4. 错误提示是否友好
```

```
/polish
基于以下界面代码，进行全面润色优化，
重点提升：视觉层级感、细节精致度、整体品质感
```

## 安装方式

```bash
npx skills add pbakaus/impeccable
```

GitHub：[pbakaus/impeccable ↗](https://github.com/pbakaus/impeccable)  
Stars：★ 10k+
