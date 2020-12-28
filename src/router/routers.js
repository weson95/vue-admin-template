import Layout from '@/layout'
export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Layout,
    meta: {
      hideInMenu: true,
      notCache: true,
      title: '首页',
      icon: 'home'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          notCache: true,
          icon: 'home'
        },
        component: () => import('@/views/home/home.vue')
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      notCache: true,
      title: '首页',
      icon: 'home'
    }
  },
  {
    path: '/testa',
    name: 'testa',
    component: Layout,
    meta: {
      title: '一级导航',
      icon: 'home'
    },
    children: [
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '二级导航'
        },
        component: () => import('@/views/test')
      }
    ]
  },
  {
    path: '/test1',
    name: 'test1',
    component: Layout,
    meta: {
      title: '一级导航',
      icon: 'home'
    },
    children: [
      {
        path: '/test2',
        name: 'test2',
        meta: {
          title: '二级导航1'
        },
        component: () => import('@/views/test')
      },
      {
        path: '/test3',
        name: 'test3',
        meta: {
          title: '二级导航2'
        },
        component: () => import('@/views/test2/SecondNav'),
        children: [
          {
            path: '/test31',
            name: 'test31',
            meta: {
              title: '三级导航1'
            },
            component: () => import('@/views/test2')
          },
          {
            path: '/test32',
            name: 'test32',
            meta: {
              title: '三级导航2'
            },
            component: () => import('@/views/test2')
          }
        ]
      },
      {
        path: '/test4',
        name: 'test4',
        meta: {
          title: '二级导航3'
        },
        component: () => import('@/views/test')
      },
    ]
  },
  {
    path: '/401',
    name: 'error-401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error-500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error-404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/404.vue')
  }
]