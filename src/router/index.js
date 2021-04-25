/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2021-04-22 19:18:08
 * @LastEditTime: 2021-04-25 18:45:30
 * @Descripttion: 路由配置
 */
/**
 * @author vue-admin-beautiful （不想保留author可删除）
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'
import EmptyLayout from '@/layouts/EmptyLayout'
import { publicPath, routerMode } from '@/config'

Vue.use(VueRouter)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]

export const asyncRoutes = [
  {
    path: '/',
    redirect: '/userCenter/home',
    hidden: true,
  },
  {
    path: '/userCenter',
    component: Layout,
    name: 'userCenter',
    meta: {
      title: '用户中心',
    },
    alwaysShow: true,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/userCenter/home'),
        meta: {
          title: '首页',
          noKeepAlive: true,
          permissions: ['admin', 'firstAgency', 'sendAgency'],
        },
        children: null,
      },
      {
        path: 'config',
        name: 'Config',
        component: () => import('@/views/userCenter/config'),
        meta: {
          title: '账号设置',
          noKeepAlive: true,
          permissions: ['admin', 'firstAgency', 'sendAgency'],
        },
        children: null,
        hidden: true,
      },
      {
        path: 'shopManager',
        name: 'ShopManager',
        component: () => import('@/views/userCenter/shopManager'),
        meta: {
          title: '店铺管理',
          noKeepAlive: true,
          permissions: ['admin', 'sendAgency'],
        },
        children: null,
      },
      {
        path: 'downManager',
        name: 'DownManager',
        component: () => import('@/views/userCenter/downManager'),
        meta: {
          title: '下级管理',
          noKeepAlive: true,
          permissions: ['admin', 'firstAgency'],
        },
        children: null,
      },
      {
        path: 'withdrawManager',
        name: 'withdrawManager',
        component: () => import('@/views/userCenter/withdrawManager'),
        meta: {
          title: '提现管理',
          noKeepAlive: true,
          permissions: ['admin', 'firstAgency'],
        },
        children: null,
      },
    ],
  },
  {
    path: '/commissionRecord',
    component: Layout,
    name: 'commissionRecord',
    meta: {
      title: '分佣记录',
    },
    alwaysShow: true,
    children: [
      {
        path: 'checkCommission',
        name: 'checkCommission',
        component: () =>
          import('@/views/commissionRecord/checkCommission/index'),
        meta: {
          title: '查看分佣',
          noKeepAlive: true,
          permissions: ['admin', 'firstAgency', 'sendAgency'],
        },
        children: null,
      },
      {
        path: 'checkDetail',
        name: 'checkDetail',
        component: () =>
          import('@/views/commissionRecord/checkCommission/checkDetail'),
        meta: {
          title: '查看详情',
          noKeepAlive: true,
          permissions: ['admin', 'firstAgency', 'sendAgency'],
        },
        children: null,
        hidden: true,
      },
    ],
  },
  {
    path: '/mall',
    component: Layout,
    name: 'Mall',
    meta: {
      title: '商城',
    },
    alwaysShow: true,
    children: [
      {
        path: 'pay',
        name: 'Pay',
        component: () => import('@/views/mall/pay/index'),
        meta: {
          title: '支付',
          noKeepAlive: true,
        },
        children: null,
      },
      {
        path: 'goodsList',
        name: 'GoodsList',
        component: () => import('@/views/mall/goodsList/index'),
        meta: {
          title: '商品列表',
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

const router = new VueRouter({
  base: publicPath,
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
})
//注释的地方是允许路由重复点击，如果你觉得框架路由跳转规范太过严格可选择放开
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

export function resetRouter() {
  router.matcher = new VueRouter({
    base: publicPath,
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher
}

export default router
