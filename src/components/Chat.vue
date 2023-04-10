<template>
    <v-app style="background: #ddcbe2;">
        <v-container class="bg-surface-variant">
            <nav>
                    <v-app-bar
                    color="teal-darken-4"
                >
                    <v-card class="pa-2 rounded-circle">
                        <v-img  width="2vw" min-height="3vh"
                            src="../../src/assets/download.png"
                        ></v-img>
                    </v-card>
                    <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </template>

                    <v-app-bar-title class="pl-1"><h2 >Name</h2></v-app-bar-title>

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
                    <div class="message_box">
                        <Message v-for="value in messages" :key="value.id" :name="value.username" :sender="value.userId === user?.uid" :photoURL="value.userPhotoURl">
                        <!-- <v-row
                            align="start"
                            > -->
                            <!-- <v-col cols="1" class="pr-1">
                                <v-chip class="rounded-circle" >
                                    <v-img
                                    min-height="4vh"
                                    :src="value.userPhotoURl"
                                    ></v-img>
                                </v-chip >
                            </v-col> -->
                            <!-- <v-col cols="6" class="pl-0 ml-3  " > -->
                                <v-chip class="pa-3 rounded-lg text-h5" :class="value.userId === user?.uid ? 'message':'received'">
                                    {{value.text}} 
                                </v-chip >
                            <!-- </v-col> -->
                        <!-- </v-row> -->
                    </Message>
                    </div>
                    
                <div>
                    <v-container class="conversation-compose">
                        <form action="" v-if="isLogin" @submit.prevent="send" class="pa-2">
                            <v-row>
                                <v-col>
                                    <div class="emoji">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="smiley" x="3147" y="3209"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z" fill="#7d8489"/></svg>
                                    </div>
                                </v-col>
                                <v-col> <v-text-field name="input" class="nput-msg" label="Type a message" color="black lighten-1" v-model="message"></v-text-field></v-col>
                                <!-- <v-col>
                                    <v-text-field name="input-1" label="code" color="white lighten-1" v-model="roomID"></v-text-field>
                                    <router-link :to="`/videochat/${roomID}`"><v-btn @click="sendRoomId"><v-icon size="45" color="green">mdi-video-box</v-icon></v-btn></router-link>
                                </v-col> -->
                                <v-col>
                                    <v-icon color="black" >mdi-camera-outline</v-icon>
                                </v-col>
                                <v-col>
                                    <v-btn type="submit" class="rounded-circle" min-height="70px" bg-color="aquamarine" style="background-color: green;">
                                        <v-icon size="45" color="#fff">mdi-send</v-icon>
                                        <sendIcon/>
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
        // const sendRoomId = () =>{
        //      if(roomID.value !==''){
        //         roomID.value
        //         console.log("kk",roomID.value);
        //      }
        // }
         const {user,isLogin} =useAuth()

        return {user,isLogin,bottom,messages,message,send,roomID,}//sendRoomId
    },
})
</script>
<style scoped>
.text_card{
    background: #efe7dd url("https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg") repeat;
}
.message_box{
    height: calc(100% - 68px);
  box-shadow: inset 0 10px 10px -10px #000000;
  overflow-x: hidden;
  padding: 0 16px;
  margin-bottom: 5px;

}
.message{
    background: #fff ;
    border-radius: 5px 0px 5px 5px;
    
}
.message:after{
    background: #fff ;
    border-width: 0px 10px 10px 0;
    border-color: transparent #fff transparent transparent;
    top: 0;
    left: -10px;

}
.received {
    background: #fff;
    border-radius: 0px 5px 5px 5px;

}
:deep(.v-label )  {
  color:white !important;
  font-size: 20px;
}
.v-application a{
     text-decoration: none!important;;
 }
 


.conversation-compose div,
.conversation-compose input {
  background: #fff;
}



</style>
