import { questions } from './data.js' 

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')
const choice3El = document.querySelector('.choice3')

let currentNumber = 0
let score = 0

function renderQuestion() {
    const question = questions[currentNumber]
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
    choice3El.innerHTML = question.choices[2].text
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {

    const question = questions[currentNumber]
    
    if (question.choices[choiceNumber].value == true) {
        score = score + 1
    }

    if(currentNumber === questions.length - 1) {
        showResultPage()
        return
    }

    currentNumber = currentNumber + 1
    renderQuestion()
}

function showResultPage() {
    location.href = '/results.html?score=' + score  // 쿼리스트링
}

choice1El.addEventListener('click', function() {   
    nextQuestion(0)
})
choice2El.addEventListener('click', function() {
    nextQuestion(1)
})
choice3El.addEventListener('click', function() {
    nextQuestion(2)
})

renderQuestion()