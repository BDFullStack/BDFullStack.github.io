      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[8,9,7,2,1,0,15,16,3,4,5,6,17,18,19,10,11,12,14,13]}},"star":{"/":{"path":"/star/","indexes":[3,8,17,9]}},"timeline":{"/":{"path":"/timeline/","indexes":[7,8,2,1,0,15,16,3,4,5,6,17,18,9]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      