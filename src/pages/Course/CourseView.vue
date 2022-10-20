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
        <div v-if="!course.listDocument">Loading document.....</div>
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
        <div v-if="!course.listLabs">Loading Labs...</div>
        <template v-else>
          <div class="exer_box" v-for="lab in course.listLabs" :key="lab.id">
            <a href="#">{{ lab.name }}</a>
            <p>Ended On: {{ lab.updated_at }}</p>
          </div>
          <DropZone
            class="drop-area"
            @files-dropped="addFiles"
            #default="{ dropZoneActive }"
          >
            <label for="file-input">
              <span v-if="dropZoneActive">
                <span>Drop Them Here</span>
                <span class="smaller">to add them</span>
              </span>
              <span v-else>
                <span>Kéo tệp</span>
                <span class="smaller">
                  hoặc <strong><em>bấm vào đây</em></strong> để chọn tệp
                </span>
              </span>

              <input
                type="file"
                id="file-input"
                multiple
                @change="onInputChange"
              />
            </label>
            <ul class="image-list" v-show="files.length">
              <FilePreview
                v-for="file of files"
                :key="file.id"
                :file="file"
                tag="li"
                @remove="removeFile"
              />
            </ul>
            <button @click.prevent="uploadFiles(files)" class="upload-button">
              Tải tệp lên
            </button>
          </DropZone>
        </template>
      </div>

      <div id="{{tab3}}" class="tabcontent">
        <div v-if="!course.listAsms">Loading Asms...</div>
        <template v-else>
          <div class="exer_box" v-for="asm in course.listAsms" :key="asm.id">
            <a href="#" @click="() => TogglePopup('buttonTriggers')">{{
              asm.name
            }}</a>
            <p>Ended On: {{ asm.updated_at }}</p>
            <DropZone
              class="drop-area"
              @files-dropped="addFiles"
              #default="{ dropZoneActive }"
              v-if="buttonTriggers"
            >
              <label for="file-input">
                <span v-if="dropZoneActive">
                  <span>Drop Them Here</span>
                  <span class="smaller">to add them</span>
                </span>
                <span v-else>
                  <span>Drag Your Files Here</span>
                  <span class="smaller">
                    or <strong><em>click here</em></strong> to select files
                  </span>
                </span>

                <input
                  type="file"
                  id="file-input"
                  multiple
                  @change="onInputChange"
                />
              </label>
              <ul class="image-list" v-show="files.length">
                <FilePreview
                  v-for="file of files"
                  :key="file.id"
                  :file="file"
                  tag="li"
                  @remove="removeFile"
                />
              </ul>
              <button @click.prevent="uploadFiles(files)" class="upload-button">
                Upload
              </button>
            </DropZone>
          </div>
        </template>
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
<script>
export default {
  setup() {
    const popupTriggers = ref({
      buttonTriggers: false,
      timedTriggers: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.buttonTriggers.value[trigger] =
        !popupTriggers.value[trigger];
    };

    return { popupTriggers, TogglePopup };
  },
};
</script>
<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import QuizItem from "./QuizItem.vue";

//
import DropZone from "@/components/Upload/DropZone.vue";
// import FilePreview from '@/components/Upload/FilePeview.vue'

// File Management
import useFileList from "@/compositions/file-list";
// import PopupView from "./PopupView.vue";
const { files, addFiles, removeFile } = useFileList();

function onInputChange(e) {
  addFiles(e.target.files);
  e.target.value = null; // reset so that selecting the same file again will still cause it to fire this change
}

// Uploader
// import createUploader from './compositions/file-uploader'
// const { uploadFiles } = createUploader('YOUR URL HERE')
//

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
  padding: 10px;
  & h3 {
    font-size: 30px;
    font-family: "Segoe UI Bold";
    color: var(--fds-blue-100);
    line-height: 1.34;
  }
  & p {
    font-size: 15px;
    line-height: 1.3333;
    padding-bottom: 10px;
    /* margin-bottom: 20px; */
    border-radius: 4px;
    border-bottom: 4px solid var(--fds-gray-05);
  }
  .exer_box {
    padding: 0 10px;
    &:hover {
      background-color: #ffffd0;
    }
    a {
      color: #000;
      font-size: 24px;
      font-weight: bolder;
      text-transform: capitalize;
      padding: 10px 0 0 0;
      display: block;
      &:hover {
        color: #aaa;
      }
    }
  }
}

.tab + .tabcontent {
  display: block;
}

.exer_box {
  cursor: pointer;
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

.drop-area {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  label {
    color: white;
    display: flex;
    flex-direction: column;

    input {
      margin: 20px 0;
    }
  }
  .upload-button {
    background: cyan;
    border-radius: 4px;
    padding: 8px 10px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    color: white;
  }
}
</style>
