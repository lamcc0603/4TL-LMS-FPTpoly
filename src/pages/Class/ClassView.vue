<template>
  <div class="class" v-if="classes">
    <div
      class="class__item"
      v-for="classItem of classes"
      :key="classItem.folder_tree_id"
    >
      <ClassItem
        @click="handleChangeClass"
        :route="
          classItem.parent_tree_id == 0
            ? `../class/${classItem.folder_tree_id}`
            : `${classItem.parent_tree_id}/${classItem.folder_tree_id}`
        "
        :title="classItem.name"
        :time="classItem.updated_at"
        :parent_tree_id="classItem.parent_tree_id"
        :folder_tree_id="classItem.folder_tree_id"
      >
      </ClassItem>
    </div>
  </div>
  <div v-else>Loading classes ............</div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import ClassItem from "@/components/Class/ClassItem.vue";

export default {
  components: { ClassItem },
  setup() {
    const route = useRoute();
    const store = useStore();

    let param = route.params.pathMatch.toString();
    param = param.replace(",", "/");

    console.log(param);
    store.dispatch("fetchClassesById", { id: param });
    const classes = computed(() => store.state.classes);
    const handleChangeClass = () => {
      let currentUrl = route.params;
      console.log(currentUrl);
    };
    return { classes, handleChangeClass };
  },
};
</script>

<style lang="scss" scoped>
.class {
  width: 100%;
  background: #d9d9d9;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
}
</style>
