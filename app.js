/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What year did the Titanic sink?',
      answers: [
        '1962',
        '1831',
        '1925',
        '1912'
      ],
      correctAnswer: '1912'
    },
    {
      question: 'What was Netflix’s net worth in 2019?',
      answers: [
        '$588 million',
        '$783 million',
        '$125 billion',
        '$16.3 billion', 
      ],
      correctAnswer: '$125 billion'
    }, 
    {
      question: 'In the first ever Power Rangers movie released in 1995, what were the colors of the Rangers?',
      answers: [
        'White, Black, Blue, Red, Green, Purple',
        'Black, Red, Green, Orange, Pink, Yellow', 
        'Red, White, Blue, Yellow, Silver, Green',
        'White, Black, Blue, Yellow, Pink, Red', 
      ], 
      correctAnswer: 'White, Black, Blue, Yellow, Pink, Red'
  }, 
  {
    question: 'What streaming platforms and/or entertainment franchises are on Disney Plus?',
    answers: [
      'Disney and Hulu',
      'Disney, Marvel, Pixar, and Hulu', 
      'Disney, Pixar, and Star Wars',
      'None of the above', 
    ], 
    correctAnswer: 'None of the above'
},
{
  question: 'Who tripped on stage when receiving the Oscars Award in 2019?',
  answers: [
    'Lady Gaga',
    'Jennifer Lawrence', 
    'Emma Stone',
    'Jason DeRulo', 
  ], 
  correctAnswer: 'Jennifer Lawrence'
},


  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

const start = () => {
  $('header').html(
    `<h1>Test Your Entertainment Knowledge!</h1>
    <button class="start">Start</button>`
    );
  handleStart();
  
}

const handleStart = () => {
  $('header').off().on("click", ".start", (e) => {
  $('header').hide();
  $('main').show();
    addScoreboard();
    updateScoreboard();
    displayQuestion()
    answerQuestion()
    handleNext()
    handleAnswerClicks();
  })

}

const displayQuestion = () => {
  let question = store.questions[store.questionNumber].question;
  let answers = store.questions[store.questionNumber].answers;
  const html = `
  <h1>${question}</h1>
  <form>
    <input required type="radio" id="question1" name="question" value="${answers[0]}">
    <label for="question1">${answers[0]}</label><br>
    <input required type="radio" id="question2" name="question" value="${answers[1]}">
    <label for="question2">${answers[1]}</label><br>
    <input required type="radio" id="question3" name="question" value="${answers[2]}">
    <label for="question3">${answers[2]}</label><br>
    <input required type="radio" id="question4" name="question" value="${answers[3]}">
    <label for="question4">${answers[3]}</label><br>
    <button type="submit" class="next">Next</button>
  </form>
  `
  $('main').html(html)
}

const handleNext = () => {
  $('main').off().on("submit", "form", () =>{
    store.questionNumber+=1
    if(store.questionNumber === store.questions.length){
        displayFinal();
        handleRestart();
    }else {
      updateScoreboard();
      displayQuestion();
      answerQuestion();
    }
  })
}

const displayFinal = () => {
  $('.scoreboard').remove();
  const final = `
  <h1>${store.score}/${store.questions.length}</h1>
  <button class="restart">Restart Quiz</button>
  `
  $('main').html(final)
}

const restartQuiz = () => {
  $('main').hide();
  $('header').show();

  store.questionNumber = 0;
  store.score = 0;
  start();
}

const handleRestart = () => {
  $('main').on("click", ".restart", () => {
    restartQuiz();
  })
}

const answerQuestion = () => {
  let currentQuestion = store.questions[store.questionNumber];
  $('form').on('click', 'input', (e) => {
    if($(e.currentTarget).val() === currentQuestion.correctAnswer) {
      $(e.currentTarget).next().after('<p class="correct">Correct!</p>')
      store.score++
    }else {
        $(e.currentTarget).next().after(`<p class="incorrect">Incorrect - ${currentQuestion.correctAnswer}</p>`)
    }
    $('input[type="radio"]').attr('disabled', true);
    updateScoreboard();
  })
}

const updateScoreboard = () => {
  const html = `
    <p>Score: ${store.score}</p>
    <p>${store.questionNumber+1}/${store.questions.length}</p>
  `
  $('.scoreboard').html(html);
}

const addScoreboard = () => {
  $('main').after(`<section class="scoreboard"></section>`)
}

const handleAnswerClicks = () => {
  $('form').on('keypress', e => {
    const targetButton = $(e.currentTarget);
    const otherButtons = $('radio').not(targetButton);
    const pressedButton = $(targetButton).attr('aria-pressed') === 'true';
    otherButtons.removeClass('button-on').attr('aria-pressed', false);
    targetButton.toggleClass('button-on').attr('aria-pressed', !pressedButton);
    
  });
}

$(handleAnswerClicks);

$(start)



/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)