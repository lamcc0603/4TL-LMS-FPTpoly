<template>
  <HeaderView />
  <router-view v-slot="{ Component }" class="container">
    <div class="content">
      <transition name="fade">
        <component :is="Component" :key="$route.path" />
      </transition>
    </div>
  </router-view>
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
  padding: 20px;
  min-height: calc(100vh - 418px);
}
</style>
