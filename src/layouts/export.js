/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2021-04-22 17:30:26
 * @LastEditTime: 2021-04-25 19:31:59
 * @Descripttion: 公共布局（node_modules以及当前目录下）和主题样式导入
 */

import Vue from 'vue'

const requireComponents = require.context('./components', true, /\.vue$/)
requireComponents.keys().forEach((fileName) => {
  const componentConfig = requireComponents(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})
