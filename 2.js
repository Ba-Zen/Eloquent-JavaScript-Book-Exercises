//Challenges
/////////////////////// "Fizz Buzz"
/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed 
  to weed out a significant percentage of programmer candidates. 
  So if you solved it, your labor market value just went up.)
*/

for (let num = 1; num <= 100; num++) {
  if (num % 5 == 0 && num % 3 == 0) {
    console.log('FizzBuzz');
    continue;
  }
  if (num % 3 == 0) {
    console.log('Fizz');
    continue;
  }
  if (num % 5 == 0) {
    console.log('Buzz');
    continue;
  }
  console.log(num);
}

/*
Looping a Triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let hash = '';
for (let num = 0; num < 7; num++) {
  hash += '#';
  console.log(hash);
}

// Basic Example Exercises

// let theNumber = Number(prompt('Pick a number'));
// if (!Number.isNaN(theNumber)) {
//   console.log('Your number is the square root of ' + theNumber * theNumber);
// }

// logs evens of 12
let number = 0;
while (number <= 12) {
  //console.log(number);
  number = number + 2;
}

// calculates 2 to the 10th power
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
//console.log(result, counter);

// indentation for readability is major
// if (false != true) {
//   console.log('That makes sense.');
//   if (1 < 2) {
//     console.log('No surprise there.');
//   }
// }

// many loops follow same pattern
// init counter    while true    updates loop after each iteration
for (let number = 0; number <= 12; number = number + 2) {
  //console.log(number);
}

result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
//console.log(result);

// break out a loop
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    //console.log(current);
    break;
  }
}

// switch

// switch (prompt("What's the weather like?")) {
//   case 'rainy':
//     console.log('Bring an umbrella');
//     break;
//   case 'sunny':
//     console.log('dress light');
//     break;
//   case 'snow':
//     console.log('burr, layer up!');
//     break;
//   default:
//     console.log('Options are: "rainy", "sunny", & "snow"');
// }
