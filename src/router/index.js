import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
import Chat from '../components/Chat.vue'
import Videochat from '../components/Videochat.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'TodoList',
    component: TodoList
},
{
    path: '/chat',
    name: 'chat',
    component: Chat
},
{
    path: '/videochat',
    name: 'videochat',
    component: Videochat
}
]

const router = new VueRouter({
    routes
})

export default router