<template>
  <ul class="menu">
    <li class="menu__item">
      <router-link to="/" class="menu__link">Trang chủ</router-link>
    </li>
    <li class="menu__item">
      <router-link to="course" class="menu__link">Course</router-link>
    </li>
    <li class="menu__item">
      <router-link to="/about" class="menu__link">About</router-link>
    </li>
    <li class="menu__item">
      <router-link to="/about" class="menu__link">About</router-link>
    </li>
  </ul>
  <div class="mobile__menu">
    <i class="fa-solid fa-bars"></i>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  gap: 5rem;
  &__item {
    padding: 0 2rem;
    text-align: center;
    line-height: 9.8rem;
  }
  &__link {
    font-weight: 800;

    text-transform: capitalize;
    text-decoration: none;
    font-size: 2rem;
    color: var(--white);
    display: block;
    width: 100%;
    height: 100%;
  }
}
.mobile {
  &__menu {
    visibility: hidden;
    opacity: 0;
    display: none;
  }
}
@media screen and (max-width: 1280px) {
  .menu {
    gap: 2rem;
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
      color: var(--white);
      font-size: 3rem;
      text-align: center;
      line-height: 10rem;
    }
  }
}
</style>
