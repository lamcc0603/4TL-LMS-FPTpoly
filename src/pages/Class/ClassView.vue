<template>
  <div v-if="loading">
    <div class="class">
      <ClassSkeleton />
      <ClassSkeleton />
      <ClassSkeleton />
      <ClassSkeleton />
    </div>
  </div>

  <div class="class" v-else>
    <template v-for="classItem of classes" :key="classItem.folder_tree_id">
      <ClassItem
        :isClasses="classItem?.folder_tree_id ? true : false"
        :route="
          setRouteParent(
            classItem.parent_tree_id,
            classItem.folder_tree_id,
            classItem.id
          )
        "
        :title="classItem?.name"
        :time="classItem?.updated_at"
        :subject="classItem?.subject_id"
        :teacher="classItem?.teacher_id"
        :term="classItem?.term"
        :classes="classItem?.class_id"
        :courseId="classItem?.id"
      >
      </ClassItem>
    </template>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import ClassItem from "@/components/Class/ClassItem.vue";
import ClassSkeleton from "@/components/Class/ClassSkeleton.vue";

export default {
  components: { ClassItem, ClassSkeleton },
  setup() {
    const route = useRoute();
    const store = useStore();

    let param = route.params.pathMatch.toString();
    param = param.replace(",", "/");
    if (param.includes(",")) {
      param = param.replace(",", "/");
    }

    store.dispatch("fetchClassesById", { id: param });
    const classes = computed(() => {
      return store.state.classes;
    });

    const setRouteParent = (parent, folder, id) => {
      if (parent == 0) {
        return `class/${folder}`;
      } else if (parent > 0) {
        return `${parent}/${folder}`;
      }
      if (parent == undefined && folder == undefined) {
        return `/course/${id}`;
      }
    };

    const loading = computed(() => {
      return store.state.loading;
    });
    return { classes, setRouteParent, loading };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

.class {
  width: 100%;
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@include mobile {
  .class {
    grid-template-columns: 1fr;
  }
}
</style>
