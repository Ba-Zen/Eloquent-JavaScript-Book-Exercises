// Exercise 1
function range(start, end) {
  let nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

console.log(range(1, 10, 2));

// Exercise 1b
function sum(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == undefined || NaN || null) {
      return total;
    }
    total += arr[i];
  }
}
console.log(sum(range(1, 10)));

// Ex 2
function reverseArray(arr) {
  let nums = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    nums.push(arr.pop());
  }
  return nums;
}
console.log(reverseArray(['A', 'B', 'C']));

// Chapter Notes
let nums = { x: 0, y: 0, z: 2 };
//console.log(Object.keys(nums));
// → ["x", "y", "z"]

Object.assign(nums, { a: 1, b: 2, c: 0 });
//console.log(nums);

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

//console.log(object1 == object2);
// → true
//console.log(object1 == object3);
// → false
//console.log(object1, object2, object3);

const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
//console.log(score);

let journal = [];

// benefit of first addEntry function style is it can
// be called anywhere in code
// basically flexible, advantage: code like a story

// function addEntry(events, squirrel) {
//   journal.push({ events, squirrel });
// }
// addEntry = function(events, squirrel) {
//   journal.push({ events, squirrel });
// };
const addEntry = (events, squirrel) => {
  journal.push({ events, squirrel });
};

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(
  ['work', 'ice cream', 'lasagna', 'touched tree', 'brushed teeth'],
  false
);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

//console.log(journal);

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

//console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

//console.log(journalEvents(journal));

// for (let event of journalEvents(journal)) {
//   console.log(event + ':', phi(tableFor(event, journal)));
// }
for (let event of journalEvents(journal)) {
  let correlation = phi(tableFor(event, journal));
  if (correlation > 0.1 || correlation < -0.1) {
    //console.log(event + ':', correlation);
  }
}

for (let entry of journal) {
  if (
    entry.events.includes('peanuts') &&
    !entry.events.includes('brushed teeth')
  ) {
    entry.events.push('peanut teeth');
  }
}
//console.log(phi(tableFor('peanut teeth', journal)));

let todoList = [];
function remember(task) {
  todoList.push(task);
}
remember('mow lawn');
function getTask() {
  return todoList.shift();
}
//console.log(getTask());
function rememberUrgently(task) {
  todoList.unshift(task);
}
rememberUrgently('buy milk');
rememberUrgently('practice JavaScript');
//console.log(rememberUrgently());
//console.log(todoList);

// console.log([1, 2, 3, 2, 1].indexOf(2));
// console.log([1, 2, 3, 2, 1].lastIndexOf(2));

//console.log(' hello    \n  '.trim());
// => "hello"

//console.log(String(7).padStart(3, '0'));
// => 007
//console.log(String(7).padEnd(3, '0'));
// => 700

//console.log('LA'.repeat(3));
// LALALA

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
//console.log(max(9, 1, 4, 6, 7));
let numbers = [5, 7, 2, 8, 12];
//console.log(max(100, ...numbers, 6));
