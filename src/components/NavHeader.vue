<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
        <div v-if="user">
            <h1 class="text-xl font-bold text-gray-900 ml-2" v-if="meta.text === 'Home'">Hello {{user.displayName}}</h1>
            <h1 class="text-xl font-bold text-gray-900 ml-2" v-else>{{meta.text}}</h1>
        </div>
      </div>
      <div class="flex">
          <ul>
              <li>
                  <i class="t2ico t2ico-notification text-2xl"></i>
              </li>
          </ul>
      </div>
    </div>
    </div>
  </header>
</template>
<script>
import {computed} from 'vue'
import {useUser} from '../composables/useUser.js'
import {useRoute} from 'vue-router'
export default {
    setup() {
        const route = useRoute();
        const {getUser} = useUser();
        const {user} = getUser();

        return {user,meta: computed(() => route.meta)}
    },
}
</script>