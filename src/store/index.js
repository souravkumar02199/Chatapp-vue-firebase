import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tareas: [],
    },
    mutations: {
        setTarea(state, payload) {
            if(payload.index !== null)
            {
                state.tareas.splice(payload.index,1,payload)
            }
            else{
                state.tareas.push(payload) ;
            }
           
            localStorage.setItem('tareas', JSON.stringify(state.tareas))
        },
        markTarea(state, payload) {
            state.tareas = state.tareas.map(element => element.id === payload.id ? payload : element)
            localStorage.setItem('tareas', JSON.stringify(state.tareas))
        },
        eliminarTarea(state, payload) {
            console.log(payload);
            state.tareas = state.tareas.filter(element => element.id !== payload)
            localStorage.setItem('tareas', JSON.stringify(state.tareas))
        },
        cargarLocalStorage(state, payload) {
            state.tareas = payload
        }
    },
    actions: {
        enviarFormulario({ commit }, tarea) {
            commit('setTarea', tarea)
        },
        markTarea({ commit }, tarea) {
            commit('markTarea', tarea)
        },
        eliminarTarea({ commit }, idTarea) {
            commit('eliminarTarea', idTarea)
        },
        cargarLocalStorage({ commit }) {
            if (localStorage.getItem('tareas')) {
                commit('cargarLocalStorage', JSON.parse(localStorage.getItem('tareas')))
                return
            }
            localStorage.setItem('tareas', JSON.stringify([]))
        }
    },
})