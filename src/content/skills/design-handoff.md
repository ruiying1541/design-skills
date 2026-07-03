---
name: "design-handoff"
title: "设计交付规范"
description: "建立设计师向开发工程师交付设计稿的完整规范，减少沟通成本，确保还原度，避免「设计师画一套，开发做一套」。"
category: "审查交付"
tags: ["设计交付", "Figma", "标注", "切图", "开发协作", "还原度"]
ai_trigger:
  - "设计稿交付给开发"
  - "如何做设计标注"
  - "Figma 交付规范"
  - "检查设计稿交付完整度"
  - "切图命名规范"
ai_output: "交付 checklist、切图命名规范、Figma 规范文件结构建议"
difficulty: "beginner"
tools: ["Figma", "Figma Dev Mode", "Zeplin"]
related: ["component-audit", "spacing-grid"]
updated: "2026-07-03"
---

## 为什么需要交付规范？

缺乏规范的设计交付会导致：

- 开发找不到切图，频繁打扰设计师
- 同一元素在设计稿和代码中间距相差 2-4px
- 颜色值传递错误（截图取色 vs 精确色值）
- 交互说明口头传达，开发实现时遗忘

一套清晰的交付规范能**将沟通成本降低 60% 以上**。

---

## Figma 文件结构规范

### 页面命名

```
Cover          ← 封面，展示项目信息
Design         ← 主设计稿（按功能模块分 Section）
Components     ← 本项目专用组件（非通用组件库）
Prototype      ← 原型流程
Archive        ← 历史版本归档（不删除）
```

### Section 命名

```
🔵 [功能模块名] — 开发中
✅ [功能模块名] — 已交付
🟡 [功能模块名] — 待评审
```

### Frame 命名

```
格式：[平台] / [页面名] / [状态]

示例：
  iOS / 首页 / 默认
  iOS / 首页 / 加载中
  Web / 用户中心 / 已登录
```

---

## 交付前 Checklist

### 视觉层
- [ ] 所有文字使用 Text Styles（非手动输入字号）
- [ ] 所有颜色使用 Color Styles 或 Variables
- [ ] 所有间距使用整数值（无小数点）
- [ ] 所有元素正确命名（非 Frame 123、Rectangle 456）

### 资源层
- [ ] 需要切图的元素已标记为 Export
- [ ] 切图按命名规范命名（见下方）
- [ ] 大图/背景图已提供 1x 和 2x
- [ ] 图标已导出 SVG 格式

### 说明层
- [ ] 交互说明已用 Figma 注释或单独说明页标注
- [ ] 特殊动效（非常规过渡）有详细描述
- [ ] 边界情况（空状态、加载状态、错误状态）已设计
- [ ] 不同屏幕尺寸适配方案已说明

---

## 切图命名规范

格式：`[类型前缀]_[模块名]_[描述]_[倍率].[格式]`

| 类型 | 前缀 | 示例 |
|------|------|------|
| 图标 | `ic_` | `ic_home_filled@2x.png` |
| 背景图 | `bg_` | `bg_login_top.jpg` |
| 插图/空状态 | `img_` | `img_empty_search.png` |
| Logo | `logo_` | `logo_main@2x.png` |
| Banner | `banner_` | `banner_new_year.jpg` |

命名规则：
- 全小写，使用下划线分隔
- 不含中文和特殊字符
- iOS 端附加 `@2x` `@3x`，Android 端放入 `mdpi/hdpi/xhdpi` 目录

---

## 颜色交付方式

**不要**：截图给开发取色（误差大）  
**推荐**：

1. **Figma Dev Mode**：开发直接在 Figma 复制色值（HEX/RGB/HSL）
2. **Design Token 文件**：直接提供 `tokens.json`，开发导入
3. **Figma Variables**：使用 Figma 变量系统，一键导出 token

---

## 交互说明模板

对于复杂交互，在 Figma 旁附上说明框：

```
【触发条件】用户点击「提交」按钮
【动画类型】Spring 弹性动画
【持续时间】300ms
【缓动函数】ease-out
【特殊说明】
  - 按钮点击后进入 Loading 状态，禁止重复点击
  - 成功后 Toast 停留 2 秒后自动消失
  - 失败时 Input 边框变红，显示错误文字
```

---

## 与开发的协作流程

```
1. 设计完成 → 设计 Review（自查 checklist）
2. 产品 Review → 修改意见同步设计
3. 标记 Section 为「待评审」→ 通知开发评审
4. 开发提出疑问 → 48h 内设计回复
5. 开发完成 → 设计走查（还原度检查）
6. 对齐问题 → 记录对齐单，分优先级修复
```

---

## AI 辅助使用

**触发词示例：**
> "帮我生成一个设计稿交付前的完整 checklist，包括视觉规范检查、资源输出检查和交互说明检查三个维度"
