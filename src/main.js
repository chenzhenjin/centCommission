import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './plugins' //加载第三库 自定义svg 路由 报错 挂载vue弹框 提示 确认等等
import '@/layouts/export' //加载布局组件
import '@/components/export' //加载全局组件
import directive from '@/directive' //加载全局指令
Vue.use(directive)
import '@/styles/themes/index.css'
import '@/styles/reset.scss'
/**
 * @author vue-admin-beautiful （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('@/utils/static')
  mockXHR()
}
Vue.config.productionTip = false

new Vue({
  el: '#vue-admin-beautiful',
  router,
  store,
  render: (h) => h(App),
})
