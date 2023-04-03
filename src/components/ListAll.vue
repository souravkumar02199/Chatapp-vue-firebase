<template>
    <div id="app">
      <v-form action="" @submit.prevent="OnSubmit">
        <div>
          <v-text-field name="input-1" label="Name" v-model="name"></v-text-field>
        </div>
        <div>
          <v-text-field name="input-2" label="Email" v-model="email" ></v-text-field>
        </div>
        <div>
          <v-btn type="submit"> create user</v-btn>
        </div>
        <!-- {{user[0]}} -->
         <div><EditDelete /></div>
        <div>
        </div>
      </v-form>
    </div>
  </template>
  
  <script>
  import EditDelete  from './EditDelete.vue';
  import {createUser,useLoadUser} from  '../firebase'
  export default {
    data() {
      return {
      name :'',
      email:'',
      user:null,
      };
    },
    components:{EditDelete},
    methods:{
       async OnSubmit(){
        if( this.name !== '' && this.email !== ''){
          await createUser({name:this.name,email:this.email})
        }
        console.log("kk");
        this.name='';
        this.email=''
       },
  
       async Delete(){
        this.user =  useLoadUser();
        console.log("ll",this.user )
       }
    },
   
    computed: {}
  };
  </script>
  
  <style lang="scss">
  
  </style>