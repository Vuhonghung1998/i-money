import { ref } from 'vue'
import { projectAuth } from '../configs/firebase.js'
const error = ref(null)
const isPending = ref(false)

async function signup(email, password, fullName) {
    isPending.value= true;
    error.value = null
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password,
    )
    response.user.updateProfile({displayName: fullName})
    console.log(response)
    if (!response) throw new Error('khong the tao user moi')
    return response
  } catch (err) {
      error.value = err.message;
      //finally có nghĩa là dù có đúng sai cuối cùng finally cũng được thực hiện
  }finally{
      isPending.value= false;
      
  }
}

export function useSignUp() {
  return { error, isPending, signup}
}
