<template>
  <!-- Start info -->
  <div>
      <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <!-- <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/274549702_667102897814248_5940133978240376880_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=58FFgoU6q8oAX-Gfl-1&_nc_ht=scontent.fhan2-4.fna&oh=00_AT92s-aOiMe_Ql1U8JF2A3j9_Ad47P-6u45--HsMEae7NQ&oe=62223B68"
            alt=""
          />
        </div> -->
        <div class=" font-bold text-2xl text-blue-600 mt-3">{{user.displayName}}</div>
        <div class="mt-1 text-yellow-200">{{user.email}}</div>
      </div>
    </div>
  </div>
  <div class="row">
      <div class="container mx-auto px-8">
        <div class="gird gird-cols-1">
          <div class="col-span-1">
            <h3 class="font-bold text-xl mb-2 text-blue-600">General</h3>
          </div>
        </div>
        <div class="gird gird-cols-1">
          <div class="col-span-1">
            <ul>
              <li v-for="(profileOption, index) in profileOptions" :key="index">
                <router-link :to="profileOption.route" class="flex justify-between items-center py-3">
                  <div class="flex items-center text-left" :class="{'text-red-600' : index === profileOptions.length - 1}">
                    <i :class="`t2ico ${profileOption.icon} text-2xl`"></i>
                    <h5 class="font-semibold ml-2">{{profileOption.name}}</h5>
                  </div>
                  <div class="text-right">
                    <i class="t2ico t2ico-arrow-right "></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import {reactive} from 'vue';
import { PROFILE} from '../constants/index.js'
import {useUser} from '../composables/useUser.js'
export default {
  setup() {
    const profileOptions = reactive(PROFILE);
    const {getUser} = useUser();
    const {user} = getUser();
    return {profileOptions, user};
  },
}
</script>