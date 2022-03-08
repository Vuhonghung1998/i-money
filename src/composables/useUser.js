import { ref } from 'vue';
import {projectAuth} from '../configs/firebase.js'

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
    if (_user){
        return user.value = _user;
    }
})

function getUser(){
    return {user}
}
export function useUser(){
    return {getUser}
}