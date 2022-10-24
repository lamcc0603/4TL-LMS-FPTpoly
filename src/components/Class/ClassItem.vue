<template>
  <router-link v-if="isClasses" :to="route" class="class__item">
    <div class="class__icon">
      <i class="fa-solid fa-book"></i>
    </div>
    <div class="class__detail">
      <h3 class="class__detail--title">
        {{ title }}
      </h3>
      <p class="class__detail--sup">
        {{ sup }}
      </p>
      <p class="class__detail--time">{{ time }}</p>
    </div>
  </router-link>

  <button @click="joinCourse(courseId)" v-else class="course__item">
    <div class="course__icon">
      <i class="fa-solid fa-book"></i>
    </div>
    <div class="course__detail">
      <h3 class="course__detail--title">
        {{ teacher?.name + "-" + classes?.name }}
      </h3>
      <p class="course__detail--sup">
        {{ subject.name }}
      </p>
      <p class="course__detail--time">{{ term }}</p>
    </div>
  </button>
  <div class="popup" v-if="isShowPopUp">
    <div v-if="!joined">
      <h1>{{ msg }}</h1>
      <div class="popup__button">
        <button
          class="btn btn-access"
          @click="joinClass(`/course/${courseId}`)"
        >
          Vào lớp
        </button>
        <button class="btn btn-close" @click="togglePopup">Hủy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  props: {
    route: {
      default: null,
    },
    title: {},
    sup: {},
    time: {},
    subject: {},
    teacher: {},
    term: {},
    isClasses: {},
    classes: {},
    courseId: {},
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const isShowPopUp = ref(false);
    const msg = ref("");
    const joined = ref(true);
    const joinCourse = (id) => {
      store.dispatch("joinCourseByStudent", { idCourse: id }).then(() => {
        const joinCourse = store.state.joinCourse;
        if (joinCourse.status == 200) {
          isShowPopUp.value = !isShowPopUp.value;
          msg.value = joinCourse.msg;
          joined.value = false;
        } else {
          joinClass(props.route);
        }
      });
    };
    const togglePopup = () => {
      isShowPopUp.value = !isShowPopUp.value;
    };
    const joinClass = (id) => {
      router.push(id);
    };
    return {
      joinCourse,
      isShowPopUp,
      msg,
      joined,
      togglePopup,
      joinClass,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_mixins.scss";

.course,
.class {
  &__item {
    display: flex;
    align-items: center;
    max-width: 600px;
    width: 100%;
    padding: 15px;
    background: var(--white);
    color: var(--black);
    border-radius: 14px;
    box-shadow: 2px 2px 5px 0px var(--fds-black-alpha-05);
  }
  &__icon {
    flex: 1;
    margin-right: 20px;
    font-size: 4.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fds-blue-60);
  }
  &__detail {
    flex: 4;
    text-align: left;
    word-break: keep-all;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-left: 3px solid var(--black);

    gap: 1rem;
    &--title {
      font-size: 18px;
      font-family: "Segoe UI Bold";
      text-transform: uppercase;
    }
    &--sup,
    &--time {
      font-size: 16px;
    }
  }
}
.popup {
  width: 600px;
  height: 200px;
  background: rgb(255, 255, 255);
  border-radius: 24px;
  box-shadow: 0px 0px 8px var(--fds-black-alpha-20);
  padding: 15px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  & h1 {
    font-size: 30px;
    font-family: "Segoe UI Bold";
    margin-bottom: 20px;
  }
  &__button {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}

@include tablet {
  .class,
  .course {
    &__icon {
      font-size: 4em;
    }
    &__detail {
      &--title {
        font-size: 16px;
      }
      &--sup,
      &--time {
        font-size: 14px;
      }
    }
  }
}
@include mobile {
  .class,
  .course {
    &__icon {
      font-size: 3em;
    }
    &__detail {
      &--title {
        font-size: 14px;
      }
      &--sup,
      &--time {
        font-size: 12px;
      }
    }
  }
}
</style>
