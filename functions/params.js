/*Practicing multiple parameters and string interpolation.*/

function greet(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greet("Duncan", "evening"));

/*Basic multiple-argument function.*/
function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(5, 10, 15)); // 30
console.log(sum(5, 10)); // 15

/*Using params to return largest number.*/
function max(firstNum, secondNum) {
  if (firstNum > secondNum) {
    return firstNum;
  } else {
    return secondNum;
  }
}
console.log(max(10, 20)); // 20
