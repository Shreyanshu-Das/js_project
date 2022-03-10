const quizQ = [{
        question: "Q1: How many days are there in a year?",
        a: "322",
        b: "365",
        c: "349",
        d: "319",
        ans: "ans2"
    },
    {
        question: "Q2: How many colors are there in a rainbow?",
        a: "7",
        b: "3",
        c: "9",
        d: "14",
        ans: "ans1"
    },
    {
        question: "Q3: What are ears for?",
        a: "Eating",
        b: "Touching",
        c: "Listening",
        d: "Visualising",
        ans: "ans3"
    },
    {
        question: "Q4: What is 5+3?",
        a: "4",
        b: "8",
        c: "6",
        d: "9",
        ans: "ans2"
    },
    {
        question: "Q5: What comes after Friday?",
        a: "Sunday",
        b: "Tuesday",
        c: "Wednesday",
        d: "Saturday",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizQ[questionCount]
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsEle) => {
        if (curAnsEle.checked) {
            answer = curAnsEle.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsEle) => curAnsEle.checked = false);
}

function scoreA(a) {
    let rem;
    if (a >= 4) {
        rem = 'YES';
    } else if (a === 3 || a === 2) {
        rem = 'MAYBE';
    } else {
        rem = 'NO';
    }
    return rem;
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer === quizQ[questionCount].ans) {
        score++;
    }
    questionCount++;
    deselectAll();

    if (questionCount < quizQ.length) {
        loadQuestion();
        console.log(scoreA(score));
    } else {

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizQ.length} 🎉</h3>
        <h3> Remarks : ${scoreA(score)}</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');

    }
});