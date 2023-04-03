<template>
    <nav>
        <h1>Vue<strong>Chat App</strong></h1>
        <div v-if="isLogin">
        <Avtar :src="user.photoUrl"/>
        <v-btn @click="signOut">signOut</v-btn>
        </div>
        <v-btn v-else @click="signIn">signIn</v-btn>
    </nav>
    </template>
    <script>
    import { defineComponent } from '@vue/composition-api'
    import { useAuth } from '../firebase'
    import Avtar from './Avtar.vue'
    
    export default defineComponent({
        components:{Avtar},
        setup() {
            const {user,isLogin,signOut,signIn} =useAuth ()
            return {user,isLogin,signOut,signIn}
        },
    })
    </script>
    