"use strict";
const questionBox = document.getElementById("questionBox");
let question1, question2, question3, question4, question5;
let questions = [
  (question1 = {
    question: "1. Who is the mother of Jesus",
    options: ["Hannah", "Mary", "Martha", "Esther"],
    number: 1,
    answer: 1,
  }),
  (question2 = {
    question: "2. Who is the mother of John the baptist",
    options: ["Hannah", "Mary", "Elizabeth", "Esther"],
    number: 2,
    answer: 2,
  }),
  (question3 = {
    question: "3. Who is the mother of dahez",
    options: ["Hannah", "Mary", "Martha", "Uchenna"],
    number: 3,
    answer: 3,
  }),
  (question4 = {
    question: "4. Who is the mother of Daddy",
    options: ["Hannah", "Daa Mary", "Martha", "Uchenna"],
    number: 4,
    answer: 1,
  }),
  (question5 = {
    question: "5. Who is the mother of samuel",
    options: ["Hannah", "Mary", "Martha", "Uchenna"],
    number: 5,
    answer: 0,
  }),
];
let answers = [
  (question1 = {
    text: "Mary is the mother of Jesus",
  }),
  (question2 = {
    text: "Mary is the mother of Jesus",
  }),
  (question3 = {
    text: "Mary is the mother of Jesus",
  }),
  (question4 = {
    text: "Mary is the mother of Jesus",
  }),
  (question5 = {
    text: "Mary is the mother of Jesus",
  }),
];
console.log(answers);
let HTML = "";
const pushQuestion = function (
  questionText,
  option0,
  option1,
  option2,
  option3,
  number
) {
  let questionHTML = `
  <section class="question-section">
  <p class="questionNumber">${questionText}</p>
  <div class="option-box question-${number}">
  <input
  type="radio"
  name="${questionText}"
  id="option_${number}a"
  class="question${number}"
  value="${option0}"
  /><label class="labels" for="option_${number}a">${option0}</label><br /></div>
  <div class="option-box question-${number}">
   <input
  type="radio"
  name="${questionText}"
  id="option_${number}b"
  class="question${number}"
  value="${option1}"
  /><label class="labels" for="option_${number}b">${option1}</label><br />
  </div>
  <div class="option-box question-${number}">
   <input
  type="radio"
  name="${questionText}"
  id="option_${number}c"
  class="question${number}"
  value="${option2}"
  /><label class="labels" for="option_${number}c">${option2}</label><br /></div>
  <div class="option-box question-${number}">
  <input
  type="radio"
  name="${questionText}"
  id="option_${number}d"
  class="question${number}"
  value="${option3}"
  /><label class="labels" for="option_${number}d">${option3}</label><br /></div>
  
  <div class="correction"></div>
  </section>
  `;
  HTML += questionHTML;

  questionBox.innerHTML = HTML;
};
function make(questions) {
  let { question, options, number } = questions;

  return [question, options[0], options[1], options[2], options[3], number];
}

// console.log(question, a, b, c, d);
pushQuestion(...make(questions[0]));
pushQuestion(...make(questions[1]));
pushQuestion(...make(questions[2]));
pushQuestion(...make(questions[3]));
pushQuestion(...make(questions[4]));
const selectQuestionAnswer = function (number) {
  let questionOptions = document.querySelectorAll(`.question${number}`);
  return questionOptions;
};
// for(let i = 0; i<6; i++){
//   selectQuestionAnswer(i)
// }
function selectOption(number) {
  let optionBox = document.querySelectorAll(`.question-${number}`);
  return optionBox;
}
function x(num) {
  let questionNum = selectQuestionAnswer(num);
  return questionNum;
}

let correctionField = document.querySelectorAll(".correction");
const checkBtn = document.getElementById("check-btn");
let score = 0;
checkBtn.addEventListener("click", function () {
  function select(number) {
    for (const [key, questionOption] of x(number).entries()) {
      // console.log(questionOption);
      // console.log(questions[key]);
      if (
        questionOption.checked &&
        questionOption.value ===
          questions[number - 1].options[questions[number - 1].answer]
      ) {
        selectOption(number)[key].classList.add("correct");
        correctionField[number - 1].innerHTML = `<p>Correct!</p>
        Reference: ${answers[number - 1].text}`;
        questionOption.classList.add("correct");
        score++;
      } else if (
        questionOption.checked &&
        questionOption.value !==
          questions[number - 1].options[questions[number - 1].answer]
      ) {
        selectOption(number)[key].classList.add("wrong");
        correctionField[number - 1].innerHTML = `<p>Incorrect!</p>
        Reference: ${answers[number - 1].text}`;
      }
    }
  }

  select(1);
  select(2);
  select(3);
  select(4);
  select(5);
  setTimeout(() => {
    alert(`You scored ${score} out of 5`);
  }, 5000);
});
