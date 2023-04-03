<template>
    <v-app>
        <v-simple-table>
            <template>
            <thead>
                <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Email</th>
                <th class="text-center">Edit</th>
                <th class="text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="value in user" :key="value.id">
                <td depressed color="grey" class="text-center">{{ value.name }}</td>
                <td class="text-center"><v-btn depressed color="primary">{{value.email}}</v-btn></td>
                <td class="text-center"> <router-link :to="`/edit/${value.id}`"><v-btn depressed color="primary" >Edit</v-btn>
                </router-link></td>
                <td class="text-center"><v-btn depressed color="error" @click="deleteUser(value.id)">Delete</v-btn></td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>

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
