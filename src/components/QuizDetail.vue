<template>
  <body>
    <div className="quiz-container">
      <h2 id="question">Question text</h2>
      <hr />
      <div class="quiz">
        <h4 id="question_item">Question</h4>
        <ul>
          <li>
            <input type="radio" id="a" name="answer" />
            <label for="a" id="a_text">Question</label>
          </li>
        </ul>
        <ul>
          <li>
            <input type="radio" id="b" name="answer" />
            <label for="b" id="b_text">Question</label>
          </li>
        </ul>
        <ul>
          <li>
            <input type="radio" id="c" name="answer" />
            <label for="c" id="c_text">Question</label>
          </li>
        </ul>
        <ul>
          <li>
            <input type="radio" id="d" name="answer" />
            <label for="d" id="d_text">Question</label>
          </li>
        </ul>

        <button id="submit">submit</button>
      </div>
    </div>
  </body>
</template>

<script type="text/javascript">
window.onload = function () {
  const quizData = [
    {
      question: "Testing co ho tro cac annotation khong?",
      question_item: "Testing co ho tro cac annotation khong?",
      a: "khong",
      b: "co",
      c: "",
      d: "",
      correct: "b",
    },
    {
      question: "Testing co ho tro cac annotation khong1?",
      question_item: "Testing co ho tro cac annotation khong1?",
      a: "khong",
      b: "co",
      c: "khong co",
      d: "co khong",
      correct: "b",
    },
    {
      question: "Testing co ho tro cac annotation khong2?",
      question_item: "Testing co ho tro cac annotation khong2?",
      a: "khong",
      b: "co",
      c: "khong co",
      d: "co khong",
      correct: "b",
    },
    {
      question: "Testing co ho tro cac annotation khong3?",
      question_item: "Testing co ho tro cac annotation khong3?",
      a: "khong",
      b: "co",
      c: "khong co",
      d: "co khong",
      correct: "b",
    },
    {
      question: "Testing co ho tro cac annotation khong4?",
      question_item: "Testing co ho tro cac annotation khong4?",
      a: "khong",
      b: "co",
      c: "khong co",
      d: "co khong",
      correct: "b",
    },
    {
      question: "Testing co ho tro cac annotation khong5?",
      question_item: "Testing co ho tro cac annotation khong5?",
      a: "khong",
      b: "co",
      c: "khong co",
      d: "co khong",
      correct: "b",
    },
  ];

  const questionEl = document.querySelector("#question");
  const questionElItem = document.querySelector("#question_item");
  const a_text = document.querySelector("#a_text");
  const b_text = document.querySelector("#b_text");
  const c_text = document.querySelector("#c_text");
  const d_text = document.querySelector("#d_text");
  const submitBtn = document.querySelector("#submit");

  let currentQuiz = 0;

  loadQuiz();

  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    questionElItem.innerText = currentQuizData.question_item;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }

  submitBtn.addEventListener("click", () => {
    currentQuiz++;

    loadQuiz();
  });
};
</script>

<style scoped lang="scss">
.quiz-container {
  padding: 20px 7%;
  h2 {
    font-weight: bold;
  }
  hr {
    border: 1px solid #000;
  }
  .quiz {
    padding: 10px 20px;
    background-color: #ccc;
    border: 1px solid aqua;
    ul li {
      padding: 10px 0;
    }
    button {
      background-color: #8e44ad;
      border: none;
      color: white;
      cursor: pointer;
      display: block;
      font-size: 16px;
      padding: 10px;
      &:hover {
        background-color: #732d91;
      }
    }
  }
}
</style>
