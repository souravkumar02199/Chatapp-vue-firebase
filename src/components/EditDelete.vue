<template>
    <v-app>
        <div v-for="value in user" :key="value.id">
            <router-link :to="`/edit/${value.id}`">
            <v-btn>Edit</v-btn>
            </router-link>
            <v-btn @click="deleteUser(value.id)">Delete</v-btn>
        </div>
    </v-app>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import {deleteUser,useLoadUser} from  '../firebase'
import {onMounted} from 'vue'

export default defineComponent({
    setup() {
        const user = useLoadUser()
        return{user,deleteUser}
    }
})
</script>
