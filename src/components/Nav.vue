<template>
    <nav>
        <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title><h1 >Vue<strong>Chat App</strong></h1></v-app-bar-title>

        <v-spacer></v-spacer>

        <div v-if="isLogin">
            <Avtar :src="user.photoUrl"/>
            <v-btn @click="signOut">signOut</v-btn>
        </div>    
            <v-btn v-else @click="signIn">signIn</v-btn>
       

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
        
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
    