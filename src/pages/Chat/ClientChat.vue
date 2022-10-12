<template lang="">
  <div class="chat">
    <div class="chat__listChat chat__box">
      <ListChat />
    </div>
    <div class="chat__viewChat chat__box">
      <ViewChat />
    </div>
  </div>
</template>
<script>
import ViewChat from "@/components/Chat/ViewChat.vue";
import ListChat from "@/components/Chat/ListChat.vue";

export default {
  components: { ViewChat, ListChat },
};
</script>
<style scoped lang="scss">
.chat {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 1.5rem;
  &__box {
    box-shadow: 0px 0px 8px var(--fds-black-alpha-05);
    border-radius: 7px;
  }
  &__listChat {
    background-color: var(--chat-bg);
    grid-column: 1/2;
    // border-right: 1px solid var(--chat-boder);
    height: 72vh;
    overflow: auto;
    // overflow: hidden;
  }
  &__viewChat {
    background-color: var(--chat-bg);
    position: relative;
    grid-column: 2/4;
  }
}
</style>
