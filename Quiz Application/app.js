var quizData =[
    {
        question: "Which is a framework of Javascript",
        a: ".net",
        b: "django",
        c: "react",
        d: "flask",
        correct: "c"

    },
    {
        question: "Which is a framework of Javascript1",
        a: ".net",
        b: "django",
        c: "react",
        d: "flask",
        correct: "c"

    },
    {
        question: "Which is a framework of Javascript2",
        a: ".net",
        b: "django",
        c: "react",
        d: "flask",
        correct: "c"
        
    },
    {
        question: "Which is a framework of Javascript3",
        a: ".net",
        b: "django",
        c: "react",
        d: "flask",
        correct: "c"

    },
    {
        question: "Which is a framework of Javascript4",
        a: ".net",
        b: "django",
        c: "react",
        d: "flask",
        correct: "c"

    }
];

var quiz = document.getElementById('quiz');
var answer = document.querySelectorAll('.answer');
var question = document.getElementById('question');
var option_a = document.getElementById('a_value');
var option_b = document.getElementById('b_value');
var option_c = document.getElementById('c_value');
var option_d = document.getElementById('d_value');

var submitbtn = document.getElementById('submit');
var curr_ques = 0;
var quizScore = 0;

loadQuiz();

function loadQuiz()
{
    deselect();
    
    question.innerHTML = quizData[curr_ques].question;
    option_a.innerText = (quizData[curr_ques].a);
    option_b.innerText = quizData[curr_ques].b;
    option_c.innerText = quizData[curr_ques].c;
    option_d.innerText = quizData[curr_ques].d;

}

function deselect()
{
    answer.forEach(ans => ans.checked=false);
}

submitbtn.addEventListener('click', ()=>{
    var selected;
    answer.forEach(ans =>{
        if(ans.checked == true)
        {
            selected=ans.id;
        }
    });
    if(selected==quizData[curr_ques].correct)
    {
        quizScore+=1;
    }
    curr_ques+=1;
    if(curr_ques==quizData.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1>Score =  ${quizScore} / ${quizData.length}</h1>`

    }
    else
    {
        loadQuiz();
   }
    

})

