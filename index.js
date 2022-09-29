const inputs = document.querySelectorAll('.angle-input');
const istrianglebtn = document.querySelector('#is-triangle-btn');
const outpute1 = document.querySelector('#output');

function calculate(angle1,angle2,angle3){
  const sumofangle=angle1+angle2+angle3;
  //console.log(sumofangle)
  return sumofangle
}


function istriangle(){
//console.log("this is triangle");
const sumofangle = calculate(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
if (sumofangle === 180){
    outpute1.innerText ="yay,the angles form a triangle"
}else{
    outpute1.innerText ="oh oh! the angles didn't form a triangle"
}
 
}
istrianglebtn.addEventListener('click',istriangle)