const quizData = [
  {
    question: "How old is Cristiano ronadlo",
    a: "34",
    b: "40",
    c: "36",
    d: "30",
    correct: "c",
  },
  {
    question: "who won the ballon d'or 2016",
    a: "Cristiano Ronadlo",
    b: "Messi",
    c: "Lewandowski",
    d: "Kane",
    correct: "a",
  },
  {
    question: "who has most goals in uefa champions league",
    a: "Messi",
    b: "Cristiano Ronadlo",
    c: "Lewandowski",
    d: "Benzema",
    correct: "b",
  },
  {
    question: "who has most assists in uefa champions league",
    a: "Benzema",
    b: "Messi",
    c: "Di maria",
    d: "Cristiano Ronadlo",
    correct: "d",
  },
  {
    question: "who has most performances in uefa champions league",
    a: "Casillas",
    b: "Messi",
    c: "Xavi",
    d: "Cristiano Ronadlo",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSlected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSlected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2> <button onclick="location.reload()">Reload</button>`
    }
  }
});
