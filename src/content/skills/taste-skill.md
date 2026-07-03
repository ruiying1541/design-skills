---
name: "taste-skill"
title: "Taste 高级感审美"
description: "让 AI 具备「高级感」审美判断。专注于让界面「看起来和感觉昂贵」——高级字体、宽阔留白、层叠卡片、弹簧动画。"
category: "视觉生成"
tags: ["高级感", "留白", "字体", "动效", "品质感"]
ai_trigger:
  - "让界面更有高级感"
  - "界面看起来太廉价"
  - "提升设计品质感"
  - "让 UI 感觉昂贵"
ai_output: "包含字体选择、留白策略、卡片叠层方案和动画参数的高品质界面设计建议"
difficulty: "intermediate"
tools: ["Claude", "CodeFlicker", "Figma"]
related: ["frontend-design", "impeccable", "typography"]
updated: "2026-07"
---

## 是什么

Taste Skill 将「高级感」拆解为可量化、可执行的设计参数。

> "昂贵感不是钱买来的，是设计决策堆叠出来的。"

## 高级感的四个维度

### 1. 字体选择
高级感字体的共同特征：有个性、衬线或几何无衬线、不是系统默认。

**推荐组合：**
- 标题：`Playfair Display` / `PP Neue Montreal` / `DM Serif Display`
- 正文：`DM Sans` / `Inter` / `Plus Jakarta Sans`
- 数据：`DM Mono` / `JetBrains Mono`

**避免：** Arial、Times New Roman、Comic Sans

### 2. 留白策略
留白不是浪费空间，是给内容「呼吸感」。

| 场景 | 推荐留白 |
|------|----------|
| 页面内容区 | padding: 80px 以上 |
| 区块之间 | margin: 60-100px |
| 卡片内容 | padding: 24-32px |
| 图文之间 | gap: 20-28px |

### 3. 卡片叠层
层叠感制造深度，让页面「立体」起来。

```css
/* 基础卡片 */
.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 8px 30px rgba(0,0,0,0.08);
}

/* 悬停浮起 */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.12);
}
```

### 4. 弹簧动画
避免线性动画，使用弹簧曲线制造自然感。

```css
/* 高级感过渡 */
transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

/* 而不是 */
transition: all 0.2s ease;
```

## AI 调用示例

```
请用 Taste Skill 的高级感原则，重新设计这个卡片组件：
- 当前问题：显得廉价、缺乏层次感
- 目标：看起来像高端 SaaS 产品
- 保持功能不变，只提升视觉质量
```

## 安装方式

此 Skill 通过对话直接调用，无需安装命令。  
Stars：★ 3.4k+
