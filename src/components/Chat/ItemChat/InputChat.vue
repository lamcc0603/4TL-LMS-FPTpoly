<template lang="">
  <div class="sendChat">
    <input
      type="text"
      class="sendChat__input"
      placeholder="Nội dung tin nhắn"
    />
    <button class="sendChat__sendMessage">
      <i class="fa-solid fa-paper-plane"></i>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.sendChat {
  margin-top: 2rem;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  &__input {
    width: 100%;
    padding: 1.5rem 2.5rem;
    border: none;
    background-color: #f1f1f1;
    &:focus {
      outline: none;
    }
  }
  &__sendMessage {
    flex: 0 0 100px;
    border: none;
    background: var(--btn-send-message);
    color: #fff;
  }
}
</style>
