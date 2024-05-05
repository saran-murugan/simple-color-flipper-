//an array of colors
const colors = ["Steelblue","#A06CD5","#6CD4FF","#CCC9A1","Chocolate","rgb(1, 167, 194)"] 
//html document selectors
const contents = document.querySelector("#section");
const button = document.querySelector(".btn");
const colorId = document.querySelector(".Color__span");
button.addEventListener("click",function(){
  const randomNumber = getRandomNumber();//func call
  contents.style.backgroundColor = colors[randomNumber];
  colorId.textContent = colors[randomNumber];
})
//func declaration
function getRandomNumber(){
  return Math.floor(Math.random()*colors.length)
}
