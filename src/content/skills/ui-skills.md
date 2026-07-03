---
name: "ui-skills"
title: "UI 专项检查库"
description: "15 个专项 Skill，模块化解决 UI 问题。包含无障碍审计、SEO 优化、动画性能、响应式布局、颜色对比度检查等 15 个独立模块，按需安装。"
category: "审查交付"
tags: ["无障碍", "SEO", "动画性能", "响应式", "对比度检查", "模块化"]
ai_trigger:
  - "检查页面可访问性"
  - "优化响应式布局"
  - "检查颜色对比度"
  - "动画性能优化"
  - "UI 质量审查"
ai_output: "针对具体问题的专项检查报告和修复方案，包含代码示例和优先级建议"
difficulty: "intermediate"
tools: ["Claude", "CodeFlicker"]
related: ["accessibility-check", "frontend-design"]
updated: "2026-07"
---

## 是什么

UI Skills 是一个按问题拆分的「专项工具箱」，每个模块独立解决一类 UI 问题。

不需要全部安装，找到你需要的那个，按需使用。

## 15 个专项模块

### 可访问性类
**1. Accessibility Audit（无障碍审计）**
- 检查 WCAG 2.1 AA/AAA 标准合规性
- 输出问题清单 + 修复代码示例
- 覆盖：颜色对比度、键盘导航、ARIA 标签、屏幕阅读器

**2. Color Contrast Checker（颜色对比度）**
- 自动计算前景色与背景色对比度
- 标注不达标的色值组合
- 提供合规替换建议

**3. Focus Management（焦点管理）**
- 检查 Tab 键导航顺序
- 确保焦点可见性
- 模态框焦点陷阱验证

### 性能类
**4. Animation Performance（动画性能）**
- 检查是否使用 GPU 加速属性（transform/opacity）
- 标记可能导致重排的动画
- 提供性能优化版替代方案

**5. Image Optimization（图片优化）**
- 检查图片是否缺少 alt 属性
- 建议 WebP 格式转换
- 懒加载实现建议

### 响应式类
**6. Responsive Layout（响应式布局）**
- 检查断点设置合理性
- 移动端触控区域尺寸验证（≥44px）
- 字体在小屏幕下的可读性

**7. Mobile-First Audit**
- 从移动端视角审查所有布局
- 检查水平滚动问题
- 点击目标密度分析

### SEO 类
**8. SEO Audit（SEO 审查）**
- 检查 H1-H6 标签层级
- Meta 描述完整性
- 结构化数据建议

### UI 质量类
**9. Spacing Consistency（间距一致性）**
- 检查是否使用统一间距单位
- 标记不在 4px 倍数上的间距值
- 生成间距 Token 建议

**10. Typography Audit（字体审查）**
- 检查字号是否符合层级规范
- 行高和字间距合理性
- 中文字体降级方案

**11. Color System Audit（色彩系统审查）**
- 检查是否所有颜色都在 Token 体系内
- 识别硬编码色值
- 生成色彩 Token 映射

**12. Component Consistency（组件一致性）**
- 检查同类组件样式是否统一
- 圆角、阴影、边框的一致性验证

**13. Error State Design（错误态设计）**
- 检查表单是否有完整错误处理
- 空状态、加载态、错误态覆盖度

**14. Dark Mode Audit（深色模式）**
- 检查颜色变量是否支持深色模式切换
- 识别硬编码颜色（无法自适应）

**15. Copy Quality（文案质量）**
- 检查 UI 文案是否清晰易懂
- 按钮、提示、错误信息的表达质量
- 建议更清晰的替代文案

## AI 调用示例

```
使用 UI Skills - Accessibility Audit，
请检查以下页面代码的可访问性问题：
[粘贴代码]

重点关注：
1. 所有图片是否有 alt 属性
2. 颜色对比度是否达到 WCAG AA（4.5:1）
3. 表单是否有正确的 label 关联
4. 是否支持键盘操作
```

## 安装方式

```bash
npx skills add ibelick/ui-skills
```

GitHub：[ibelick/ui-skills ↗](https://github.com/ibelick/ui-skills)  
Stars：★ 1k+
