<template lang="">
  <div class="ListMessages">
    <div class="ListMessages_Chat">
      <OtherChat />
      <SelfChat />
      <OtherChat />
      <SelfChat />
      <SelfChat />
      <SelfChat />
      <OtherChat />
      <OtherChat />
    </div>
  </div>

  <div class="ListMessages_InputChat">
    <InputChat />
  </div>
</template>
<script>
import OtherChat from "./ItemChat/OtherChat.vue";
import SelfChat from "./ItemChat/SelfChat.vue";
import InputChat from "./ItemChat/InputChat.vue";

export default {
  components: { OtherChat, SelfChat, InputChat },
};
</script>
<style lang="scss" scoped>
.ListMessages {
  display: flex;
  height: 60vh;
  overflow: auto;
  padding: 0 2rem;
  flex-direction: column-reverse;
  &_InputChat {
    padding: 1.5rem;
    position: absolute;
    margin: auto;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>
