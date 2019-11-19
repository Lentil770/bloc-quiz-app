const STORE = [
  {
    question: 'which of the following is the jewish new year?',
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
 
  console.log(STORE);

let score = 0;
let currentQ = 0;

//function updateScore()
//used when answer clicked is correct
//called in right place:)
function updateScore(score) {
  score ++;
  $('.js-score').text(score);
  console.log('update score ran');
}

//function updateCurrentQ()
//called in right place:)
function updateQ(currentQ) {
  currentQ ++;
  $('.js-q-number').text(currentQ);
  console.log('updateQran');
}


//start button working!
//when start/next-q clicked, html of question-page becomes this
function updateQuestionPage(currentQ) {
  //%fix this somehow, shdnt edit universal variables etc, and it wasnt working -not a num anyways ha
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
//%submit button wld reload page=>button type button
);
console.log('updateQPage is workingg');
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
  //replaced function shortcut with full code bc wasnt working?
  currentQ ++;
  $('.js-q-number').text(currentQ);
  console.log('updateQran');
  console.log('start is working !', currentQ)
})};
//this is working!

//when check answer is clicked:
  //  q page hidden
    //if correct:
      //  score is updated
       // well done page(img, next btn, words) hidden removed + funfact
//    if incorrect:
  //      incorrect page is displayed + correct a + funfact
  //%submit doesnt exist already, have to bind to something already existing on page=> event delegation
function submitAnswerButton() {
  $('.question-page').on('click', '.submit-button', function(event) {
    $('.question-page').addClass('hidden');
    console.log('this worked!b');
    let answer = $('input:checked').val();
    if (answer == STORE[currentQ-1].correctA) {
      //replaced function shortcut with full code bc wasnt working?
      score ++;
      $('.js-score').text(score);
      console.log('update score ran');
      console.log('update score ran correctly', score);
      //add good img source
      $('.question-result').html(`
      <div class='q-result-img'>
        <img src='' alt='img alt'>
        <p class='answer-correct'>correct!</p>
      </div>`).removeClass('hidden')
      console.log('correct answer worked');
      //result page made acc. to correct\
    }
    else {
      $('.question-result').html(`
      <div class='q-result-img'>
        <img src='' alt='img alt'>
        <p class='answer-correct'>Incorrect:(</p>
      </div>
      <p class='correct-answer'>The correct answer is ${STORE[currentQ-1].correctA}</p>`).removeClass('hidden');
      console.log('incorrect answer worked');
    }
    console.log('this worked!c');
    //rescue this!
    if (currentQ == 5) {
      $('.question-result').append(`
    <button type='button' class='finish js-finish'>finish quiz!</button>`)
    }
    else {
      $('.question-result').append(`
    <button type='button' class='next-q js-next-q'>next q!</button>`)
  }})};

//***changed some stuff hope its gooddd: */
    
//when next q clicked:
  //  result page hidden
    //q/a info replaced with current info
//    q page displayed
  //  current q number updated(+1)
  //if last q, button changed to finish 
  //*****last q next-q-button x work-:button x change to finish */
  //%event delegation!!
  //%add console log to all listenenrs to make sure all being called
function nextQButton() {
$('.question-result').on('click', '.js-next-q', function(event) {
  //replaced function shortcut with full code bc wasnt working?
  currentQ ++;
  $('.js-q-number').text(currentQ);
  console.log('updateQran, currentQ is', currentQ);
  console.log('next-q updateQ working', currentQ)
    $('.question-result').addClass('hidden');
    updateQuestionPage(currentQ-1);
    /**
  supposed to be what updateQPage
  $('.question').text(STORE[currentQ].question);
  //fix input to be current answers for each radio
  $('#a').text(STORE[currentQ].answers[0]);
  $('#b').text(STORE[currentQ].answers[1]);
  $('#c').text(STORE[currentQ].answers[2]);
  $('#d').text(STORE[currentQ].answers[3]);
  };
  */
    console.log('next q worked bH bH!');
})};



function showFinalResult(score) {
  console.log(score);
  if (score >= 4) {
    $('.end-results').html(`
    <img class='end-reaction good-img' src='' alt=''>
    <p class='final-score'>MAZAL TOV! your final score is:${score}</p>
    <p class='final-comment'>well done!!! you rocked your socks off with this quiz! go eat some well deserved matza</p>
    <div class='img-row'>
      <img class='img-1' src='' alt='img'>
      <img class='img-2' src='' alt='img'>
      <img class='img-3' src='' alt='img'>
      <img class='img-4' src='' alt='img'>
    </div>
    <button type='button' class='restart'>restart</button>
    <p class='learn-more'>click on logo to learn more about the jewish holidays!</p>`)
  }
  else {
     $('.end-results').html(`
     <img class='end-reaction bad-img hidden' src='' alt='img'>
     <p class='final-score'>OY VEY! your final score is:${score}</p>
     <p class='final-comment'>better mazal next time!</p>
     <div class='img-row'>
       <img class='img-1' src='' alt='img'>
       <img class='img-2' src='' alt='img'>
       <img class='img-3' src='' alt='img'>
       <img class='img-4' src='' alt='img'>
     </div>
     <button type='button' class='restart'>restart</button>
     <p class='learn-more'>click on logo to learn more about the jewish holidays!</p>
     `)
  };
  console.log('showFinalResult worked! ')
};

//finish button clicked:
//if score >= 6:
//  change final page to good
//else:
//   change final page to bad
//display final page.
//?is it same as next one?
//%event delegation same as before
function finishButton() {
$('.question-result').on('click', '.js-finish', function(event) {
  $('.question-result').addClass('hidden');
    console.log('finish-click working BHa');
    showFinalResult(score);
    $('.end-results').removeClass('hidden');
    //$('.final-score').text(`your final score is: ${score}`);
    console.log('finish-click working BHb');
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
  console.log('updateQ reset');
  score = 0;
  $('.js-score').text(score);
  console.log('score reset');
})};

//call init methon which will will call event listeners, on ready shd call this.
//make sure names are same everywhere, only call by classes once?
function startFunction() {
  start();
  //all event listeners have to go in here? => make them seperate functinos
  submitAnswerButton();
  nextQButton();
  finishButton();
  restart();
};
$(startFunction);
/**
 * what needs to happen:
 * !&start screen shows
 * !&start button leads to first q
 * !&submit leads to:
 *   !correct a page with good pic
 *   !incorrect a page with bad pic and correct a
 * !&next-q leads to the next q!
 * !&final a page leads to end page:
 *  ! if pass good pic and words
 *   !if fail bad pic and words
 * !&restart leads to start page.
 * 
 * !&score updates when asnwer correct
 * !&currentQ updates when nextq clicked
 */