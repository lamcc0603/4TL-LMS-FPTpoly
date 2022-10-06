<template>
  <div class="class">
    <ClassItem
      route="4"
      title="Kho học liệu"
      sup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor accusamus molestiae consequatur debitis optio, placeat earum. Cumque ad dolorem libero sunt? Illo, dolorum tempore mollitia quas consequuntur laudantium ex!"
      time="2022-09-30 16:18:43"
    >
    </ClassItem>
  </div>
</template>

<script>
import ClassItem from "@/components/Class/ClassItem.vue";
import { useRoute } from "vue-router";
export default {
  components: { ClassItem },
  setup() {
    const route = useRoute();
    console.log(route.params.pathMatch); // lay dc param / bao nhieeu cung dc
  },
};
</script>

<style lang="scss" scoped>
.class {
  width: 100%;
  background: #d9d9d9;
  font-size: 16px;
}
</style>
