<template>
  <div class="quiz container">
    <div class="quiz-time">
      <span>20 Hours</span>
    </div>

    <div class="quiz-content">
      <div class="quiz-number">
        <button @click="openTab(1)">câu 1</button>
        <button @click="openTab(2)">câu 2</button>
        <button @click="openTab(3)">câu 3</button>
        <button @click="openTab(4)">câu 4</button>
        <button @click="openTab(5)">câu 5</button>
        <button @click="openTab(6)">câu 6</button>
        <button @click="openTab(7)">câu 7</button>
        <button @click="openTab(8)">câu 8</button>
        <button @click="openTab(9)">câu 9</button>
        <button @click="openTab(10)">câu 10</button>
      </div>
      <div
        v-for="(quiz, index) in listQuiz"
        :key="index"
        :class="'tab' + (index + 1) + ' quiz-question'"
      >
        <h2 id="quiz-title" class="quiz-title">{{ quiz.question }}</h2>
        <form action="" method="get" class="quiz-form">
          <label
            for=""
            v-for="(answer, indexAnswer) in quiz.answers"
            :key="indexAnswer"
          >
            <input
              v-model="yourAnswer[index].answer"
              :value="indexAnswer + 1"
              type="radio"
              :name="'quiz' + (index + 1)"
              id=""
            /><span>{{ answer.answer }}</span>
          </label>
        </form>
        <div class="quiz-button">
          <button
            class="quiz-submit"
            @click="changeQuestion('prev', index + 1)"
            v-if="index > 0"
          >
            &leftarrow; Trước
          </button>
          <button
            class="quiz-submit"
            @click="changeQuestion('next', index + 1)"
            v-if="index < 9"
          >
            Tiếp &rightarrow;
          </button>
          <button class="quiz-submit" v-if="index == 9" @click="onSubmitForm">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz {
  padding: 0 30px;
  &-time {
    background-color: #eee;
    text-align: center;
    padding: 10px 0;
    margin: 0 0 10px 0;
    font-weight: 700;
    font-size: 18px;
  }

  &-content {
    background-color: #eee;
    display: flex;
    flex-direction: column;
    .quiz-number {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      button {
        font-weight: 700;
        font-size: 18px;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        border: 1px solid #000;
        text-transform: capitalize;
        &:hover {
          background-color: #333;
          color: #fff;
        }
      }
    }

    .quiz-question {
      padding: 20px 100px;
      .quiz-title {
        font-weight: 700;
        font-size: 18px;
      }
      .quiz-form {
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        label {
          display: flex;
          align-items: center;
          padding: 5px 0;
        }
      }
    }

    .quiz-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 20px 0;
      .quiz-submit {
        width: 100px;
        background-color: rgb(64, 180, 64);
        color: #fff;
        border: none;
        padding: 10px 20px;
        text-align: center;
        &:hover {
          background-color: rgb(96, 207, 96);
        }
      }
    }
    .quiz-question {
      display: none;
    }
    .tab1 {
      display: block;
    }
  }
}
</style>

<script>
import { ref } from "vue";
import quizAPI from "@/apis/quiz";

export default {
  setup() {
    const yourAnswer = ref([]);
    const listQuiz = ref([]);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idSubject = urlParams.get("idSubject");
    const level = urlParams.get("level");
    const getListQuiz = async () => {
      const res = await quizAPI.getQuizBySubjectAndLevel(idSubject, level);
      listQuiz.value = await res.data.question;
      listQuiz.value.forEach((element) => {
        yourAnswer.value.push({
          id: element.id,
          answer: 0,
        });
      });
    };
    getListQuiz();

    const changeQuestion = (action, currentTab) => {
      if (action === "next") {
        document.getElementsByClassName(`tab${currentTab}`)[0].style.display =
          "none";
        document.getElementsByClassName(
          `tab${currentTab + 1}`
        )[0].style.display = "block";
      } else {
        document.getElementsByClassName(`tab${currentTab}`)[0].style.display =
          "none";
        document.getElementsByClassName(
          `tab${currentTab - 1}`
        )[0].style.display = "block";
      }
    };

    const openTab = (tabOpen) => {
      const questionQuiz = document.getElementsByClassName("quiz-question");
      for (let i = 0; i < questionQuiz.length; i++) {
        questionQuiz[i].style.display = "none";
      }
      document.getElementsByClassName(`tab${tabOpen}`)[0].style.display =
        "block";
    };

    const onSubmitForm = () => {
      console.log(yourAnswer.value);
    };
    return { listQuiz, onSubmitForm, changeQuestion, openTab, yourAnswer };
  },
};
</script>
