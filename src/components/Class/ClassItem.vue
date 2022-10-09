<template>
  <router-link v-if="isClasses" :to="route" class="class__item">
    <div class="class__icon">
      <i class="fa-solid fa-book"></i>
    </div>
    <div class="class__detail">
      <h3 class="class__detail--title">
        {{ title }}
      </h3>
      <p class="class__detail--sup">
        {{ sup }}
      </p>
      <p class="class__detail--time">{{ time }}</p>
    </div>
  </router-link>

  <router-link v-else :to="`${route}`" class="class__item">
    <div class="class__icon">
      <i class="fa-solid fa-book"></i>
    </div>
    <div class="class__detail">
      <h3 class="class__detail--title">
        {{ subject }}
      </h3>
      <p class="class__detail--sup">
        {{ teacher }}
      </p>
      <p class="class__detail--time">{{ term }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      default: null,
    },
    title: {
      default: "",
    },
    sup: {
      default: "",
    },
    time: {
      default: "",
    },
    subject: {
      default: "",
    },
    teacher: {
      default: "",
    },
    term: {
      default: "",
    },
    isClasses: {},
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.class {
  &__item {
    display: flex;
    max-width: 60rem;
    height: auto;
    padding: 1.5rem;
    background: var(--medium-green);
    border-radius: 14px;
    color: var(--black);
  }
  &__icon {
    flex: 1;
    font-size: 5em;
    border-right: 3px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__detail {
    flex: 4;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &--title {
      font-size: 2.5rem;
      font-family: "roboto700";
      text-transform: uppercase;
    }
    &--sup,
    &--time {
      font-size: 1.6rem;
    }
  }
}
</style>
