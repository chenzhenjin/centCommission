/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-11-16 18:26:54
 * @LastEditTime: 2020-11-18 15:14:57
 * @Descripttion: 动态加载当前目录下的js文件
 */
// import LimitInputNumber from './limit-input-number'
// import debounceInput from './debounce-input'
let list = []
//directory {String} -读取文件的路径
//useSubdirectories {Boolean} -是否遍历文件的子目录
//regExp {RegExp} -匹配文件的正则
const requireDirective = require.context('.', false, /\.js$/)
//提供三个接口
//webpackContext 加载文件的接口  调用加载文件__webpack_require__再调用webpackContextResolve
//webpackContext.resolve = webpackContextResolve  根据相对路径去找到绝对路径名接口
//webpackContext.keys = function(){ } 从map取出所有的相对路径接口
console.log('requireDirective', requireDirective)
requireDirective.keys().map((fileName, i) => {
  console.log('fileName', fileName, i)
  if (!fileName.includes('index.js')) {
    const directiveConfig = requireDirective(fileName)
    list.push({ fn: directiveConfig, name: fileName.slice(2).slice(0, -3) })
    console.log('directiveConfig', directiveConfig)
  }
})
export default {
  install(Vue) {
    console.log('install', list)
    list.map((item) => {
      Vue.directive(item.name, item.fn.default || item.fn)
    })
    // Vue.directive('limit-input-number', LimitInputNumber)
    // Vue.directive('debounce-input', debounceInput)
  },
}
