import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import GoodsList from '../pages/GoodsList'
import Caculator from '../components/Calculator'
import GoodsImage from '../components/GoodsImage'
import GoodsTitle from '../components/GoodsTitle'
import Cart from '../pages/Cart'
import Demo from '../pages/demo'
import Counter from '../pages/demo/Counter'
import Amy from '../pages/demo/Amy'
import Bob from '../pages/demo/Bob'

import UserList from  '../pages/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/userList/:userId',
      name: 'userList',
      alias: '/users/:userId',
      component: UserList
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/goods',
      name: 'Goods',
      component: GoodsList,
      redirect: '/goods/image',
      children: [
        // 嵌套路由
        {
          // path: 切记,这里不要加 '/'
          path: 'title',
          name: 'title',
          component: GoodsTitle
        },
        {
          path: 'image',
          name: 'image',
          component: GoodsImage
        },
      ]
    },
    {
      path: '/caculator',
      name: 'caculator',
      component: Caculator
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      children: [
        {
          path: 'counter',
          name: 'Counter',
          component: Counter
        },
        {
          path: 'amy',
          name: 'amy',
          component: Amy
        },
        {
          path: 'bob',
          name: 'bob',
          component: Bob
        }
      ]
    }
  ]
})

// 注意区分 $router 和 $route 的用法.
// $router: 代表项目的router,一个全局变量
// $route: 当前传入的某个route, router列表中的某一项
