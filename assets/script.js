// div for high scores

// div for the timer
//calls timer by class
var timeEl = document.querySelector(".time");
//calls timer by id
var timerEl = document.getElementById("timer");
var secondsLeft = 1000;
function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Time left till end of quiz.";

        if(secondsLeft == 0){
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)
}

function sendMessage(){
    timeEl.textContent = "";
}
setTime();

// wrapper div to hold rest of the content on the screen

// div to start
var startbutton = document.querySelector(".Start-Button");
var isDone = false;
function startgame(){
    isDone = false;
    timecount = 1000;
    startbutton.disabled = true;
    setTime()
}
startbutton.addEventListener("click", startgame);
// div for the questions with answers
var myQuestions = [
{
    question: "What is the first planet?",
    answers: {
        a: 'Mars',
        b: 'Mercury',
        c: 'Neptune',
    },
    correctAnswer: 'b'
},
{
    question: "What is the planet with rings?",
    answers:{
    a: 'Earth',
    b: 'Venus',
    c: 'Saturn',
    },
    correctAnswer: 'c'
},
{
    question: "How many planets are in our solar system?",
    answers:{
        a: '9',
        b: '8',
        c: '11',
    },
    correctAnswer: 'b'
},
{
    question: "What Planet is most like Earth?",
    answer:{
        a:'Venus',
        b:'Jupiter',
        c:'Mars',
    },
    correctAnswer: 'a'
},
{
    question: "What is the biggest Planet?",
    answer:{
        a: 'Mercury',
        b: 'Uranus',
        c: 'Jupiter',
    },
    correctAnswer: 'c'
}
];
// lines 87-103 were for a radio button that did not work.  commented out for later. 
//function showQuestions(questions,quizContainer){
   // var output = [];
   // var answers; 
    //for (var i=0; i<questions.length; i++){
       // answers = [];
        //for(letter in questions[i].answers){
           // answers.push(
              //'<label>' + '<input type="radio" name="question'+i+'" value="'+letter+'">' + letter + ':' + questions[i].answers[letter] + '</label>'
           // );
        //}
   //}
//}
//output.push(
    //'<div class="questions">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'

//);
//showQuestions(questions,quizContainer);


// will need an event listener 
// div for end of screen

// div to display feedback

