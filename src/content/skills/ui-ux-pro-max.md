---
name: "ui-ux-pro-max"
title: "UI/UX Pro Max"
description: "从 Wireframe 到高保真一步到位。50+ UI 风格、97 种调色板、57 种字体搭配、99 条 UX 指南，给 AI 一个可搜索的设计数据库。"
category: "组件打磨"
tags: ["UI风格", "调色板", "字体搭配", "UX指南", "高保真"]
ai_trigger:
  - "生成高保真设计稿"
  - "推荐 UI 风格和配色"
  - "从线框图到高保真"
  - "设计风格选择"
ai_output: "包含风格选择、配色方案、字体搭配的完整高保真界面设计，附 UX 决策说明"
difficulty: "intermediate"
tools: ["Claude", "Figma", "CodeFlicker"]
related: ["color-system", "typography", "frontend-design"]
updated: "2026-07"
---

## 是什么

UI/UX Pro Max 是一个超大型设计知识库 Skill，收录了：

- **50+ UI 风格**：极简、新拟态、玻璃态、杂志感、工程风……
- **97 种调色板**：按风格、行业、情绪分类
- **57 种字体搭配**：中英文混排经过验证的组合
- **99 条 UX 指南**：覆盖导航、表单、列表、详情页等核心场景

## 核心功能

### 风格选择器
告诉 AI 你想要的风格关键词，它会从 50+ 预设中匹配最接近的方案并给出配色 + 字体组合。

### 调色板系统
97 种调色板全部标注了适用场景：

| 类型 | 示例 |
|------|------|
| 品牌蓝 | #002FA7 系列（正式、科技感） |
| 暖橙 | #EA5C2B 系列（活力、创意） |
| 深绿 | #0D5C3A 系列（自然、可信赖） |
| 中性灰 | #1A1A1A 系列（极简、高端） |

### UX 指南精选

- 表单设计：输入框宽度 = 预期内容长度
- 按钮层级：每页最多一个主要按钮
- 卡片设计：相关信息聚合，无关信息拆离
- 空状态：必须有图示 + 文字说明 + 行动引导

## AI 调用示例

```
使用 UI/UX Pro Max，帮我设计一个数据看板页面：
- 风格：工程感、数据可视化
- 主色：#002FA7（品牌蓝）
- 数据展示：6 个核心指标卡 + 2 个图表
- 字体：DM Mono 数字，DM Sans 文字
```

## 安装方式

```bash
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
```

GitHub：[nextlevelbuilder/ui-ux-pro-max-skill ↗](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)  
Stars：★ 43k+
