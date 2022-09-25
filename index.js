var readlineSync = require("readline-sync");

var score = 0;
// data of high score using array 
var highScore = [{
  name: "Moin",
  score: 5
}, {
  name: "Nobody",
  score: 4
}];

var userName = readlineSync.question("May I have your name? ");
console.log("Hey! Welcome " + userName);

// uses function take output
// input
 function play(intro, answer) {
   var userAnswer = readlineSync.question(intro);
   
// processing part
   
   if (userAnswer.toUpperCase() == answer.toUpperCase()) {
     console.log("Its Good! ")
   }
   else {
     console.log("Okay! No Problem")
   }
 }
// outpit part

 play("Do You know Moin? ", "Yes");

// object based array access
//  in this object part
// questions = {    
//    question: "Where do i live?  ",
//    answer: "Patna" }
//  [in this bracket each of part array]

 var questions = [{
   question: "Where do i live?  ",
   answer: "Patna"
  
 }, {
   question: "Am I greater than 25? ",
   answer: "No",
 }, {
   question: "Am I web-developer? ",
   answer: "Yes"
 }, {
   question: "Am i good in coding? ",
   answer: "No"
 }, {
   question: "Am I good person? ",
   answer: "Yes"
 }];
// write function calling array's object
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("right!");
    score++
    
  }
  else {
    console.log("wrong!");
    score=score-0;
  }
  console.log("your current score is: "+ score);
  console.log("_______");
}
// access loop using call to functionquiz
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    // calling function quiz then processing this code using call 
    // to function quiz
    quiz(currentQuestion.question, currentQuestion.answer);
    console.log("your total score is: "+ score);
    console.log("..........");
  }

console.log("Thanks for giving your valuable time.", " Your Score is: "+ score +"\n");
console.log("Top score:");

for (let i = 0; i<highScore.length; i++) {
  var userScore = highScore[i];
  console.log(userScore.name, userScore.score);
} 

console.log("If you get more than this score then\n" + "please give me your screenshot!","\n");

console.log("Thanks & regard\n","Moin");






