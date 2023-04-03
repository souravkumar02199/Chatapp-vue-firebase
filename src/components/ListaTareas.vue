<template>
<div>
  <!-- <button @click="currentComponent = 'ListA'">ListA</button><br>
  <button @click="currentComponent = 'ListAll'">ListAll</button> -->
  <components :is="currentComponent = 'ListA'"></components>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import ListAll from './ListAll.vue';
import ListA from './ListA.vue';

export default {
  data: () => ({
     
      currentComponent:'ListA', 
    }),
    components:{ListA,ListAll},
    computed:{
        ...mapState(['tareas']),
        
    },
    methods:{
      ...mapActions(['markTarea', 'eliminarTarea','enviarFormulario']),

    }
}
</script>