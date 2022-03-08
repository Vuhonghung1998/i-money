import {ref} from 'vue'
import {projectAuth} from '../configs/firebase.js'

const error = ref(null);
const isPending = ref(false);

async function signin(email, password){
    error.value = null;
    isPending.value = true;
    
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password);
        return response
    } catch (err) {
        error.value = err.message;
        console.log(error.value);
    }finally{
        isPending.value = false;
    }
}

export function useSignIn(){
    return {error, isPending, signin}
}