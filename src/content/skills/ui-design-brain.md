---
name: "ui-design-brain"
title: "UI Design Brain"
description: "60+ 组件最佳实践，像资深设计师一样决策。用 component.gallery 精选知识库替代 AI 猜测，内含每个组件的最佳实践和反模式库。"
category: "组件打磨"
tags: ["组件最佳实践", "反模式", "设计决策", "component.gallery", "知识库"]
ai_trigger:
  - "这个组件怎么设计才对"
  - "按钮/表单/导航的最佳实践"
  - "组件设计有哪些反模式"
  - "参考最佳实践重新设计"
ai_output: "基于真实产品最佳实践的组件设计方案，包含做法、避坑点和可访问性说明"
difficulty: "beginner"
tools: ["Claude", "CodeFlicker", "Figma"]
related: ["frontend-design", "accessibility-check"]
updated: "2026-07"
---

## 是什么

UI Design Brain 是一个「组件级设计知识库」，收录了 60+ 常见 UI 组件的：

- ✅ **最佳实践**：行业验证的正确做法
- ❌ **反模式**：常见错误及原因
- ♿ **可访问性要求**：WCAG 相关规范
- 📐 **尺寸规范**：建议的最小尺寸、间距

数据来源：[component.gallery](https://component.gallery) — 收录了 60+ 顶级产品的组件截图对比。

## 60+ 组件覆盖范围

### 基础组件
**Button（按钮）**
- ✅ 主按钮只在页面中出现一次
- ✅ 文字描述具体操作（「提交申请」而不是「确认」）
- ✅ Loading 态要禁用点击并显示进度
- ❌ 不要用颜色作为唯一区分手段
- 最小点击区域：44×44px

**Input（输入框）**
- ✅ 标签在输入框上方，不要用 placeholder 代替标签
- ✅ 错误信息在输入框下方，用红色 + 图标双重提示
- ✅ 宽度反映预期内容长度（电话号码宽度 ≠ 地址宽度）
- ❌ 不要让输入框消失在背景里（确保有可见边框）

**Checkbox / Radio**
- ✅ 点击区域包含标签文字，不只是图标
- ✅ 多选用 Checkbox，单选用 Radio
- ❌ 不要两个都用或混用

### 导航组件
**Navigation（导航栏）**
- ✅ 当前页面在导航中有明确选中态
- ✅ Logo 点击可回首页
- ❌ 不要超过 7 个导航项

**Tab（标签页）**
- ✅ 选中态颜色对比明显
- ✅ 内容切换要有轻微动画
- ❌ 不要用 Tab 展示大量数据筛选（用 Filter 替代）

### 反馈组件
**Toast / Notification**
- ✅ 4 秒后自动消失（非错误）
- ✅ 提供手动关闭按钮
- ✅ 错误信息不自动消失
- ❌ 不要同时出现多个 Toast

## AI 调用示例

```
使用 UI Design Brain，帮我设计一个文件上传组件：
- 支持拖拽和点击两种方式
- 需要显示上传进度
- 支持多文件，可以删除单个文件
- 包含完整的错误处理（文件太大、格式不支持）
请参考最佳实践，给出设计方案和交互说明
```

## 安装方式

```bash
# 克隆仓库，将 md 文件放到 /skills 中
git clone https://github.com/carmahhawwari/ui-design-brain
```

GitHub：[carmahhawwari/ui-design-brain ↗](https://github.com/carmahhawwari/ui-design-brain)  
Stars：★ 600+
