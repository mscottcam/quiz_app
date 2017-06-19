// make html skeleton
// design state

  // figure out state layout
    // views -- intro page, questions, results page
    // order of questions

  // current score variable

  // current question variable

  // final score variable

const appState = {
  views: ['intro'],//maybe object for question? result
  question: 1,//array of objects
  score: 0, //user's score
  currentQuestion: 0,//index number of question
  // a correct result maybe?: true or false
}




// write state mod functions

  // changeView function

  // correct or not function


// write render function

function rendersItems(state, element) {
  let introView = state.views.map(function(view) {
    return (`
      <h1>test</h1>
      `)
  });
  console.log(introView);
  element.html(introView);

}

  //view toggle
    // question render fn
    // final page render



// write event listeners

  // intro views
    //start button click

  //questions
    //submit button
    //next button
    //radio selector click

  // results page
    //restart click


$(document).ready(function() {
  rendersItems(appState, $('.quiz'));



});