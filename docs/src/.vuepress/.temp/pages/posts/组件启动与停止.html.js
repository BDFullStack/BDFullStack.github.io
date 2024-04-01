import comp from "/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/组件启动与停止.html.vue"
const data = JSON.parse("{\"path\":\"/posts/%E7%BB%84%E4%BB%B6%E5%90%AF%E5%8A%A8%E4%B8%8E%E5%81%9C%E6%AD%A2.html\",\"title\":\"组件启动与停止\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"组件启动与停止 hadoop：（data4,5,6） ​ start-all.sh ​ stop-all.sh hive（data6） doris kafka 运行以下命令以便以正确的顺序启动所有服务(在kafka的目录里)： 打开另一个终端会话并运行： canal\"},\"headers\":[],\"readingTime\":{\"minutes\":0.38,\"words\":113},\"filePathRelative\":\"posts/组件启动与停止.md\",\"excerpt\":\"\\n<p>hadoop：（data4,5,6）</p>\\n<p>​\\tstart-all.sh</p>\\n<p>​\\tstop-all.sh</p>\\n<p>hive（data6）</p>\\n<div class=\\\"language-text\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code>nohup hive --service metastore &gt;&gt; /data-platform/hive_metastore.log 2&gt;1&amp;\\nnohup hive --service hiveserver2 &gt;&gt; /data-platform/hiveserver2.log 2&gt;1&amp;\\n\\nbeeline -n root -u jdbc:hive2://192.168.2.11:10000 --verbose=true\\n</code></pre></div>\",\"autoDesc\":true}")
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
