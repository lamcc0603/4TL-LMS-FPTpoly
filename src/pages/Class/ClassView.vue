<template>
  <div class="class">
    <ClassItem
      route="4"
      title="Kho học liệu"
      sup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor accusamus molestiae consequatur debitis optio, placeat earum. Cumque ad dolorem libero sunt? Illo, dolorum tempore mollitia quas consequuntur laudantium ex!"
      time="2022-09-30 16:18:43"
    />
  </div>
</template>

<script>
import ClassItem from "@/components/Class/ClassItem.vue";
export default {
  components: { ClassItem },
};
</script>

<style lang="scss" scoped>
.class {
  width: 100%;
  background: #d9d9d9;
  font-size: 16px;
}
</style>
