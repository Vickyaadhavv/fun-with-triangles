const sides = document.querySelectorAll('.side-input');
const hypobtn  =document.querySelector('#hypotenuse-btn');
const outpute1 = document.querySelector('#output');

function calculatesumofsquare(a,b){
    const sumofsquare = a*a + b*b;
    return sumofsquare
}

function calculatehypotenus (){
const sumofsquare =calculatesumofsquare(Number(sides[0].value),Number(sides[1].value))
const lenthofhypo = Math.sqrt(sumofsquare)
outpute1.innerText = "The length of hypotenuse is"  +
  lenthofhypo
}

hypobtn.addEventListener("click",calculatehypotenus)