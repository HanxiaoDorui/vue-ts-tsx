# vue-cli3-ts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```


// 使用.tsx替代vue需要解决的系列问题
/**
 * 1 与vue兼容，能被识别
 * 2 可以使用v-model v-on ✅
 * 3 watch computed dataObserver methods
 * 4 create mounted生命周期
 * 5 css modules 外部引入
 * 6 css modules穿透普通样式
 * 7 解决 props传值问题
 * 8 检测对vuex的支持
 * 9 插槽是否支持
 * 10 vue自带属性$xxx 和ref等功能
 * 
 */