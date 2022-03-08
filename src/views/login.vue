<template>
    <div class="mt-8">
      <!-- Start Form -->
    <div class="container mx-auto px-8">
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span>Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="email@example.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span>Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 w-full text-center bg-green-800 text-white"
          >
            Sign Up
          </button>
          <button
            v-else
            type="button"
            class="py-3 w-full text-center bg-green-800 text-white"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>
      <!-- Error -->
       <div v-if="error" class="text-left text-red-700 mt-4">
        <span>{{ error }}</span>
      </div>
      <!-- Start Deriction -->
      <div class="w-full text-center mt-6">
          <span>I'm a new number.</span>
          <span class="ml-1">
              <router-link :to ="{name:'Register' , params:{}}" class=" text-blue-600"> 
                  Sign Up
              </router-link>
          </span>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
import {useSignIn} from '../composables/useSignIn.js'
export default {
  setup() {
    const {error, isPending, signin} = useSignIn();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    async function onSubmit(){
      await signin(email.value, password.value);
      if(!error.value) {
        router.push({name:"Profile" , params:{}})
      }
    }
   return{email, password,error, isPending, onSubmit} 
  },
}
</script>