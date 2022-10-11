<template>
  <li class="user__setting--item">
    <router-link :to="itemLink" class="user__setting--link">
      <i :class="icon"></i> {{ itemTitle }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    itemLink: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    itemTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user__setting--link i {
  color: var(--fds-gray-30);
  margin-right: 20px;
}
</style>
