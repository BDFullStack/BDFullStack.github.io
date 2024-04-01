import comp from "/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/test.html.vue"
const data = JSON.parse("{\"path\":\"/posts/test.html\",\"title\":\"组件启动与停止\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2024-03-27T00:00:00.000Z\",\"category\":[\"组件启动与停止\"],\"tag\":[\"大数据\",\"命令\",\"总结\"],\"description\":\"组件启动与停止 hadoop：（data4,5,6） ​ start-all.sh ​ stop-all.sh hive（data6） doris kafka 运行以下命令以便以正确的顺序启动所有服务(在kafka的目录里)： 打开另一个终端会话并运行： canal\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/BDFullStack/posts/test.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"大数据全栈知识体系\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"组件启动与停止\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"组件启动与停止 hadoop：（data4,5,6） ​ start-all.sh ​ stop-all.sh hive（data6） doris kafka 运行以下命令以便以正确的顺序启动所有服务(在kafka的目录里)： 打开另一个终端会话并运行： canal\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Jack\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"大数据\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"命令\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"总结\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-03-27T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"组件启动与停止\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-03-27T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Jack\\\",\\\"url\\\":\\\"https://github.com/BDFullStack\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.46,\"words\":138},\"filePathRelative\":\"posts/test.md\",\"localizedDate\":\"2024年3月27日\",\"excerpt\":\"\\n<p>hadoop：（data4,5,6）</p>\\n<p>​\\tstart-all.sh</p>\\n<p>​\\tstop-all.sh</p>\\n<p>hive（data6）</p>\\n<div class=\\\"language-text\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code>nohup hive --service metastore &gt;&gt; /data-platform/hive_metastore.log 2&gt;1&amp;\\nnohup hive --service hiveserver2 &gt;&gt; /data-platform/hiveserver2.log 2&gt;1&amp;\\n\\nbeeline -n root -u jdbc:hive2://192.168.2.11:10000 --verbose=true\\n</code></pre></div>\",\"autoDesc\":true}")
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
