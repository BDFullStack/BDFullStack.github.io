export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"樱桃":{"path":"/category/樱桃/","indexes":[0]},"火龙果":{"path":"/category/火龙果/","indexes":[1]},"水果":{"path":"/category/水果/","indexes":[2,1,3,4,5,6]},"草莓":{"path":"/category/草莓/","indexes":[2]},"组件启动与停止":{"path":"/category/组件启动与停止/","indexes":[7]},"蔬菜":{"path":"/category/蔬菜/","indexes":[8]},"使用指南":{"path":"/category/使用指南/","indexes":[9,10,11,12,13]},"指南":{"path":"/category/指南/","indexes":[14]},"香蕉":{"path":"/category/香蕉/","indexes":[15,16,3,4]},"苹果":{"path":"/category/苹果/","indexes":[5,6,17,18]}}}},"tag":{"/":{"path":"/tag/","map":{"红":{"path":"/tag/红/","indexes":[8,2,1,0,5,6,17,18]},"小":{"path":"/tag/小/","indexes":[2,0]},"圆":{"path":"/tag/圆/","indexes":[8,0,5,6,17,18]},"大":{"path":"/tag/大/","indexes":[1,5,6,17,18]},"大数据":{"path":"/tag/大数据/","indexes":[7]},"命令":{"path":"/tag/命令/","indexes":[7]},"总结":{"path":"/tag/总结/","indexes":[7]},"禁用":{"path":"/tag/禁用/","indexes":[11]},"加密":{"path":"/tag/加密/","indexes":[12]},"布局":{"path":"/tag/布局/","indexes":[14]},"Markdown":{"path":"/tag/markdown/","indexes":[13]},"页面配置":{"path":"/tag/页面配置/","indexes":[9]},"使用指南":{"path":"/tag/使用指南/","indexes":[9]},"黄":{"path":"/tag/黄/","indexes":[15,16,3,4]},"弯曲的":{"path":"/tag/弯曲的/","indexes":[15,16,3,4]},"长":{"path":"/tag/长/","indexes":[15,16,3,4]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

