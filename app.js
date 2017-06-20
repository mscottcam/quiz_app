// make html skeleton
// design state

  // figure out state layout
    // views -- intro page, questions, results page
    // order of questions

  // current score variable

  // current question variable

  // final score variable


//                                                                 STEP ONE --- DESIGN STATE 
const appState = {
  views:
  {
    intro: true,
    question: false,
    result: false,
    end: false
    },

  questions: [
    {question1: 'this is question 1?',
      choices: ['choice1', 'choice2', 'choice3', 'choice4'],
      answer: 1
    },
      // console.log
    {question2: 'this is question 2?',
      choices: ['choice1', 'choice2', 'choice3', 'choice4'],
      answer: 0
    },
    {question3: 'this is question 3?',
      choices: ['choice1', 'choice2', 'choice3', 'choice4'],
      answer: 2
    },
    {question4: 'this is question 4?',
      choices: ['choice1', 'choice2', 'choice3', 'choice4'],
      answer: 3
    },
  ]
  // score: 0, //user's score
  // currentQuestion: 0,//index number of question
  // correct: true or false
};



//                                                      STEP TWO --- STATE MOD FUNCTIONS
//                                    altered by user action. changes the state (step one) and calls render functions (step three)

  // changeView function
  function viewQuestions(state, item) {
    if (state.views.intro === true) {
      return state.views.intro = false;
    }
    if (state.views.item === false) {
      return state.views.item = true;
    }
  }

  // correct or not function


//                                                        STEP THREE ------ RENDER FUNCTIONS
//                                              renders the initial state (step one) and subsequent states

function rendersItems(state, element) {
  if(state.views.intro === true) {
  generateIntro(state, element);
  }
  else if(state.question === true) {
    generateQuestions(state, element);
  } else {
    generateResults(state, element);
  }
}

  //view toggle
    // question render fn
    // final page render
  function generateIntro(state, element) {
    element.html(`<h1>Quiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <button type="button" class="start-button">Start</button>`);
    $('.questions').addClass('hidden');
    $('.results').addClass('hidden');
    $('.end').addClass('hidden');
    so
  }

  function generateQuestions(state, element) {
    element.html(`<form action="/endpoint">
      <fieldset>
        <legend>Question</legend>
        <p>${state.questions[0]}</p>
        <input type="radio" name="choice" id="choice0">
        <label for="choice0">${state.questions[0].choices[0]}</label>
        <input type="radio" name="choice" id="choice1">
        <label for="choice1">${state.questions[0].choices[1]}</label>
        <input type="radio" name="choice" id="choice2">
        <label for="choice2">${state.questions[0].choices[2]}</label>
        <input type="radio" name="choice" id="choice3">
        <label for="choice3">${state.questions[0].choices[3]}</label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>`);
    $('.intro').addClass('hidden');
    $('.questions').toggleClass('hidden');
    // state.views.
  }

  function generateResults(state, element) {
    // element.html('template')
       let correctAnswer = function(state) {
         if (answer === choices[i]) {
            return true
          } else {
            return false
          };

        return function(correctAnswer, element) {
          if (correctAnswer === true) {
            // display 'correct!'
          }
        }
    }
  };




//                                                              STEP FOUR  --- EVENT LISTENERS
//                                                    when specific event is activated goes to state mod in (step two)


function submitsForm() {
  $('.start-button').on('click', function(event) {
    alert('this works');
    // event.preventDefault();
    // viewQuestions(appState, question);
    // generateQuestions(appState, $('.questions'));
  });
}
  // intro views
    // start button click
// $('.start-button').on('click', function(event) {
//   event.preventDefault();
//   generateQuestions(appState, $('.questions'));
//   alert('this works');
// });



  //questions
    //submit button
    //next button
    //radio selector click
  // $('.start').on('click', function(event) {
  //
  // });

  // results page
    //restart click
//                                                                  STEP FIVE --- THE DOM
//                                               runs render item functions (step three) and places function to listen for events(step four)

$(document).ready(function() {
  rendersItems(appState, $('.intro'));
  submitsForm();
});


  // let questionCopy = $('.questions').clone()
  // questionCopy.find('legend').text('It works');
  // $('body').append(questionCopy);
