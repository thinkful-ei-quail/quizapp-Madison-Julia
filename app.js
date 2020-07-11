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
  $('header h1').append('<button class="start">Start</button>');
  handleStart();
  
}

const handleStart = () => {
  $('header').on("click", ".start", (e) => {
  $('header').hide();
  $('main').show();
    displayQuestion()
    handleNext()
  })

}

const displayQuestion = () => {
  console.log(store.questions[0]);
  const html = `
  <h1>${store.questions[store.questionNumber].question}</h1>
  <button class="next">Next</button>
  `
  $('main').html(html)
}

const handleNext = () => {
  $('main').on("click", ".next", () =>{
    store.questionNumber+=1
    console.log("click");
    if(store.questionNumber === store.questions.length){
        displayFinal();
        handleRestart();
    }else {
      displayQuestion();
      
    }
  })
}

const displayFinal = () => {
  const final = `
  <h1>final</h1>
  <button class="restart">Restart Quiz</button>
  `
  $('main').html(final)
}

const restartQuiz = () => {
  $('main').hide();
  $('header').show();
  store.questionNumber = 0;
  start();
}

const handleRestart = () => {
  $('main').on("click", ".restart", () => {
    restartQuiz();
  })
}

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