import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "大数据全栈知识体系",
  description: "专注大数据学习与总结。包含数据建模、数仓开发、数据治理、数据安全、大数据运维和数据湖等技术文章。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
