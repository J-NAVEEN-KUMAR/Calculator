const display = document.getElementById('display');
const clear = document.getElementById('clear');

clear.addEventListener('click',()=>{
  display.value = "";
})


var btns = document.querySelectorAll('.expression');
btns.forEach(element => {
  element.addEventListener('click', () => {
    display.value += element.value;
  })
});


const evaluate = document.getElementById('evaluate');
evaluate.addEventListener('click', () => {
  var output = eval(display.value);
  display.value = output;
})
