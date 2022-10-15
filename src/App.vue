<template>
  <component :is="layout">
    <transition name="route" mode="out-in" appear>
      <router-view />
    </transition>
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constants";
export default {
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>

<style lang="scss">
.route-enter-from {
  opacity: 0;
}
.route-enter-active,
.route-leave-active {
  transition: all 0.2s ease-in-out;
}
.route-leave-to {
  opacity: 0;
}
</style>
