<template>
  <header-view />
  <div class="container">
    <slot />
  </div>
  <footer-view />
</template>

<script>
import HeaderView from "@/pages/Header/HeaderView.vue";
import FooterView from "@/pages/Footter/FooterView.vue";
export default {
  components: { HeaderView, FooterView },

  setup() {},
};
</script>
