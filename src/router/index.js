import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout.vue'
import Main from '@/components/page/main.vue'
import User from '@/components/page/user.vue'


Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/main',
      // 嵌套路由
      children: [{
        // 这里不设置值，是把main作为默认页面
        path: '/main', 
        name: 'Main',
        component: Main
      },{
        path: '/user',
        name: 'User',
        component: User
      }]
    }
  ]
})