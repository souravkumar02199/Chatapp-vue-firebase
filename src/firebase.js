import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import firebase from "firebase";
import { onUnmounted,ref,computed } from "vue"
import Filter from 'bad-words'

const firebaseConfig = {
  apiKey: "AIzaSyDUMu_OkF2ncR09nwRihMLDQUHKXqVFifw",
  authDomain: "nuxt3-fire.firebaseapp.com",
  projectId: "nuxt3-fire",
  storageBucket: "nuxt3-fire.appspot.com",
  messagingSenderId: "780940918425",
  appId: "1:780940918425:web:5159162744838e60854208"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
export function useAuth(){
    const user = ref(null)
    const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
    onUnmounted (unsubscribe)
    const isLogin = computed (() => user.value !== null)

    const signIn = async () => {
        const googleprovider =new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(googleprovider)
    }
    const signOut = () => auth.signOut()

    return {user ,isLogin,signIn,signOut}
}
const firestore = firebaseApp.firestore()
const messagesCollection = firestore.collection('messages')
// const messagesQuery = messagesCollection.orderBy('created','desc').limit(100)
const filter = new Filter()

export const useChat = () =>{
    const messages =ref([]);
    const unsubscribe = messagesCollection.onSnapshot(snapshot => {
        messages.value = snapshot.docs.map(doc => ({id:doc.id,...doc.data() }))
        .reverse()
    })
    onUnmounted(unsubscribe)
    
    const{user, isLogin} = useAuth()
    const sendMessage= text =>{
        if (!isLogin.value) return
        const {photoURL,uid,displayName} = user.value
        messagesCollection.add({
            userName:displayName,
            userId :uid,
            userPhotoURl:photoURL,
            text:filter.clean(text),
            createdAt:firebase.firestore.FieldValue.serverTimestamp()

        })
    }
    return{messages,sendMessage}
}

const db = firebaseApp.firestore();
const userCollection = db.collection('user')

export const createUser = user => {
    return userCollection.add (user)
}

export const getUser = async id => {
    const user = await userCollection.doc(id).get()
    return user.exists ? user.data(): null 
}

export const updateUser = (id,user) => {
    return userCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return userCollection.doc(id).delete()
}

export const useLoadUser = () =>{
    const user =ref([]);
     userCollection.onSnapshot(snapshot => {
        user.value = snapshot.docs.map(doc => ({id:doc.id,...doc.data() }))
    })
    onUnmounted(close)
    return user
} 