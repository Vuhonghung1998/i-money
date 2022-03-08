<template>
   <div>
         <nav-header/>
        <slot/>
        <nav-bottom v-if="meta.isShowBottom"/>
   </div>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import NavBottom from '../components/NavBottom.vue'
import NavHeader from '../components/NavHeader.vue'
export default {
   components:{
      NavBottom,
      NavHeader,
   },
   setup(){
      const route = useRoute();

      return{ 
         meta: computed(() => route.meta),
      }
   }
}
</script>