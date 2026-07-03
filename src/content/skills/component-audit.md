---
name: "component-audit"
title: "组件库审计"
description: "系统审查设计组件库的完整性、一致性和规范符合度，找出缺失组件、重复组件和不一致的设计决策。"
category: "组件打磨"
tags: ["组件库", "审计", "Figma", "设计系统", "组件一致性", "缺口分析"]
ai_trigger:
  - "审计 Figma 组件库"
  - "分析设计系统完整性"
  - "找出组件库缺失的组件"
  - "检查组件命名是否规范"
  - "对比两个版本的组件库差异"
ai_output: "组件清单 + 缺口分析报告 + 优先级建议 + 重复/冲突项列表"
difficulty: "intermediate"
tools: ["Figma", "Figma API", "Notion"]
related: ["color-system", "design-handoff"]
updated: "2026-07-03"
---

## 什么是组件库审计？

组件库审计是对现有设计系统组件库进行系统性检查，目标是：

- 找出**缺失组件**：对照行业标准，哪些必要组件还没有？
- 发现**重复组件**：不同设计师做了功能相同但命名不同的组件？
- 检查**规范符合度**：命名、变体、属性是否遵循统一约定？
- 评估**覆盖完整度**：能满足多少比例的日常设计需求？

---

## 移动端标准组件清单

以下是移动端设计系统应覆盖的基础组件（参考 iOS HIG + Material Design + 行业通用标准）：

### 基础元素
- [ ] Button（按钮）：Primary / Secondary / Ghost / Danger / Loading
- [ ] Input（输入框）：Default / Focus / Error / Disabled / With Icon
- [ ] Checkbox / Radio / Switch（选择控件）
- [ ] Tag / Badge / Chip（标签/徽标）
- [ ] Avatar（头像）：大/中/小 + 群组头像
- [ ] Icon（图标）：系统图标集

### 反馈组件
- [ ] Toast / Snackbar（轻提示）
- [ ] Alert / Banner（警告横条）
- [ ] Dialog / Modal（弹窗）：确认框 / 信息框
- [ ] Action Sheet（底部操作菜单）
- [ ] Loading / Skeleton（加载状态）：Spinner + 骨架屏
- [ ] Empty State（空状态）：无数据 / 无网络 / 无权限 / 无搜索结果

### 导航组件
- [ ] Navigation Bar（顶部导航栏）：有标题 / 无标题 / 透明
- [ ] Tab Bar（底部导航栏）：2-5 个 Tab
- [ ] Tab（横向选项卡）：Scrollable / Fixed
- [ ] Breadcrumb（面包屑）
- [ ] Back Button（返回按钮）

### 数据展示
- [ ] List Item（列表项）：单行 / 双行 / 三行 / 带图标 / 带右侧值
- [ ] Card（卡片）：基础卡片 + 操作卡片 + 媒体卡片
- [ ] Table（表格）：基础表格 + 可排序
- [ ] Progress Bar / Progress Circle（进度条）

### 输入控件
- [ ] Search Bar（搜索栏）
- [ ] Picker（选择器）：日期 / 时间 / 级联
- [ ] Slider（滑块）
- [ ] Stepper（步进器）
- [ ] Textarea（多行文本框）

---

## 审计流程

### Step 1：建立清单

根据上方标准清单，在 Notion 或 Figma 中建立对照表，标记每个组件的状态：

- ✅ **已有** — 完整实现，规范符合
- ⚠️ **部分** — 存在但不完整（缺少变体/状态）
- ❌ **缺失** — 尚未创建
- 🔁 **重复** — 有功能相同的多个组件需要合并

### Step 2：一致性检查

检查命名规范：

```
推荐命名格式：[组件类型] / [变体] / [状态]

示例：
  Button / Primary / Default
  Button / Primary / Hover
  Button / Primary / Loading
  Button / Ghost / Disabled
```

### Step 3：优先级排序

按使用频率 × 缺口严重程度排序，制定修复计划：

| 优先级 | 条件 | 行动 |
|--------|------|------|
| P0 | 高频 + 缺失 | 立即新建 |
| P1 | 高频 + 不完整 | 尽快补齐变体 |
| P2 | 中频 + 缺失 | 排期创建 |
| P3 | 低频 + 存在但不规范 | 迭代重构 |

---

## AI 辅助审计

AI 可以大幅提速审计工作：

### 使用 Figma API + AI

1. 通过 Figma API 获取组件库的完整组件树
2. 将组件名称列表传给 AI
3. AI 对照行业标准进行缺口分析，生成报告

**提示词模板：**
```
以下是我们的 Figma 组件库中所有组件名称：
[粘贴组件列表]

请对照移动端设计系统行业标准，分析：
1. 哪些必要组件缺失？
2. 哪些组件命名不规范？（建议格式：类型/变体/状态）
3. 是否有疑似重复的组件？
4. 按优先级给出修复建议。
```

### 输出格式建议

让 AI 输出为 Markdown 表格，方便导入 Notion：

```markdown
| 组件名 | 状态 | 问题描述 | 优先级 | 建议操作 |
|--------|------|---------|--------|---------|
| Button | ⚠️ 部分 | 缺少 Loading 状态 | P1 | 补充变体 |
| Empty State | ❌ 缺失 | 无数据/无网络均缺失 | P0 | 新建组件 |
```
