<template lang="">
  <div class="boxItem">
    <div class="boxItem__info">
      <div class="boxItem__info--avatar">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
          alt=""
        />
      </div>
      <div class="boxItem__info--description">
        <h3 class="name">Chinhdev</h3>
        <p class="messageOld">siuuuuuu</p>
      </div>
    </div>
    <div class="boxItem__status"><i class="fa-regular fa-circle"></i></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.boxItem {
  display: flex;
  justify-content: space-between;
  background-color: var(--chat-box-item);
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: var(--chat-box-item-hover);
  }
  &__info {
    display: flex;
    gap: 1rem;
    &--avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    &--description {
      display: flex;
      //   align-items: center;
      gap: 0.5rem;
      justify-content: center;
      flex-direction: column;
      .name {
        font-size: 17px;
        font-weight: bold;
      }
      .messageOld {
        font-size: 14px;
        color: #363636;
      }
    }
  }
  &__status {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
