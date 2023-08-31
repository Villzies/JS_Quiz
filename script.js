const quizcontainer =  document.getElementById('quizcontainer');
const startbutton = document.getElementById('start');
const introtext = document.getElementById('intro')
const beginquiz = document.getElementById('quizlist');
const next = document.getElementById('next');
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');

const correctanswer = true;
const wronganswer = false;

let questionindex = 0;
let score = 0;

let count

//Quiz questions
const quizquestions = [
    {question: "True or False: == and === operators are the same. ",
      answers: {
        a: 'True',
        b: 'False',
      }
    },

    {question: "Which is a Javascript data type?",
      answers: {
        a: 'A: Boolean',
        b: 'B: Function',
      }
}
];


//Function for displaying questions and answer choices in the quiz
const displayquiz = function(){
question.innerHTML = quizquestions[questionindex].question;
choice1.innerHTML = quizquestions[questionindex].answers.a;
choice2.innerHTML = quizquestions[questionindex].answers.b;
};

//When the start button is clicked, the quiz is displayed, the 'next question' button appears, and the 'start' button is hidden
startbutton.addEventListener("click", function() {
 beginquiz.style.display="block";
 next.style.display="block";
 startbutton.style.display="none";
 introtext.style.display="none"
 displayquiz();
 console.log("Quiz started");
});

//Moves to the next question in the quiz when the 'Next Question' button is clicked. 
next.addEventListener("click", function(){
questionindex++;
displayquiz();
});

