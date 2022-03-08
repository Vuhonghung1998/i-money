<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div data-circle class="top-0 absolute left-1/2 transform -translate-x-1/2">
      <div
        data-circle-inset
        class="
          flex
          items-center
          absolute
          justify-center
          text-white
          rounded-full
          cursor-pointer
          bg-blue-700
          w-12
          h-12
          -top-6
          left-1/2
          transform
          -translate-x-1/2
        "
        @click="gotoTransaction"
      >
        <i class="t2ico t2ico-plus"></i>
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import {useRouter} from "vue-router"
export default {
  setup() {
    const navItems = reactive([
      {
        icon: "t2ico-category",
        name: "Home",
        text: "Home",
      },
      {
        icon: "t2ico-chart",
        name: "Report",
        text: "Report",
      },
      {
        icon: "t2ico-presentation",
        name: "Bugget",
        text: "Bugget",
      },
      {
        icon: "t2ico-profile",
        name: "Profile",
        text: "Profile",
      },
    ]);
    const router = useRouter();
    function gotoTransaction(){
      router.push({name:"newTransaction" , params: {}})
    }
    return { navItems , gotoTransaction };
  },
};
</script>
<style lang="css" scoped>
footer#footer > div[data-circle] {
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
footer#footer > div[data-circle] > div {
  font-family: "t2ico";
}
</style>