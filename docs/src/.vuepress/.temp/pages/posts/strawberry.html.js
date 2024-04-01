import comp from "/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/strawberry.html.vue"
const data = JSON.parse("{\"path\":\"/posts/strawberry.html\",\"title\":\"草莓\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-11T00:00:00.000Z\",\"category\":[\"水果\",\"草莓\"],\"tag\":[\"红\",\"小\"],\"description\":\"草莓 标题 2 这里是内容。 标题 3 这里是内容。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/BDFullStack/posts/strawberry.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"大数据全栈知识体系\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"草莓\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"草莓 标题 2 这里是内容。 标题 3 这里是内容。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Jack\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"红\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"小\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-11T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"草莓\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-11T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Jack\\\",\\\"url\\\":\\\"https://github.com/BDFullStack\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"posts/strawberry.md\",\"localizedDate\":\"2022年1月11日\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
