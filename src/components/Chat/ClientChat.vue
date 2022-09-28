<template lang="">
  <div class="chat">
    <div class="chat__listChat">
      <ListChat />
    </div>
    <div class="chat__viewChat">
      <ViewChat />
    </div>
  </div>
</template>
<script>
import ViewChat from "./ViewChat.vue";
import ListChat from "./ListChat.vue";

export default {
  components: { ViewChat, ListChat },
};
</script>
<style lang="scss">
// @include mobile {
//   .chat {
//     grid-template-columns: 1fr;
//   }
// }
.chat {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1300px;
  margin: 0 auto;
  &__listChat {
    grid-column: 1/2;
    border-right: 1px solid var(--chat-boder);
    padding: 0 1rem;
    height: 80vh;
    overflow: auto;
  }
  &__viewChat {
    position: relative;
    grid-column: 2/4;
    padding: 0 1rem;
  }
}
</style>
