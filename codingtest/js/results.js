import { grades } from './data.js'

// http://127.0.0.1:5500/results.html?score=7

const score = new URLSearchParams(location.search).get('score')
console.log(score)

const result = grades[score]

const scoreEl = document.querySelector('.result-score')
const lecture1El = document.querySelector('.lecture1')
const lecture2El = document.querySelector('.lecture2')

const sentence1El = document.querySelector('.sentence1')
const sentence2El = document.querySelector('.sentence2')
// const characterEl = document.querySelector('.character')
// const boxEls = document.querySelectorAll('.box')
// const jobEls = document.querySelectorAll('.job')
// const lectureEl = document.querySelector('.lecture')
// const lectureImgEl = document.querySelector('.lecture img')

scoreEl.innerHTML = result

if (score >= 8) {
    sentence1El.innerHTML = "뭐야 이것도 문제인가"
    sentence2El.innerHTML = "코딩 마스터셨군요! 😎"
    lecture1El.innerHTML = '<div><a href="https://spartacodingclub.kr/online/spring" target="_blank"><img src="./images/result_lecture1.png"></a></div>'
    lecture2El.innerHTML = '<div><a href="https://spartacodingclub.kr/online/ml_basic" target="_blank"><img src="./images/result_lecture2.png"></a></div>'
} else if (score >= 4) {
    sentence1El.innerHTML = "나 좀 알 것 같아"
    sentence2El.innerHTML = "코딩 좀 아시네요? 😏"
    lecture1El.innerHTML = '<div><a href="https://spartacodingclub.kr/online/web" target="_blank"><img src="./images/result_lecture3.png"></a></div>'
    lecture2El.innerHTML = '<div><a href="https://spartacodingclub.kr/online/app" target="_blank"><img src="./images/result_lecture4.png"></a></div>'
} else {
    sentence1El.innerHTML = "코딩이 뭐야...?"
    sentence2El.innerHTML = "당신은 진정한 코알못 😵‍💫"
    lecture1El.innerHTML = '<div><a href="https://spartacodingclub.kr/online/coding101" target="_blank"><img src="./images/result_lecture5.png"></a></div>'
    lecture2El.innerHTML = '<div><a href="https://spartacodingclub.kr/online/special/bucketlist" target="_blank"><img src="./images/result_lecture6.png"></a></div>'
}

// characterEl.src = result.character

// boxEls.forEach(function (boxEl, index) {
//     boxEl.innerHTML = result.results[index]
// })

// jobEls.forEach(function (jobEl, index) {
//     jobEl.innerHTML = result.jobs[index]
// })

// lectureEl.href = result.lectureUrl
// lectureImgEl.src = result.lectureImg

