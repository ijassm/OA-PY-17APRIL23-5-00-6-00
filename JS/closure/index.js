// function outerFunc() {
//   let a = 10;
//   a = 30;
//   function innerfunc() {
//     return a;
//   }

//   innerfunc();
// }

// let func = outerFunc();

// console.log(func());

// outerFunc();

// function makeSizer(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }

// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);

// function outerFunc(c) {
//   let count = 0;

//   return function () {
//     count += c;
//     return count;
//   };
// }

// const incrementByone = outerFunc(1);
// const incrementByFive = outerFunc(5);

// console.log(incrementByone());
// let count = 545645;
// console.log(incrementByone());
// console.log(incrementByone());
// console.log(incrementByFive());
// console.log(incrementByFive());

// const counter = (function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: () => {
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter);

// counter.increment();
// counter.increment();
// counter.decrement();
// counter.increment();
// console.log(counter.value());

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// function sum(a) {
//   return (b) => (c) => a + b + c;
// }

// console.log(sum(2)(3)(5));

// sum(1)(2)(5)(6)(8)();
// sum(1)(2)(5)(6)();
// sum(1)(2)(5)();
// sum(1)(2)();

function sum(a) {
  return function (b) {
    if (b) {
      sum(a + b);
    } else {
      return a;
    }
  };
}

// function (params) {

// }

function sum(a) {
  return (b) => (b ? sum(a + b) : a);
}

console.log(sum(3)(2)(3)(765)(23)(5)());
console.log(sum(3)(2)(3)(5)());
console.log(sum(3)(5)());
