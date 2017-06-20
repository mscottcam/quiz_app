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
  currentQuestionIndex: 0,
  questions: [
    {text: 'this is question 1?',
      choices: ['choice1', 'choice2', 'choice3', 'choice4'],
      answer: 1
    },
    {text: 'this is question 2?',
      choices: ['choice1', 'choice2', 'choice3', 'choice4'],
      answer: 0
    },
    {text: 'this is question 3?',
      choices: ['choice1', 'choice2', 'choice3', 'choice4'],
      answer: 2
    },
    {text: 'this is question 4?',
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
  function viewQuestions(state) {
    // function changeState() {

    // }
    //   return state.views.intro = false;
      state.views.intro = false;
      state.views.question = true;
      //console.log('the intro is ' + state.views.intro);
      //console.log('the question is ' + state.views.question);
      rendersItems(appState, $('.question-form'));
    //renderFunction
  }

  function viewEnd(state) {
    //update state
    state.views.question = false;
    state.views.result = false;
    state.views.end = true;


    //render
    rendersItems(appState, $('.end'));
  }


  // correct or not function
function answerQuestion(state, answer) {
  //console.log('answerQuestions worked');
}

//                                                        STEP THREE ------ RENDER FUNCTIONS
//                                              renders the initial state (step one) and subsequent states

function rendersItems(state, element) {
  if(state.views.intro === true) {

  generateIntro(state, element);
  }
  else if(state.views.question === true) {
    $('.intro').addClass('hidden');
    $('.questions').removeClass('hidden');
    generateQuestions(state, element);
  } else if(state.views.result === true) {
    $('.questions').addClass('hidden');
    $('.results').removeClass('hidden');
    generateResults(state, element);
  } else {
    generateEnd(state, element);
  }
  //element.html(generateQuestions(state));
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
  }

//look at p tag to make sure it increments
  function generateQuestions(state, element) {
      //turns off next question button at end of questions
      let currentIndex = appState.currentQuestionIndex;
      currentIndex = parseInt(currentIndex, 10);
      if(currentIndex === appState.questions.length-1) {
      //turns on see how i did button and turns off next question
      $('.end-button').removeClass('hidden');
      $('.results-button').addClass('hidden');
      };


      let currentQuestion = state.questions[state.currentQuestionIndex].text;
      let currentChoices = state.questions[state.currentQuestionIndex].choices;
      let questionText = (`
        <fieldset class="question">
        <legend>Question</legend>
        <p>${currentQuestion}</p>
        <input type="radio" name="choice" id="choice0">
        <label for="choice0">${currentChoices[0]}</label>
        <input type="radio" name="choice" id="choice1">
        <label for="choice1">${currentChoices[1]}</label>
        <input type="radio" name="choice" id="choice2">
        <label for="choice2">${currentChoices[2]}</label>
        <input type="radio" name="choice" id="choice3">
        <label for="choice3">${currentChoices[3]}</label>
      </fieldset>
      <button type="submit">Submit</button>
        `)
      element.html(questionText);

      

      // function loopQuestions(state, currentQuestion, currentChoices, questionText) {
        
      //   for(let i = 0; i < state.questions.length; i++) {
      //     console.log(questionText);
      //   }
      // }
      //loopQuestions(state, currentQuestion, currentChoices, questionText);
    // $('.intro').addClass('hidden');
    // $('.questions').removeClass('hidden');
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

  function generateEnd(state, element) {
    element.html(`
      <h1>Final result</h1>
      <button class="start-over" type="submit">Start over</button>
      `);
    $('.questions').addClass('hidden');
    $('.results').addClass('hidden');
    $('.end').removeClass('hidden');
  }




//              STEP FOUR  --- EVENT LISTENERS
//             when specific event is activated goes to state mod in (step two)


function submitsForm(x) {
  //start button
  $('.start-button').on('click', function(event) {
    //alert('this works');
    //console.log(appState.views.question);
    viewQuestions(appState);
    // event.preventDefault();
    // viewQuestions(appState, question);
    // generateQuestions(appState, $('.questions'));
  });

// question submit button
  $('form.question-form').on('submit', function(event) {
    event.preventDefault();
    
    let answer = $("input[id='']:checked").val();

    appState.views.result = true;
    $('.results').removeClass('hidden');
    answerQuestion(appState, answer);//what is answer?
    //re render
  });


  // go to next question button click
  $('.results-button').click(function() {
    appState.currentQuestionIndex += 1;
    $('.results').addClass('hidden');
    rendersItems(appState, $('.question-form'));

    //
  });

  //button to go to final results from last question
  $('.end-button').click(function() {
    viewEnd(appState);
  });

  //restart button on final page
  console.log(x);
  
  $('.end').on('click', '.start-over', function(event) {
    console.log('you reached the end button');
    
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
  submitsForm('test string');

});


  // let questionCopy = $('.questions').clone()
  // questionCopy.find('legend').text('It works');
  // $('body').append(questionCopy);
