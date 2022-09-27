<template lang="">
  <div class="SelfMessage">
    <div class="SelfMessage__Messages">
      <div class="SelfMessage__Messages--messge">
        <p>hello bạn trẻ</p>
      </div>
      <div class="SelfMessage__Messages--messge">
        <p>hello bạn trẻ</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.SelfMessage {
  display: flex;
  justify-content: right;
  &__Messages {
    display: flex;
    flex-direction: column;
    align-items: right;
    &--messge {
      width: 100%;
      border-radius: 6px;
      padding: 1.5rem;
      background-color: var(--message-self);
      margin-bottom: 0.5rem;
      p {
        color: #ffffff;
        font-size: 17px;
      }
    }
  }
}
</style>
