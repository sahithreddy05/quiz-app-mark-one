var readlineSync = require('readline-sync');

var score = 0;

var name = readlineSync.question("what is your name ?");

console.log("Welcome " + name + " to quiz about me ?");

var highscore = [
  {
    name : "sahith",
    score:10,
  },
  {
    name:"sagar",
    score:9,
  }
]
function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("right");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score",score);
  console.log("------");
}

var questions = [{
  question:"Where do i stay ? ",
  answer: "miyapur"
},{
  question:"which city do i stay ? ",
  answer: "hyderabad"
},{
  question:"what do i do mostly all the time ? ",
  answer: "trying to figure out my life"
},{
  question:"Where do i eat outside ? ",
  answer: "megduth biryani"
},{
  question:"what i eat outside  ? ",
  answer: "biryani"
},{
  question:"my pet name ? ",
  answer:"bunty"
},{
  question:"my role model ? ",
  answer:"elon musk"
},{
  question:"my favorite tollywood hero ? ",
  answer: "prabhas"
},{
  question:"last watched movie ? ",
  answer: "last night at soho"
},{
  question:"favorite genre in music ? ",
  answer: "romantic, breakup feel types"
}];

for(var i=0;i<questions.length;i++) {
  var  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
if(score > 0 ){
console.log("Yayy 🥳🥳 You scored ",score);}
else console.log("Better luck next time buddy !");
console.log(" high scores",highscore);