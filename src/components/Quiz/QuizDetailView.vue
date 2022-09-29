<template>
  <div class="quiz">
    <div class="quiz-time">
      <span>20 Hours</span>
    </div>

    <div class="quiz-content">
      <div class="quiz-number">
        <button>câu 1</button>
        <button>câu 2</button>
        <button>câu 3</button>
        <button>câu 4</button>
        <button>câu 5</button>
        <button>câu 6</button>
        <button>câu 7</button>
        <button>câu 8</button>
        <button>câu 9</button>
        <button>câu 10</button>
      </div>

      <div class="quiz-question">
        <h2 id="quiz-title" class="quiz-title">{{ question }}</h2>
        <form action="" method="get" class="quiz-form">
          <label for="">
            <input type="radio" name="" id="" /><span>{{ answer }}</span>
          </label>
          <label for="">
            <input type="radio" name="" id="" /><span>{{ answer }}</span>
          </label>
          <label for="">
            <input type="radio" name="" id="" /><span>{{ answer }}</span>
          </label>
          <label for="">
            <input type="radio" name="" id="" /><span>{{ answer }}</span>
          </label>
        </form>
      </div>

      <div class="quiz-button">
        <button class="quiz-submit" @click="prev">&leftarrow; Trước</button>
        <button class="quiz-submit" @click="next">Tiếp &rightarrow;</button>
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
  }
}
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    const question = ref("question");
    const answer = ref("answer");

    return { question, answer };
  },
};
</script>
