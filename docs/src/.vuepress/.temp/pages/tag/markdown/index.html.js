import comp from "/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/markdown/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/markdown/\",\"title\":\"标签: Markdown\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签: Markdown\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"Markdown\",\"key\":\"tag\"},\"layout\":\"BlogCategory\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/BDFullStack/tag/markdown/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"大数据全栈知识体系\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"标签: Markdown\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Jack\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"标签: Markdown\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
