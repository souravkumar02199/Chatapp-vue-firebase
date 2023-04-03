<template>
    <div>
        <span>{{name}}</span>
        <div>
            <Avtar :src="photoURL"></Avtar>
            <div :class="sender ? 'fff':'bg-red'">
              <slot />
            </div>
        </div>
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
.fff{
    background-color: green;
}
</style>
