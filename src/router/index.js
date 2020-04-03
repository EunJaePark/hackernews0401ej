import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import CommentsView from '../views/CommentsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: NewsView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/item/:id',
    name: 'comments',
    component: CommentsView
  }
]

const router = new VueRouter({
  routes
})

export default router
