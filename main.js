const display = document.getElementById('display');
const clear = document.getElementById('clear');
//clearing the input
clear.addEventListener('click',()=>{
  display.value = "";
})

//Giving the input to display
var btns = document.querySelectorAll('.expression');
btns.forEach(element => {
  element.addEventListener('click', () => {
    display.value += element.value;
  })
});

//Output using eval method
const evaluate = document.getElementById('evaluate');
evaluate.addEventListener('click', () => {
  var check = /[^a-z][0-9*-+/]*$/gi, exp = display.value;
  if(check.test(exp)) {
    var output = eval(display.value);
    display.value = output;
  }
  else {
    alert('Please Enter Valid Expression!');
  }
})
