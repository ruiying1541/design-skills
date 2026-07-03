---
name: "color-system"
title: "色彩系统设计"
description: "为产品建立完整的色彩体系，包括品牌色、功能色、中性色和语义色，确保视觉一致性与可维护性。"
category: "视觉生成"
tags: ["颜色", "设计系统", "品牌色", "色板", "语义色", "Design Token"]
ai_trigger:
  - "需要为产品建立配色方案"
  - "检查色彩规范是否完整"
  - "生成色彩 token 命名体系"
  - "分析现有产品配色问题"
ai_output: "配色方案文档、色值对照表、语义色命名规范、Design Token 结构"
difficulty: "intermediate"
tools: ["Figma", "Coolors", "Contrast Checker", "Huemint"]
related: ["typography", "accessibility-check"]
updated: "2026-07-03"
---

## 什么是色彩系统？

色彩系统是产品设计语言的基础，它定义了产品中所有颜色的使用规则。一套好的色彩系统应当：

- **可预测**：设计师知道在什么场景使用什么颜色
- **可扩展**：新增组件时有明确的颜色可选
- **可访问**：满足 WCAG 对比度标准
- **可维护**：通过 Design Token 统一管理，一处修改全局生效

---

## 色彩分层架构

### Layer 1：原始色板（Primitive）

原始色板是最底层的颜色定义，通常是 50-900 的色阶梯度。不直接被组件引用，只被语义层引用。

```
brand-50:   #EEF2FF
brand-100:  #E0E7FF
brand-200:  #C7D2FE
...
brand-600:  #4F46E5   ← 主品牌色
brand-700:  #4338CA
brand-900:  #312E81
```

### Layer 2：语义色（Semantic）

语义色是连接设计意图和原始色板的桥梁。按功能命名，而非按颜色命名。

| 语义色名 | 含义 | 典型值 |
|---------|------|-------|
| `color-primary` | 品牌主色，主要交互元素 | brand-600 |
| `color-primary-hover` | 主色悬停态 | brand-700 |
| `color-success` | 成功/正向状态 | green-500 |
| `color-warning` | 警告/注意状态 | yellow-500 |
| `color-danger` | 错误/危险状态 | red-500 |
| `color-text-primary` | 主要文本 | gray-900 |
| `color-text-secondary` | 辅助文本 | gray-500 |
| `color-text-disabled` | 禁用文本 | gray-300 |
| `color-bg-base` | 页面背景 | white |
| `color-bg-subtle` | 微弱背景 | gray-50 |
| `color-border` | 标准描边 | gray-200 |

### Layer 3：组件色（Component）

组件层引用语义色，处理暗色模式适配。

```css
.button-primary {
  background: var(--color-primary);
  color: var(--color-text-on-primary);
}
.button-primary:hover {
  background: var(--color-primary-hover);
}
```

---

## 中性色（Gray Scale）

中性色是使用频率最高的颜色，承载文本、背景、描边、分隔线等大量基础角色。

建议使用 **10 级中性色**：

```
gray-0:    #FFFFFF   ← 纯白
gray-50:   #F9FAFB   ← 页面背景
gray-100:  #F3F4F6   ← 卡片背景
gray-200:  #E5E7EB   ← 描边
gray-300:  #D1D5DB   ← 禁用描边
gray-400:  #9CA3AF   ← placeholder
gray-500:  #6B7280   ← 辅助文本
gray-600:  #4B5563   ← 次要文本
gray-700:  #374151   ← 主要文本（深色背景白字场景）
gray-800:  #1F2937   ← 标题
gray-900:  #111827   ← 最深文本
```

---

## 功能色（Functional）

除品牌色外，产品通常需要四类功能色：

| 类型 | 用途 | 颜色参考 |
|------|------|---------|
| Success 成功 | 操作完成、上传成功、余额充足 | #10B981 |
| Warning 警告 | 需要注意但未出错 | #F59E0B |
| Danger 危险 | 错误、删除、高风险操作 | #EF4444 |
| Info 信息 | 提示、说明、中性通知 | #3B82F6 |

每种功能色需要 5 个色阶：浅背景色、深背景色、描边色、文字色、图标色。

---

## 暗色模式适配

暗色模式不是简单的颜色取反，而是语义层的重新映射：

```css
:root {
  --color-bg-base: #FFFFFF;
  --color-text-primary: #111827;
}

[data-theme="dark"] {
  --color-bg-base: #0F172A;
  --color-text-primary: #F8FAFC;
}
```

原始色板保持不变，只改变语义色的指向。

---

## AI 辅助使用

AI 可以帮助你：

1. **生成 token 结构**：给 AI 品牌主色（HEX），它能生成完整的 50-900 色阶
2. **检查对比度**：AI 可以计算前景色和背景色的对比度是否达标
3. **分析色彩问题**：给 AI 截图，它能指出哪些颜色使用违反了语义
4. **适配暗色模式**：AI 可以将亮色 token 映射为合适的暗色值

**触发词示例：**
> "帮我为主色 #6366F1 生成完整的设计系统色板，包括 50-900 所有色阶，以及对应的语义 token 命名"
