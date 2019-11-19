const STORE = [
  {
    question: 'Which of the following is the jewish new year?',
    answers: [
      'Yom Kippur',
      'Purim',
      'Shavuot',
      'Rosh Hashana' ],
    correctA: 'Rosh Hashana'
  },
  {
    question:'On which holiday do jews move into temporary huts?',
    answers: [
      'Simchat Torah',
      'Sukkot',
      "Lag Be'omer",
      'Shavuot'],
    correctA: 'Sukkot'
  },
  {
    question: 'On which holiday do jews dress up on?',
    answers: ['Rosh Hashana',
      'Sukkot',
      'Purim',
      'Yom Kippur'],
    correctA: 'Purim'
  },
  {
    question: 'On Pesach, which special food is eaten?',
    answers: ['Matza Crackers',
      'Cholent (stew)',
      'c)Apples',
      'd)Bread'],
    correctA: 'Matza Crackers'
  },
  {
    question: 'When do we give gifts of food to friends and extra charity to poor as commandments of day?',
    answers: ['Simchat Torah',
      'Purim',
      'Shavuot',
      'Sukkot'],
    correctA: 'Purim'
  }];
 

let score = 0;
let currentQ = 0;

//function updateScore()
//used when answer clicked is correct
function updateScore(score) {
  score ++;
  $('.js-score').text(score);
}

function updateQ(currentQ) {
  currentQ ++;
  $('.js-q-number').text(currentQ);
}


//when start/next-q clicked, html of question-page becomes this
function updateQuestionPage(currentQ) {
  $('.question-page').html(`
<form class='quiz-q'>
<p class='question'>${STORE[currentQ].question}</p>
<fieldset class='answer-choice'>
  <div>
    <input type="radio" name="answer"value="${STORE[currentQ].answers[0]}" id='a' >
    <label for="a">${STORE[currentQ].answers[0]}</label>
  </div>
  <div>
   <input type="radio" name="answer" value="${STORE[currentQ].answers[1]}" id='b'>
  <label for="b">${STORE[currentQ].answers[1]}</label>
  </div>
  <div>
    <input type="radio" name="answer" value="${STORE[currentQ].answers[2]}" id='c'>
    <label for="c">${STORE[currentQ].answers[2]}</label>
  </div>
  <div>
    <input type="radio" name="answer" value="${STORE[currentQ].answers[3]}" id='d'>
    <label for="d">${STORE[currentQ].answers[3]}</label>
  </div> 
</fieldset>
<button type='button' class='submit-button'>submit</button>
</form>`
);
$('.question-page').removeClass('hidden');
};
    
//when start button is clicked:
  //  the startpage gets class hidden added 
    //question and answer info replaces question page info
   // question page gets displayed on screen
function start() {
  $('.start-page').on('click', '.start', function(event) {
  $('.start-page').addClass('hidden');
  //q replace function//
  updateQuestionPage(0);
  currentQ ++;
  $('.js-q-number').text(currentQ);
})};

//when check answer is clicked:
  //  q page hidden
    //if correct:
      //  score is updated
       // well done page(img, next btn, words) 
//    if incorrect:
  //      incorrect page is displayed + correct a
function submitAnswerButton() {
  $('.question-page').on('click', '.submit-button', function(event) {
    $('.question-page').addClass('hidden');
    let answer = $('input:checked').val();
      score ++;
      $('.js-score').text(score);
      console.log('update score ran');
      console.log('update score ran correctly', score);
      $('.question-result').html(`
      <div class='q-result-img'>
        <img class='elmo-img' src='https://i.pinimg.com/originals/79/e4/22/79e422c8461c173ec0dfcd7fef95f63f.jpg' alt='img alt'>
        <p class='answer-correct'>correct!</p>
      </div>`).removeClass('hidden')
    }
    else {
      $('.question-result').html(`
      <div class='q-result-img'>
        <img src='data:image/png;base64,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' alt='img alt'>
        <p class='answer-correct'>Incorrect:(</p>
      </div>
      <p class='correct-answer'>The correct answer is ${STORE[currentQ-1].correctA}</p>`).removeClass('hidden');
    }
    if (currentQ == 5) {
      $('.question-result').append(`
    <button type='button' class='finish js-finish'>finish quiz!</button>`)
    }
    else {
      $('.question-result').append(`
    <button type='button' class='next-q js-next-q'>next q!</button>`)
  }})};

    
//when next q clicked:
  //  result page hidden
    //q/a info replaced with current info
//    q page displayed
  //  current q number updated(+1)
  //if last q, button changed to finish
function nextQButton() {
$('.question-result').on('click', '.js-next-q', function(event) {
  currentQ ++;
  $('.js-q-number').text(currentQ);
    $('.question-result').addClass('hidden');
    updateQuestionPage(currentQ-1);
})};



function showFinalResult(score) {
  console.log(score);
  if (score >= 4) {
    $('.end-results').html(`
    <img class='end-reaction good-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-1PAom2IVIOCKb51uBFpDyfyKrOCg7vDxt_zEYC6QMvQjKMC&s' alt=''>
    <p class='final-score'>MAZAL TOV! your final score is:${score}</p>
    <p class='final-comment'>well done!!! you rocked your socks off with this quiz! go eat some well deserved matza</p>
    <button type='button' class='restart'>restart</button>
    <p class='learn-more'>click on logo to learn more about the jewish holidays!</p>`)
  }
  else {
     $('.end-results').html(`
     <img class='end-reaction bad-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1qcVGEw2R96ceeXyWTjG20IQt5qAiIW5QtzjKtwI793N7LWM&s' alt='img'>
     <p class='final-score'>OY VEY! your final score is:${score}</p>
     <p class='final-comment'>better mazal next time!</p>
     <button type='button' class='restart'>restart</button>
     <p class='learn-more'>click on logo to learn more about the jewish holidays!</p>
     `)
  };
};

//finish button clicked:
//if score >= 4:
//  change final page to good
//else:
//   change final page to bad
//display final page.
function finishButton() {
$('.question-result').on('click', '.js-finish', function(event) {
  $('.question-result').addClass('hidden');
    showFinalResult(score);
    $('.end-results').removeClass('hidden');
})};


//when restart is clicked:
  //  end page hidden
//    start page is shown
function restart() {
$('.end-results').on('click', '.restart', function(event) {
  $('.end-results').addClass('hidden');
  $('.start-page').removeClass('hidden');
  currentQ = 0
  $('.js-q-number').text(currentQ);
  score = 0;
  $('.js-score').text(score);
})};

function startFunction() {
  start();
  submitAnswerButton();
  nextQButton();
  finishButton();
  restart();
};
$(startFunction);
 
