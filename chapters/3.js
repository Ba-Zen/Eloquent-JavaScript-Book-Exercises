//Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
  return Math.min(a, b);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*
Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) 
and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. 
Why? Can you think of a way to fix this?
*/

function isEven(num) {
  if (num < 0) return undefined;
  if (num % 2 == 0) return true;
  else return false;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
