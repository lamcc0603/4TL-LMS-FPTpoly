<template>
  <ul class="menu">
    <NavItem navLink="/" navTitle="home" />
    <NavItem navLink="/class" navTitle="class" />
    <NavItem navLink="/chat" navTitle="chat" />
    <NavItem navLink="/about" navTitle="about" />
  </ul>
  <div class="mobile__menu">
    <i class="fa-solid fa-bars"></i>
  </div>
</template>

<script>
import NavItem from "@/components/Nav/NavItem.vue";
export default {
  components: { NavItem },
  setup() {},
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex: 3;
  gap: 50px;
}
.mobile {
  &__menu {
    visibility: hidden;
    opacity: 0;
    display: none;
  }
}
@media screen and (max-width: 1366px) {
  .menu {
    gap: 20px;
    &__item {
      padding: 0;
    }
  }
}
@media screen and (max-width: 767.98px) {
  .menu {
    visibility: hidden;
    opacity: 0;
    display: none;
  }
  .mobile {
    &__menu {
      cursor: pointer;
      visibility: visible;
      opacity: 1;
      display: block;
      font-size: 3rem;
      color: var(--black);
      text-align: center;
      line-height: 100px;
    }
  }
}
</style>
