/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2021-04-23 16:10:48
 * @LastEditTime: 2021-04-25 12:35:46
 * @Descripttion: 加载组件
 */
import Vue from 'vue'
import './element' //全局安装element组件
import './support' //依赖一定有vab-icon zx-layouts的提醒
import '@/remixIcon' // 加载全局svg图标
import '@/config/permission' //动态加载路由组件 路由拦截 权限访问
// import '@/utils/errorLog' //前端报错收集
import VabPermissions from 'zx-layouts/Permissions' //自定义指令 v-permission
import '@/styles/vab.scss' //加载vab组件库样式
import Vab from '@/utils/vab' //加载vue实例上的变量

Vue.use(Vab)
Vue.use(VabPermissions)
