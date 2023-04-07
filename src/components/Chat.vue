<template>
    <v-app style="background: #ddcbe2;">
        <v-container class="bg-surface-variant">
            <Nav />
        </v-container>
        <v-container class="bg-surface-variant">
            <div class="text_card">
                <Message v-for="value in messages" :key="value.id" :name="value.username" :sender="value.userId === user?.uid" :photoURL="value.userPhotoURl">
                    <v-row
                        align="start"
                        >
                        <v-col cols="1" class="pr-1">
                            <v-card class="rounded-circle" >
                                <v-img
                                min-height="4vh"
                                :src="value.userPhotoURl"
                                ></v-img>
                            </v-card>
                        </v-col>
                        <v-col cols="9" class="pl-0" >
                            <v-card class="pa-3 rounded-lg" :class="value.userId === user?.uid ? 'sender':'receiver'">
                                {{value.text}} 
                            </v-card>
                        </v-col>
                    </v-row>
                </Message>
            <div>
                <v-form action="" v-if="isLogin" @submit.prevent="send" class="pa-2">
                    <v-card class="pa-3 rounded-lg" style="background-color:dimgray;">
                        <v-row>
                            <v-col> <v-text-field name="input-1" label="Message" color="white lighten-1" v-model="message"></v-text-field></v-col>
                            
                        </v-row>
                     

                    </v-card>
                    <v-btn type="submit" class="rounded-circle" min-height="70px" bg-color="aquamarine" style="background-color: green;">
                        <v-icon size="45" color="#fff">mdi-send</v-icon>
                        <sendIcon/>
                    </v-btn>
                </v-form>
                <v-col>
                    <v-text-field name="input-1" label="code" color="white lighten-1" v-model="roomID"></v-text-field>
                    <router-link :to="`/videochat/${roomID}`"><v-btn @click="sendRoomId"><v-icon size="45" color="green">mdi-video-box</v-icon>{{ roomID }}</v-btn></router-link>
                </v-col>
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
        let roomID = ref('')
        watch(
            messages,
            () =>{
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
        const sendRoomId = () =>{
             if(roomID.value !==''){
                roomID.value
                console.log("kk",roomID.value);
             }
             roomID.value =''
        }
         const {user,isLogin} =useAuth()

        return {user,isLogin,bottom,messages,message,send,roomID,sendRoomId}
    },
})
</script>
<style scoped>
.text_card{
    background-color: rgb(26, 30, 37);
}
.sender{
    background-color:rgb(150, 84, 212);
}
.receiver{
    background-color:rgb(35, 62, 214);
}
:deep(.v-label )  {
  color:white !important;
  font-size: 20px;
}
</style>
