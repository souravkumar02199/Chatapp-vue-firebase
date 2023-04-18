<template>
    <v-app style="background: #ddcbe2;">
        <v-container class="bg-surface-variant">
            <nav>
                <Nav/>
                <v-app-bar color="teal-darken-4">
                    <v-card class="pa-2 rounded-circle">
                        <v-img  width="2vw" min-height="3vh"
                            :src="photoURL[0]"
                        ></v-img>
                    </v-card>
                    <template v-slot:prepend>
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </template>
                    <v-app-bar-title class="pl-1"><h2 >{{ photoURL[1] }}</h2></v-app-bar-title>
                    <v-spacer></v-spacer>
                    <!-- <div v-if="isLogin">
                        <Avtar :src="user.photoUrl"/>
                        <v-btn @click="signOut">signOut</v-btn>
                    </div>    
                        <v-btn v-else @click="signIn">signIn</v-btn> -->
                    <router-link :to="`/videochat/${roomID}`" class="mx-2"><v-icon size="45" color="green">mdi-video-box</v-icon></router-link>
                    <v-btn icon class="mx-2">
                        <v-icon  size="40" color="green">mdi-phone</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-app-bar> 
            </nav>
        </v-container>
        <v-container class="bg-surface-variant">
                <div class="text_card">
                    <v-container justify="center" align="center">
                        <div class="message_box" justify="center">
                            <Message v-for="value in messages" :key="value.id" :name="value.username" :sender="value.userId === user?.uid" :photoURL="value.userPhotoURl">
                                 <!-- <v-col cols="1" class="pr-1"> -->
                                    <!-- <v-chip class="rounded-circle" >
                                        <v-img
                                        min-height="4vh"
                                        :src="photoURL[0]"
                                        ></v-img>
                                    </v-chip > -->
                                <!-- </v-col>  -->
                                <v-flex class="text-xs-right" xs12 mb-4 :class="value.userId === user?.uid ? 'sender':''">
                                    <v-chip class="chip-chat text-h5 pa-3">
                                        {{value.text}}  <v-icon right>mdi-done_all</v-icon>
                                    </v-chip>
                                </v-flex>
                            </Message>
                        </div>
                    </v-container>
                 <div class="pb-3">
                    <v-container class="chat_box">
                        <form action="" v-if="isLogin" @submit.prevent="send" class="pa-2">
                            <v-row justify="center" align="center" class="">
                                <v-col cols="1" sm="2" md="2"  class="text-center align-center col-xs-3">
                                    <v-icon color="black" size="65">
                                        mdi-emoticon-happy-outline
                                    </v-icon>
                                </v-col>
                                <v-col cols="6" lg="5" md="5" sm="4" xs="2" class="text-center col-xs-3"> <v-text-field name="input" class="nput-msgfill-height input_box align-center" label="Message" color="black lighten-1" v-model="message"></v-text-field></v-col>
                                <!-- <v-col>
                                    <v-text-field name="input-1" label="code" color="white lighten-1" v-model="roomID"></v-text-field>
                                    <router-link :to="`/videochat/${roomID}`"><v-btn @click="sendRoomId"><v-icon size="45" color="green">mdi-video-box</v-icon></v-btn></router-link>
                                </v-col> -->
                                <v-col cols="1" sm="2" md="2"  class="text-center col-xs-3">
                                    <v-icon color="black" size="65" >mdi-camera-outline</v-icon>
                                </v-col>
                                <v-col cols="2"  sm="2" md="2"  class="text-center col-xs-3">
                                    <v-btn type="submit" class="rounded-circle" min-height="70px" bg-color="aquamarine" style="background-color: green;">
                                        <v-icon size="45" class="fill-height align-center" color="#fff">mdi-send</v-icon> 
                                    </v-btn>
                                </v-col>
                            </v-row>
                       </form>
                    </v-container>
                 </div>
                </div>
        </v-container>
        <div ref="bottom"></div> 
    </v-app>
</template>

<script>

import { defineComponent } from '@vue/composition-api'
import {ref,watch,nextTick} from 'vue'
import { useAuth,useChat } from '../firebase'
import sendIcon from './SendIcon.vue'
import Message from './Message.vue'
import Nav from './Nav.vue'

export default defineComponent({
    components:{Message,sendIcon,Nav},
    setup() {
        
        const {messages,sendMessage} = useChat()
        const bottom =ref(null)
        const message =ref('')
        let roomID = 123
        let photoURL= ref([])

        const {user,isLogin} =useAuth()

        watch(
            messages,
            () =>{
                for(let i=0 ;i <= messages.value.length;i++)
                {
                    if(messages.value.userId !== user.value?.uid){
                    photoURL.value.push(messages.value[i].userPhotoURl)
                    photoURL.value.push(messages.value[i].userName)
                }
                }
            nextTick(() => {bottom.value?.scrollIntoView({behavior:'smooth'})})
    },
            {deep:true}
        )
        const send = () =>{
             if(message.value !==''){
              sendMessage(message.value)
             }
              message.value =''
        }
        // const sendRoomId = () =>{
        //      if(roomID.value !==''){
        //         roomID.value
        //         console.log("kk",roomID.value);
        //      }
        // }
        

        return {user,isLogin,bottom,messages,message,send,roomID,photoURL}//sendRoomId
    },
})
</script>
<style scoped>
.text_card{
    background: #efe7dd url("https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg") repeat;
}
.message_box{
    height: calc(100% - 68px);
    overflow-x: hidden;
    padding: 0 20px;
    margin-bottom: 5px;
}
.sender{
    text-align: end;
}
:deep(.v-label )  {
    color:rgb(16, 15, 15) !important;
    font-size: 20px;
}
.v-application a{
    text-decoration: none!important;
 }
 
 .input_box{
    text-decoration: none!important;
 }
.chat_box{
    background: #d7c8c8;
    width: 90%;
    border-radius: 60px;
}



</style>
