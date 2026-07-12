<p align="center">
  <img alt="logo" src="./.github/assets/logo.png" width="160">
</p>
<h1 align="center">Oiyo Starter</h1>

<p align="center">
  <strong>由 <a href="https://oiyo.js.org">Oiyo</a> 赋能的 Wot Stater 快速启动模板</strong>
</p>

<p align="center">
  <a href="https://oiyo.js.org/"><img src="https://img.shields.io/badge/Framework-Oiyo-4F46E5?style=flat-square" alt="Oiyo"></a>
  <a href="https://wot-ui.cn/"><img src="https://img.shields.io/badge/UI-Wot_UI-1C64FD?style=flat-square" alt="Wot UI"></a>
  <a href="https://oiyo.js.org/"><img src="https://img.shields.io/badge/Docs-oiyo.js.org-D47F24?style=flat-square" alt="Docs"></a>
  <a href="https://pinia.vuejs.org/"><img src="https://img.shields.io/badge/State-Pinia-FFD859?style=flat-square" alt="Pinia"></a>
  <a href="https://echarts.apache.org/"><img src="https://img.shields.io/badge/Charts-Uni_ECharts-299764?style=flat-square" alt="ECharts"></a>
</p>

<p align="center">
  <a href="https://oiyo.js.org/">📖 在线文档</a>
  ·
  <a href="#快速开始">🚀 快速开始</a>
  ·
  <a href="#项目结构">🔑 技术栈</a>
</p>

---

## 简介

**Oiyo Starter** 是由 [Oiyo](https://oiyo.js.org) 框架赋能 Wot Starter 变体的快速启动模板，面向 UniApp 多端开发场景。

它把页面元信息、布局、自动导入和工程约定整合在一起，让你从第一行业务代码开始，而不是从脚手架配置开始。

| 能力 | 说明 |
| --- | --- |
| App.vue | 应用级组件编写 `<template>` 以及 管理应用级共享状态 | 
| 约定式页面 | 页面内 `definePageMeta()`，自动生成路由与 `pages.json` |
| 布局系统 | `layouts/` + `layout` 元信息，TabBar / 默认布局开箱即用 |
| 自动导入 | 组件、API、Store、工具函数按约定扫描，少写 import |
| UI 与样式 | Wot UI 2.x + UnoCSS 原子化样式 |
| 状态与图表 | Pinia 持久化、ECharts / uni-echarts 示例页 |
| AI 友好 | 内置 Skills，便于 Agent 理解项目约定 |

---

## 技术栈

- **框架**：Oiyo · UniApp · Vue 3 · TypeScript · Vite
- **UI**：Wot UI
- **路由**：Oiyo 内置 · @wot-ui/router 
- **样式**：UnoCSS · SASS
- **状态**：Pinia（含持久化插件）
- **图表**：ECharts · uni-echarts
- **请求**：http（Oiyo内置）

---

## 快速开始

### 环境要求

- Node.js 18+
- 包管理器推荐 pnpm < 11

### 安装依赖

```bash
pnpm install
```

安装完成后会自动执行 `oiyo prepare`，生成类型与路由元数据。

### 启动开发

```bash
pnpm dev
```

按终端提示选择目标平台（H5 / 微信小程序等）。

### 类型检查

```bash
pnpm typecheck
```

### 构建

```bash
# 默认构建
pnpm build

# H5 分环境构建
pnpm build:h5:development
pnpm build:h5:staging
pnpm build:h5:production
```

## 相关链接

| 资源 | 链接 |
| --- | --- |
| Oiyo 文档 | https://oiyo.js.org/ |
| Wot UI | https://wot-ui.cn/ |


## 许可

本模板用于快速启动项目，遵循源库协议内容