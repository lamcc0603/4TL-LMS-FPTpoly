<template>
  <header-view />
  <slot />
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
export default {
  components: { HeaderView },

  setup() {},
};
</script>
