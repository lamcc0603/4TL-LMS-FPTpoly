<template>
  <li class="menu__item">
    <router-link class="menu__item" :to="navLink">{{ navTitle }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    navLink: {
      type: String,
      required: true,
    },
    navTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &__item {
    padding: 0 2rem;
    text-align: center;
    line-height: 9.8rem;
    color: var(--white);
    text-transform: capitalize;
    font-weight: 800;
    font-size: 2rem;
  }
  &__link {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 1366px) {
  .menu {
    &__item {
      padding: 0;
    }
  }
}
</style>
