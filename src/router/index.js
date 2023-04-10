import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
import Chat from '../components/Chat.vue'
import Videochat from '../components/Videochat.vue'
import Edit from '../components/Edit.vue'

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
    path: '/videochat/:id',
    name: 'videochat',
    component: Videochat
},
{
    path: '/edit/:id',
    name: 'edit',
    component: Edit
}
]

const router = new VueRouter({
    routes
})

export default router