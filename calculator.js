function calculate(){
  let expression = document.getElementById("input").value;
  let result = eval(expression);
  document.getElementById("input").value = result;
}

function EnterValue(a){
  let expression = document.getElementById("input").value;
  if (expression === "0"){
    let setExpression = a;
    document.getElementById("input").value = setExpression;
  }else{
    let setExpression = expression + a;
    document.getElementById("input").value = setExpression;
  }
}

function clearInput(){
  value = "0";
  document.getElementById("input").value = value;
}

function clearLastChar(){
  let expression = document.getElementById("input").value;
  updated = expression.slice(0,((expression.length)-1));
  if(updated === ""){
    updated = "0"
    document.getElementById("input").value = updated;
  }else{
    document.getElementById("input").value = updated;
  }
}

// document.addEventListener("keyup", function(event) {
//   if (event.key === "Enter") {
//     calculate();
//   }
// });

// const button = document.getElementById("button");
// button.addEventListener('keyup', function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//   }
// });