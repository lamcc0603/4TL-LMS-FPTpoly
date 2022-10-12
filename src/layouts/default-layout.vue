<template>
  <HeaderView />
  <div class="container">
    <div class="content">
      <slot :key="$route.path" />
    </div>
  </div>
  <FooterView />
</template>

<script>
import HeaderView from "@/components/Header/HeaderView.vue";
import FooterView from "@/components/Footter/FooterView.vue";
export default {
  components: { HeaderView, FooterView },

  setup() {},
};
</script>
<style scoped lang="scss">
.content {
  height: 100%;
  min-height: calc(100vh - 418px);
}
</style>
