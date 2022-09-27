<template lang="">
  <div class="OtherMessage">
    <div class="OtherMessage__avatar">
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
        alt=""
      />
    </div>
    <div class="OtherMessage__messages">
      <div class="OtherMessage__messages--messge">
        <p>hello bạn trẻ</p>
      </div>
      <div class="OtherMessage__messages--messge">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          aut.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.OtherMessage {
  display: flex;
  gap: 1rem;

  &__avatar {
    flex: 0 0 50px;
    border-radius: 50%;
    img {
      width: 50px;
      height: 50px;
    }
  }
  &__messages {
    display: flex;
    flex-direction: column;
    &--messge {
      border-radius: 6px;
      padding: 1.5rem;
      background-color: var(--message-other);
      margin-bottom: 0.5rem;
      p {
        color: var(--message-other);
        filter: invert(100%);
        font-size: 17px;
      }
    }
  }
}
</style>
