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

  <form action="" v-else class="class__join">
    <router-link :to="`${route}`" class="class__item">
      <div class="class__icon">
        <i class="fa-solid fa-book"></i>
      </div>
      <div class="class__detail">
        <h3 class="class__detail--title">
          {{ teacher?.name + "-" + classes?.name }}
        </h3>
        <p class="class__detail--sup">
          {{ subject.name }}
        </p>
        <p class="class__detail--time">{{ term }}</p>
      </div>
    </router-link>
  </form>
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
    classes: {},
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.class {
  &__join {
    max-width: 600px;
    width: 100%;
  }
  &__item {
    display: flex;
    max-width: 600px;
    // height: auto;
    padding: 15px;
    background: var(--white);
    color: var(--black);
    border-radius: 14px;
    box-shadow: 2px 2px 5px 0px var(--fds-black-alpha-05);
    border-radius: 14px;
  }
  &__icon {
    flex: 1;
    font-size: 5em;
    border-right: 3px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fds-blue-60);
  }
  &__detail {
    flex: 4;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &--title {
      font-size: 18px;
      font-family: "Segoe UI Bold";
      text-transform: uppercase;
    }
    &--sup,
    &--time {
      font-size: 1.6rem;
    }
  }
}
</style>
