<template>
  <div class="courseBox">
    <div class="course">
      <div class="tab">
        <button class="tablinks" @click="openTab($event, '{{tab1}}')">
          {{ tab1 }}
        </button>
        <button class="tablinks" @click="openTab($event, '{{tab2}}')">
          {{ tab2 }}
        </button>
        <button class="tablinks" @click="openTab($event, '{{tab3}}')">
          {{ tab3 }}
        </button>
        <button class="tablinks" @click="openTab($event, '{{tab4}}')">
          {{ tab4 }}
        </button>
      </div>

      <!-- Tab content -->
      <div id="{{tab1}}" class="tabcontent">
        <div v-if="!course.listDocument.length">Loading document.....</div>
        <template v-else>
          <div
            v-for="documentItem in course.listDocument"
            :key="documentItem.id"
          >
            <h3>{{ documentItem.title }}</h3>
            <p>{{ documentItem.content }}</p>
          </div>
        </template>
      </div>

      <div id="{{tab2}}" class="tabcontent">
        <div v-if="!course.listLabs.length">Loading Labs.....</div>
        <div v-else>
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
      </div>

      <div id="{{tab3}}" class="tabcontent">
        <h3>quiz</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      <div id="{{tab4}}" class="tabcontent">
        <h3>asm</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      <div id="{{tab4}}" class="tabcontent">
        <div v-if="!course.listQuiz">Loading Quiz.....</div>
        <template v-else>
          <div v-for="quiz of course.listQuiz" :key="quiz.id">
            <quizItem :title="quiz.name" :deadline="quiz.deadline" />
          </div>
        </template>
      </div>
    </div>
    <div class="asside"></div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import QuizItem from "./QuizItem.vue";

const tab1 = ref("Tài liệu");
const tab2 = ref("Lab");
const tab3 = ref("Assignment");
const tab4 = ref("Quiz");

const route = useRoute();
const store = useStore();
const openTab = (evt, tabName) => {
  // Declare all variables
  let i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};

const loading = ref(false);
let courseId = Number(route.params.id);

const course = computed(() => {
  loading.value = false;
  return store.state.course;
});

onMounted(() => {
  store.dispatch("fetchCourseBySubjectId", { id: courseId });
  loading.value = true;
});
</script>
<style scoped lang="scss">
.courseBox {
  font-size: 16px;
  width: 100%;
  height: 1000px;

  display: flex;
  .course {
    flex: 4;
    background: white;
    margin-right: 1vw;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0px 0px 8px var(--fds-black-alpha-05);
  }
  .asside {
    flex: 1;
    background: white;
    border-radius: 7px;
    box-shadow: 0px 0px 8px var(--fds-black-alpha-05);
  }
}

/* Style the tab */
.tab {
  overflow: hidden;
  border-bottom: 7px solid var(--bg-color);
}

/* Style the buttons that are used to open the tab content */
.tab button {
  font-family: "Segoe UI Bold";
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 1.5vw;
  font-size: 1.3em;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: var(--fds-blue-05);
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: var(--fds-blue-30);
}

/* Style the tab content */

.tabcontent {
  display: none;
  padding: 6px 12px;
  & h3 {
    font-size: 30px;
    font-family: "Segoe UI Bold";
    color: var(--fds-blue-100);
    line-height: 1.34;
  }
  & p {
    font-size: 15px;
    line-height: 1.3333;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    border-bottom: 4px solid var(--fds-gray-05);
  }
}

.tab + .tabcontent {
  display: block;
}

@media screen and (max-width: 1366px) {
  .courseBox {
    font-size: 12px;
  }
}
@media screen and (max-width: 767.98px) {
  .courseBox {
    font-size: 10px;
  }
}
</style>
