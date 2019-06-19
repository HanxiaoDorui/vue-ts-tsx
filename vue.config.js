let path = require('path'); 
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@style': path.resolve(__dirname, 'src', 'style'),
      }
    }
  },
  // css: {
  //   loaderOptions: {
	// 		sass: {
	// 			//设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
	// 			data: `@import '@style/comon.scss;data: `$baseUrl: "/";`
	// 		}
  //   },
  // },
}