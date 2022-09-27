<template>
  <header-view />
  <div class="container">
    <slot />
  </div>
  <footer-view />
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: { HeaderView, FooterView },

  setup() {},
};
</script>
