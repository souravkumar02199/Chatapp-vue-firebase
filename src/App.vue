<template>
  <v-app>
    <v-app-bar app color="#000034" dark>
      <!-- <div class="d-flex align-center">
        <h1>TodoList</h1>
      </div> -->
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
};
</script>
