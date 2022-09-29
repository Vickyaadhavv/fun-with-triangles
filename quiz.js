const quizform =document.querySelector('.quiz-form');
const submitans =document.querySelector('#submit-answer-btn');
const outpule1 =document.querySelector('#output')

const correctAnswer =[ "90°",
"right angled",
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"a + b + c",
"no",
"45°",];

function calculatescore(){
    let score=0;
    let index=0;
    const formReasult = new FormData(quizform);
    for(let value of formReasult.values()){
        if(value === correctAnswer[index]){
            score =score + 1
        }
        index = index + 1
    }
   outpule1.innerText = "your score is" + score
}
submitans.addEventListener("click", calculatescore)