<template>
  <div class="class__item">
    <div class="class__icon">
      <i class="fa-solid fa-book"></i>
    </div>
    <div class="class__detail">
      <h3 class="class__detail--title"></h3>
      <p class="class__detail--sup"></p>
      <p class="class__detail--time"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.class {
  &__item {
    display: flex;
    max-width: 600px;
    height: auto;
    padding: 15px;
    background-color: rgb(255, 255, 255);
    color: var(--black);
    border-radius: 14px;
    box-shadow: 2px 2px 5px 0px var(--fds-black-alpha-05);
    animation: pulse-bg 2.5s infinite;
  }
  &__icon {
    flex: 1;
    font-size: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fds-gray-10);
    background-color: rgb(255, 255, 255);

    animation: pulse-bg 2.5s infinite;
  }
  &__detail {
    flex: 4;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-left: 3px solid var(--fds-gray-05);

    animation: pulse-bg 2.5s infinite;
    &--title {
      content: " ";
      width: 250px;
      height: 24px;
      font-size: 18px;
      font-family: "Segoe UI Bold";
      text-transform: uppercase;
      background-color: var(--fds-gray-10);
    }
    &--sup,
    &--time {
      font-size: 1.6rem;
      width: 80%;
      background-color: var(--fds-gray-10);
      height: 16px;
      line-height: 140%;
    }
  }
  @keyframes pulse-bg {
    0% {
      background-color: var(--fds-gray-10);
    }
    50% {
      background-color: var(--fds-gray-20);
    }
    100% {
      background-color: var(--fds-gray-10);
    }
  }
}
</style>
