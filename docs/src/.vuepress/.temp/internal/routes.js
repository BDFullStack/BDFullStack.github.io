export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"博客主页","i":"home"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>一个大数据爱好者，持续学习。</p>\n","t":"介绍页","i":"circle-info","y":"a"} }],
  ["/posts/cherry.html", { loader: () => import(/* webpackChunkName: "cherry.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/cherry.html.js"), meta: {"d":1641686400000,"l":"2022年1月9日","c":["樱桃"],"g":["红","小","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"樱桃","i":"pen-to-square","y":"a"} }],
  ["/posts/dragonfruit.html", { loader: () => import(/* webpackChunkName: "dragonfruit.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/dragonfruit.html.js"), meta: {"d":1641772800000,"l":"2022年1月10日","c":["火龙果","水果"],"g":["红","大"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"火龙果","i":"pen-to-square","y":"a"} }],
  ["/posts/strawberry.html", { loader: () => import(/* webpackChunkName: "strawberry.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/strawberry.html.js"), meta: {"d":1641859200000,"l":"2022年1月11日","c":["水果","草莓"],"g":["红","小"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"草莓","i":"pen-to-square","y":"a"} }],
  ["/posts/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/test.html.js"), meta: {"d":1711497600000,"l":"2024年3月27日","c":["组件启动与停止"],"g":["大数据","命令","总结"],"e":"\n<p>hadoop：（data4,5,6）</p>\n<p>​\tstart-all.sh</p>\n<p>​\tstop-all.sh</p>\n<p>hive（data6）</p>\n<div class=\"language-text\" data-ext=\"text\" data-title=\"text\"><pre class=\"language-text\"><code>nohup hive --service metastore &gt;&gt; /data-platform/hive_metastore.log 2&gt;1&amp;\nnohup hive --service hiveserver2 &gt;&gt; /data-platform/hiveserver2.log 2&gt;1&amp;\n\nbeeline -n root -u jdbc:hive2://192.168.2.11:10000 --verbose=true\n</code></pre></div>","t":"组件启动与停止","i":"pen-to-square","y":"a"} }],
  ["/posts/tomato.html", { loader: () => import(/* webpackChunkName: "tomato.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/tomato.html.js"), meta: {"d":1641945600000,"l":"2022年1月12日","c":["蔬菜"],"g":["红","圆"],"u":true,"v":"/assets/images/cover2.jpg","e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"番茄","i":"pen-to-square","y":"a"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"c":["使用指南"],"t":"主要功能与配置演示","i":"laptop-code","y":"a"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"c":["使用指南"],"g":["禁用"],"e":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","t":"布局与功能禁用","i":"gears","O":4,"y":"a"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"c":["使用指南"],"g":["加密"],"n":true,"t":"密码加密的文章","i":"lock","y":"a"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"c":["指南"],"g":["布局"],"e":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","t":"布局","i":"object-group","O":2,"y":"a"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"c":["使用指南"],"g":["Markdown"],"e":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","t":"Markdown 展示","i":"fab fa-markdown","O":2,"y":"a"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"a":"Ms.Hope","d":1577836800000,"l":"2020年1月1日","c":["使用指南"],"g":["页面配置","使用指南"],"u":true,"v":"/assets/images/cover1.jpg","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","t":"页面配置","i":"file","O":3,"y":"a"} }],
  ["/posts/banana/1.html", { loader: () => import(/* webpackChunkName: "1.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/banana/1.html.js"), meta: {"d":1641340800000,"l":"2022年1月5日","c":["香蕉","水果"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"香蕉 1","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/2.html", { loader: () => import(/* webpackChunkName: "2.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/banana/2.html.js"), meta: {"d":1641427200000,"l":"2022年1月6日","c":["香蕉","水果"],"g":["黄","弯曲的","长"],"e":"\n<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>\n","t":"香蕉 2","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/3.html", { loader: () => import(/* webpackChunkName: "3.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/banana/3.html.js"), meta: {"d":1641513600000,"l":"2022年1月7日","c":["香蕉"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"香蕉 3","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/4.html", { loader: () => import(/* webpackChunkName: "4.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/banana/4.html.js"), meta: {"d":1641600000000,"l":"2022年1月8日","c":["香蕉"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"香蕉 4","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/1.html", { loader: () => import(/* webpackChunkName: "1.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/apple/1.html.js"), meta: {"d":1640995200000,"l":"2022年1月1日","c":["苹果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"苹果 1","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/2.html", { loader: () => import(/* webpackChunkName: "2.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/apple/2.html.js"), meta: {"d":1641081600000,"l":"2022年1月2日","c":["苹果"],"g":["红","大","圆"],"e":"\n<p>一个被星标了的苹果文章。</p>\n","t":"苹果 2","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/3.html", { loader: () => import(/* webpackChunkName: "3.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/apple/3.html.js"), meta: {"d":1641168000000,"l":"2022年1月3日","c":["苹果","水果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"苹果 3","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/4.html", { loader: () => import(/* webpackChunkName: "4.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/apple/4.html.js"), meta: {"d":1641254400000,"l":"2022年1月4日","c":["苹果","水果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","t":"苹果 4","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/posts/banana/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/banana/index.html.js"), meta: {"t":"Banana"} }],
  ["/posts/apple/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/posts/apple/index.html.js"), meta: {"t":"Apple"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E6%A8%B1%E6%A1%83/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/樱桃/index.html.js"), meta: {"t":"樱桃 分类","I":false} }],
  ["/category/%E7%81%AB%E9%BE%99%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/火龙果/index.html.js"), meta: {"t":"火龙果 分类","I":false} }],
  ["/category/%E6%B0%B4%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/水果/index.html.js"), meta: {"t":"水果 分类","I":false} }],
  ["/category/%E8%8D%89%E8%8E%93/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/草莓/index.html.js"), meta: {"t":"草莓 分类","I":false} }],
  ["/category/%E7%BB%84%E4%BB%B6%E5%90%AF%E5%8A%A8%E4%B8%8E%E5%81%9C%E6%AD%A2/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/组件启动与停止/index.html.js"), meta: {"t":"组件启动与停止 分类","I":false} }],
  ["/category/%E8%94%AC%E8%8F%9C/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/蔬菜/index.html.js"), meta: {"t":"蔬菜 分类","I":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"t":"使用指南 分类","I":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"t":"指南 分类","I":false} }],
  ["/category/%E9%A6%99%E8%95%89/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/香蕉/index.html.js"), meta: {"t":"香蕉 分类","I":false} }],
  ["/category/%E8%8B%B9%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/category/苹果/index.html.js"), meta: {"t":"苹果 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E7%BA%A2/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/红/index.html.js"), meta: {"t":"标签: 红","I":false} }],
  ["/tag/%E5%B0%8F/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/小/index.html.js"), meta: {"t":"标签: 小","I":false} }],
  ["/tag/%E5%9C%86/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/圆/index.html.js"), meta: {"t":"标签: 圆","I":false} }],
  ["/tag/%E5%A4%A7/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/大/index.html.js"), meta: {"t":"标签: 大","I":false} }],
  ["/tag/%E5%A4%A7%E6%95%B0%E6%8D%AE/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/大数据/index.html.js"), meta: {"t":"标签: 大数据","I":false} }],
  ["/tag/%E5%91%BD%E4%BB%A4/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/命令/index.html.js"), meta: {"t":"标签: 命令","I":false} }],
  ["/tag/%E6%80%BB%E7%BB%93/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/总结/index.html.js"), meta: {"t":"标签: 总结","I":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"t":"标签: 禁用","I":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"t":"标签: 加密","I":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"t":"标签: 布局","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"t":"标签: Markdown","I":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"t":"标签: 页面配置","I":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"t":"标签: 使用指南","I":false} }],
  ["/tag/%E9%BB%84/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/黄/index.html.js"), meta: {"t":"标签: 黄","I":false} }],
  ["/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/弯曲的/index.html.js"), meta: {"t":"标签: 弯曲的","I":false} }],
  ["/tag/%E9%95%BF/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/tag/长/index.html.js"), meta: {"t":"标签: 长","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "index.html" */"/vuepress-starter/docs/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
