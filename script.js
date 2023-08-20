const quizcontainer =  document.getElementById('quizcontainer');
const startbutton = document.getElementById('start');
const beginquiz = document.getElementById('quizlist');
const next = document.getElementById('next');
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
let questionindex = 0;

const quizquestions = [
    {question: "Do you like pancakes?",
      answers: {
        a: 'Yes',
        b: 'No',
      }
    },

    {question: "Do you like waffles?",
      answers: {
        a: 'Yes',
        b: 'No',
      }
}
];

const displayquiz = function(){
question.innerHTML = quizquestions[questionindex].question;
choice1.innerHTML = quizquestions[questionindex].answers.a;
choice2.innerHTML = quizquestions[questionindex].answers.b;
};

startbutton.addEventListener("click", function() {
 beginquiz.style.display="block";
 next.style.display="block";
 startbutton.style.display="none";
 displayquiz();
 console.log("hello world");
});

next.addEventListener("click", function(){
questionindex++;
displayquiz();
});