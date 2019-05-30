"use strict";

let questionNumber = 0;
let score = 0;

/* ====== TAKE QUIZ BUTTON ====== */
/*event listener to start quiz when user clicks 'Take Quiz' button */

function takeQuiz() {
  $(".takeQuiz").on("click", ".start-btn", function(event) {
    $(".takeQuiz").hide();
    $(".questionNumber").text(1);
    renderQuestion();
    $(".form-container").show();
  });
  console.log("takeQuiz() ran");
}

/* ====== QUESTION FORM TEMPLATE ====== */
function renderQuestion() {
  $(".quizForm").show();
  $(".quizQuestion").text(QUIZ[questionNumber].question);

  $(".answer1").val(QUIZ[questionNumber].answers[0]);
  $(".spAns1").text(QUIZ[questionNumber].answers[0]);

  $(".answer2").val(QUIZ[questionNumber].answers[1]);
  $(".spAns2").text(QUIZ[questionNumber].answers[1]);

  $(".answer3").val(QUIZ[questionNumber].answers[2]);
  $(".spAns3").text(QUIZ[questionNumber].answers[2]);

  $(".answer4").val(QUIZ[questionNumber].answers[3]);
  $(".spAns4").text(QUIZ[questionNumber].answers[3]);

  console.log("renderQuestion() ran");
}
/* ====== USER SUBMIT BUTTON ====== */
//event listener for question submit button
function answerSubmit() {
  $(".form-container").submit(function(event) {
    event.preventDefault();
    let isAnswerCorrect = checkAnswer();
    if (isAnswerCorrect === true) {
      console.log("correct");
      correctAnswerFeedback();
    } else {
      console.log("incorrect");
      incorrectAnswerFeedback();
    }
  });
  console.log("answerSubmit() ran");
}

/* ====== CHECK USER ANSWER ====== */
function checkAnswer() {
  let userAnswer = $("input:checked").val();

  const quizAnswer = `${QUIZ[questionNumber].correctAnswer}`;

  if (userAnswer === quizAnswer) {
    return true;
  } else {
    return false;
  }
  console.log("checkAnswer() ran");
}

/*===== ANSWER FEEDBACK ======*/
function correctAnswerFeedback() {
  $(".quizForm").hide();
  $(".feedBackPage").show();

  $(".feedBackPage").html(`<img class="sadImg"
          src="https://user-images.githubusercontent.com/30050423/58558719-1337f500-8211-11e9-8291-d3e341cdac21.png" alt=""/>
          <h3>That's Correct!</h3><br><img class="graphic" src="${
            QUIZ[questionNumber].graphic
          }" alt="${QUIZ[questionNumber].alt}"/><p>${
    QUIZ[questionNumber].info
  }</p>
          <button type="button" class="next-btn button">Next Question</button>`);

  increaseScore();
  console.log("correctAnswerFeedback() ran");
}

function incorrectAnswerFeedback() {
  $(".quizForm").hide();
  $(".feedBackPage").show();

  $(".feedBackPage").html(`          
          <img class="sadImg"
          src="https://user-images.githubusercontent.com/30050423/58558719-1337f500-8211-11e9-8291-d3e341cdac21.png" alt=""/>
          <h3>Incorrect!</h3><br><p><em>The correct answer is ${
            QUIZ[questionNumber].correctAnswer
          }</em></p>
          <img class="graphic" src="${QUIZ[questionNumber].graphic}" alt="${
    QUIZ[questionNumber].alt
  }"/>
          <p>${QUIZ[questionNumber].info}</p>
          <button type="button" class="next-btn button">Next Question</button>`);

  console.log("correctAnswerFeedback()ran");
}
/*====================================*/

/* ====== INCREASE SCORE TALLY ====== */
function increaseScore() {
  score++;
  $(".score").text(score);
  console.log("increaseScore()ran");
}

/* ====== NEXT QUESTION BUTTON ====== */
/*event listener to continue quiz when user clicks on 'Next Question' button */
function handleNextButton() {
  $(".feedBackPage").on("click", ".next-btn", function(event) {
    $(".feedBackPage").hide();
    if (questionNumber === QUIZ.length - 1) {
      renderResults();
    } else {
      $("input[type=radio]").prop("checked", false);
      iterateQuestion();
      renderQuestion();
      $(".form-container").show();
    }
  });
  console.log("handleNextButton() ran");
}

/* ====== ITERATE QUESTION ====== */
function iterateQuestion() {
  questionNumber++;
  $(".questionNumber").text(questionNumber + 1);
  console.log("iterateQuestion() ran");
}

/* ====== RESULTS PAGE ==== */
function renderResults() {
  $(".resultsPage").show();
  if (score >= 12) {
    $(".resultsPage")
      .html(`<img class="licensePlate Native" src="https://user-images.githubusercontent.com/30050423/58558719-1337f500-8211-11e9-8291-d3e341cdac21.png" alt="colorado license plate NATIVE"/>
          <h3>Congrats! <br>You did great!</h3><br><p>You got ${score}/16.</p><br><p>It's clear you are either a born & raised native or just got here as fast as you could!</p><p>Challenge a friend to beat your Colorado IQ.</p>
          <button type="button" class="restart-btn button">Play Again</button>`);
  } else if (score < 12 && score >= 6) {
    $(".resultsPage")
      .html(`<img class="licensePlate new2CO" src="https://user-images.githubusercontent.com/30050423/58558720-13d08b80-8211-11e9-884a-eeea58b46108.png" alt="colorado license plate NEW2CO"/>
          <h3>Nice Try! <br>You did pretty well!</h3><br><p>You got ${score}/16.</p><br><p>You know quite a bit about Colorado, but there's more to discover</p><p>Keep exploring and challenge a friend to see what their Colorado IQ is.</p>
          <button type="button" class="restart-btn">Play Again</button>`);
  } else {
    $(".resultsPage")
      .html(`<img class="licensePlate wanabe" src="https://user-images.githubusercontent.com/30050423/58558721-13d08b80-8211-11e9-8009-74a1e6aab151.png" alt="colorado license plate WANABE"/>
          <h3>Keep Trying! <br>You will get there!</h3><br><p>You got ${score}/16.</p><br><p>There is so much to discover about Colorado! Explore a trail, enjoy some sunshine and challenge a friend on their Colorado IQ.</p><p>You will be scaling mountains in no time.</p>
          <button type="button" class="restart-btn button">Play Again</button>`);
  }
  console.log("renderResults() ran");
}
/*========================*/

/*=====RESTART QUIZ=======*/
function playAgain() {
  $(".resultsPage").on("click", ".restart-btn", function(event) {
    $(".resultsPage").hide();
    $(".takeQuiz").show();
    $(".questionNumber").text(0);
    score = 0;
    $(".score").text(score);
    questionNumber = 0;

    runQuiz();
  });
  console.log("playAgain() ran");
}
/*===========================*/

/*====LOADS & RUNS QUIZ====*/
function runQuiz() {
  //$('.quizLength').text(length);
  takeQuiz();
  answerSubmit();
  checkAnswer();
  handleNextButton();
  playAgain();
  console.log("runQuiz ran");
}
/*===========================*/

$(runQuiz);
