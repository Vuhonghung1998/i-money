import {ref} from 'vue'
import {projectAuth} from '../configs/firebase.js'

const error = ref(null);

async function logout(){
    error.value = null;
    
    try {
        const response = await projectAuth.signOut();
        return response
    } catch (err) {
        error.value = err.message;
        console.log(error.value);
    }
}

export function useLogOut(){
    return {error,logout}
}