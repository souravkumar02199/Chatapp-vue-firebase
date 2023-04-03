<template>
    <div id="app">
      <v-form action="" @submit.prevent="update">
        <div>
          <v-text-field name="input-1" label="Name" v-model="form.name"></v-text-field>
        </div>
        <div>
          <v-text-field name="input-2" label="Email" v-model="form.email" ></v-text-field>
        </div>
        <div>
          <v-btn type="submit"> update</v-btn>
        </div>
        <div>
        </div>
      </v-form>
    </div>
  </template>
  <script>
  import { defineComponent } from '@vue/composition-api'
  import {reactive,onMounted,computed} from 'vue'
  import {useRoute,useRouter } from 'vue-router/composables'
  import {getUser, updateUser} from '../firebase'
  
  export default defineComponent({
      setup() {
          const router =useRouter()
          const route =useRoute()
          const userId =computed(() =>route.params.id)
          const form = reactive ({name:'',email:''})
          
          onMounted(async() => {
              const user = await getUser(userId.value)
              form.name=user.name
              form.email=user.email
          })
  
          const update = async() => {
              await updateUser(userId.value,{...form})
              router.push('/')
              form.name=''
              form.email=''
          }
  
          return {form,update}
      },
  })
  </script>
  