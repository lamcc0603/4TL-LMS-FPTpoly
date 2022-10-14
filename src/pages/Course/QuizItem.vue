<template>
  <div class="quizItem">
    <h3>{{ title }}</h3>
    <span class="countdown">{{ timer }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require,
    },
    deadline: {
      require,
    },
  },
};
</script>

<style lang="scss" scoped></style>
