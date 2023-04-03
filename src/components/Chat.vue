<template>
    <div>
        <div >
          <Message v-for="value in messages" :key="value.id" :name="value.username" :sender="value.userId === user?.uid" :photoURL="value.userPhotoURl">
            {{value.text}} 
          </Message>
        </div>
        <div ref="bottom"></div>
        <div>
            <v-form action="" v-if="isLogin" @submit.prevent="send">
                <div>
                  <v-text-field name="input-1" label="Name" v-model="message"></v-text-field>
                </div>
                <v-btn type="submit">
                    send
                    <sendIcon/>
                </v-btn>
            </v-form>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import {ref,watch,nextTick} from 'vue'
import { useAuth,useChat } from '../firebase'
import sendIcon from './SendIcon.vue'
import Message from './Message.vue'

export default defineComponent({
    components:{Message,sendIcon},
    setup() {
        
        const {messages,sendMessage} = useChat()
        const bottom =ref(null)
        const message =ref('')
        watch(
            messages,
            () =>{
            nextTick(() => {bottom.value?.scrollIntoView({behavior:'smooth'})})
            console.log("kk",messages);
    },
            {deep:true}
        )
        const send = () =>{
              sendMessage(message.value)
              message.value =''
        }
         const {user,isLogin} =useAuth()

        return {user,isLogin,bottom,messages,message,send}
    },
})
</script>
