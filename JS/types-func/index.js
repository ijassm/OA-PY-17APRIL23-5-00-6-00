// function declaration

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(4, 5));

// function expression
// function acts as a value

// anonymous function
// const a = function () {
//   console.log("a called");
// };

// named function

// const b = function func() {
//   console.log("a called");
// };

// b();

// arrow function

// const sum = (a, b) => a + b;

// console.log(sum(2, 5));

// const c = () => {
//   console.log("c is called");
// };

// c();

// IIFE(Immediately Invoked Function Expression)

// (function n() {
//   console.log("IIFE");
// })();

const l1 = [1, 5, 2, 3, 0];
const l2 = [4, 6, 1, 2];

// function sum(a, b) {
//   console.log(a + b);
// }

// function sum(...rest) {
//   let output = 0;
//   for (const i of rest) {
//     // output = output + i;
//     output += i;
//   }
//   return output;
// }

// function product(...rest) {
//   let output = 1;
//   for (const i of rest) {
//     // output = output + i;
//     if (i !== 0) output *= i;
//   }
//   return output;
// }

// console.log(sum(4, 5));
// console.log(sum(4, 5, 2));
// console.log(sum(4, 5, 6, 8));
// console.log("\n");
// console.log(product(4, 5, 0));
// console.log(product(4, 5, 2));
// console.log(product(4, 5, 6, 8));

function hof(l, logicFunc, initialValue = 0) {
  let output = initialValue;
  for (const i of l) {
    // output = logicFunc(output, i);
    if (i !== 0) output = logicFunc(output, i);
  }
  return output;
}

// function sum(output, i) {
//   return output + i;
// }

const s = hof(l1, (o, i) => o + i);
const m = hof(l1, (o, i) => o * i, 1);

console.log(s);
console.log(m);
