<template>
    <div>
        <span>{{name}}</span>
        <div>
        </div>
        <v-container class="bg-surface-variant">
            <v-row :class="sender ? 'justify-end':'justify-start'" class="mt-1">
                <v-col cols="8" rounded-xl v-if="sender ? 'justify:end':'justify:start'" justify="end" :class="sender ? 'sender':'receiver'" class="rounded-xl"><slot /></v-col>
            </v-row>
        </v-container>    
    </div>
</template>

<script>

import { defineComponent } from '@vue/composition-api'
import Avtar from './Avtar.vue'

export default defineComponent({
    components:{Avtar},
    props:{
            name:{type:String,default:''},
            photoURL:{type:String,default:''},
            sender:{type:Boolean,default:false}

        },
    setup() {
        
        
    },
}) 
</script>
<style scoped>
.sender{
    /* background-color:rgb(150, 84, 212); */
}
.receiver{
    /* background-color:rgb(35, 62, 214); */
}
</style>
