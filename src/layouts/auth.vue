<template>
  <div>
      <nav-brand/>
    <slot />
  </div>
</template>

<script>
import NavBrand from "../components/NavBrand.vue"
export default {
  components: {
      NavBrand
  },
};
</script>