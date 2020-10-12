import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    // 嵌套路由，路由的状态是由子路由决定
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '线上点餐管理系统', icon: 'dashboard' }
    }]
  },
  //自定义一个模块 员工管理 
  {
    path: '/waiters',
    component: Layout,
    name: 'waiters',
    children: [
      {
        path: 'index',
        name: 'waiters',
        component: () => import('@/views/waiters/index'),
        meta: { title: '员工管理', icon: 'table' }
      },
    ]
  },

  //顾客管理
  {
    path: '/customers',
    component: Layout,
    name: 'customers',
    children: [
      {
        path: 'index',
        name: 'customers',
        component: () => import('@/views/customers/index'),
        meta: { title: '顾客管理', icon: 'table' }
      },
    ]
  },

  // 栏目管理
  {
    path: '/columns',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'columns',
        component: () => import('@/views/columns/index'),
        meta: { title: '栏目管理', icon: 'form' }
      }
    ]
  },
// 自定义一个模块 产品管理
{
  path: '/product',
  component: Layout,
  name: 'product',
  children: [
    {
      path: 'index',
      name: 'product',
      component: () => import('@/views/product/index'),
      meta: { title: '产品管理', icon: 'table' }
    },
  ]
},
//详细
  {
    path: '/about',
    component: Layout,
    name: 'about',
    hidden:true,
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import('@/views/about/index'),
        meta: { title: '详细', icon: 'table' }
      },
    
    ]
  },
  // 订单管理
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '订单管理', icon: 'tree' }
      }
    ]
  },
 
  //评论管理
  {
    path: '/comment',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'comment',
        component: () => import('@/views/comment/index'),
        meta: { title: '评论管理', icon: 'form' }
      }
    ]
  },
  
  
  
  

  

  

  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
