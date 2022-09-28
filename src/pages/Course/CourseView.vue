<template>
  <div class="courseContainer">
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
        </div>

        <!-- Tab content -->
        <div id="{{tab1}}" class="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="{{tab2}}" class="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="{{tab3}}" class="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </div>
      <div class="asside"></div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/runtime-core";

export default {
  setup() {
    const tab1 = ref("Tab1");
    const tab2 = ref("Tab2");
    const tab3 = ref("Quiz");
    const tab4 = ref("Lab");

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
    return { tab1, tab2, tab3, tab4, openTab };
  },
};
</script>
<style scoped lang="scss">
.courseContainer {
  width: 100%;
  background: #d9d9d9;
  padding: 1vw;
  font-size: 16px;
  .courseBox {
    background: #d9d9d9;
    width: 100%;
    height: 1000px;
    display: flex;
    .course {
      flex: 3;
      background: white;
      margin-right: 1vw;
    }
    .asside {
      flex: 1;
      background: white;
    }
  }
}
/* Style the tab */
.tab {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: white;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 1.5vw;
  font-size: 1em;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
}

@media screen and (max-width: 1280px) {
  .courseContainer {
    font-size: 12px;
  }
}
@media screen and (max-width: 767.98px) {
  .courseContainer {
    font-size: 10px;
  }
}
</style>
