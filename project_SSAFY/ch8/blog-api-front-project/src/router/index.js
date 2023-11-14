import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import PostListView from '@/views/PostListView.vue'
import CateCreateView from '@/views/CateCreateView.vue'
import PostCreateView from '@/views/PostCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/postlist',
      name: 'postlist',
      component: PostListView
    },
    {
      path: '/catecreate',
      name: 'catecreate',
      component: CateCreateView
    },
    {
      path: '/postcreate',
      name: 'postcreate',
      component: PostCreateView
    },
  ]
})

export default router
