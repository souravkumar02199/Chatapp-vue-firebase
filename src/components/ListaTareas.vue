<template>
  <v-card>
   <v-layout class="first_cardd">
            <v-row row>
              <v-col  class=" py-0">
                <v-card outlined  class="first_card ">
                  <v-row row class="text-start">
                      <v-col cols="2" class="py-0 text-start">
                        <v-navigation-drawer
                          v-model="drawer"
                          :rail="rail"
                          permanent
                          @click="rail = false"
                        >
                          <v-list  nav>
                            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home">
                              <v-btn @click="currentComponent = 'ListA'" depressed color="primary"  prepend-icon="" min-width="10vw">
                                    <span class="pt-1">Checkout</span>
                              </v-btn>
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home">
                              <v-btn @click="currentComponent = 'ListAll'" depressed color="primary"  prepend-icon="" min-width="10vw">
                                    <span class="pt-1">Createuser</span>
                              </v-btn>
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home">
                              <router-link to="/Chat"><v-btn depressed color="primary" min-width="10vw"><span class="pt-1"><v-icon>mdi-chat</v-icon>Chat</span></v-btn></router-link>
                            </v-list-item>
                          </v-list>
                        </v-navigation-drawer>
                      </v-col>
                      <v-col class="py-0 mt-10 px-0" >
                       <v-main class="px-3"><components :is="currentComponent"></components></v-main>                              
                      </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
      </v-layout>
    </v-card>
  </template>
  <script>
  import { mapActions, mapState } from 'vuex'
  import ListAll from './ListAll.vue';
  import ListA from './ListA.vue';
  import Chat from './Chat.vue';
  
  
  export default {
    data: () => ({
        drawer: true,
          items: [
            { title: 'Home', icon: 'mdi-home-city' },
            { title: 'My Account', icon: 'mdi-account' },
            { title: 'Users', icon: 'mdi-account-group-outline' },
          ],
          rail: true,
        currentComponent:'ListA', 
      }),
      components:{ListA,ListAll,Chat},
      computed:{
          ...mapState(['tareas']),
          
      },
      methods:{
        ...mapActions(['markTarea', 'eliminarTarea','enviarFormulario']),
  
      }
  }
  </script>
  <style scoped>
  :deep(.v-btn:not) {
     min-width: 10vw;
  }
  </style>