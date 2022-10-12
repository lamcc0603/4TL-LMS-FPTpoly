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
        Hiện tab mặc định (nhớ xóa)
        <div v-for="documentItem of course.listDocument" :key="documentItem.id">
          <h3>{{ documentItem.title }}</h3>
          <p>{{ documentItem.content }}</p>
        </div>
      </div>

      <div id="{{tab2}}" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="{{tab3}}" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      <div id="{{tab4}}" class="tabcontent">
        <h3>Quiz 3</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
    <div class="asside"></div>
  </div>
</template>
<script>
import { computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const tab1 = ref("Tài liệu");
    const tab2 = ref("Lab");
    const tab3 = ref("Assignment");
    const tab4 = ref("Quiz");

    const route = useRoute();
    const store = useStore();

    let courseId = Number(route.params.id);
    store.dispatch("fetchCourseBySubjectId", { id: courseId });
    let course = computed(() => {
      return store.state.course;
    });
    course = course.value;

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

    return { tab1, tab2, tab3, tab4, openTab, course };
  },
};
</script>
<style scoped lang="scss">
.courseBox {
  font-size: 16px;
  width: 100%;
  height: 1000px;

  display: flex;
  .course {
    flex: 3;
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
