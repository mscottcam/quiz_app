// make html skeleton
// design state

  // figure out state layout
    // views -- intro page, questions, results page
    // order of questions

  // current score variable

  // current question variable

  // final score variable

const appState = {
  views:
  {
    intro: true,
    question: false,
    result: false,
    end: false
    },

  questions: [
    {question: 'this is question 1?',
      choices: ["choice1", "choice2", "choice3"],
      answer: this.choices[1]

      }}
      console.log
    {question: 
      choices: ['choice1', 'choice2', 'choice3']},
      answer: choices[]},
  ]
  score: 0, //user's score
  currentQuestion: 0,//index number of question
  correct: true or false
}



// write state mod functions

  // changeView function

  // correct or not function


// write render function

function rendersItems(state, element) {
  if(state.intro === true) {
  generateIntro(element);
  } 
}

  //view toggle
    // question render fn
    // final page render
  function generateIntro(state, element) {
    $('.questions').addClass('hidden');
    $('.results').addClass('hidden');
    $('.end').addClass('hidden');
  }

  function generateQuestions(state, element) {
    $('.intro').addClass('hidden');
    $('.questions').toggleClass('hidden');
    state.views.
  }



// write event listeners

  // intro views
    //start button click
$('.start-button').on('click', function() {

});



  //questions
    //submit button
    //next button
    //radio selector click
  $('.start').on('click', function(event) {

  })

  // results page
    //restart click


$(document).ready(function() {
  rendersItems(appState, $('.intro'));



  // let questionCopy = $('.questions').clone()
  // questionCopy.find('legend').text('It works');
  // $('body').append(questionCopy);


});
