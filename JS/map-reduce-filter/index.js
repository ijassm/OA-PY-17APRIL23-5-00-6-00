Array.prototype.myMap = function (logicFunc) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logicFunc(this[i], i, this));
  }
  return output;
};

const array = [2, 4, 5, 6, 7];
const arr = [5, 3, 3, 6, 2];
// const double = [];
// const triple = [];
// const quadruple = [];

// for (let i = 0; i < array.length; i++) {
//   double.push(array[i] * 2);
// }

// for (let i = 0; i < array.length; i++) {
//   triple.push(array[i] * 3);
// }

// for (let i = 0; i < array.length; i++) {
//   quadruple.push(array[i] * 4);
// }

// console.log(double);
// console.log(triple);
// console.log(quadruple);

// function mymap(array, logicFunc) {
//   const output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(logicFunc(array[i], i, array));
//   }
//   return output;
// }

// function double(e, i) {
//   return e * 2;
// }

// function triple(e, i) {
//   return e * 3;
// }

// function quadruple(e, i) {
//   return e * 4;
// }

// const d1 = mymap(array, (e) => e * 2);
// const t1 = mymap(array, (e) => e * 3);
// const q1 = mymap(array, (e) => e * 4);

const d1 = array.myMap((e) => e * 2);
const t1 = array.myMap((e) => e * 3);
const q1 = array.myMap((e) => e * 4);

const d2 = array.map((e) => e * 2);
const t2 = array.map((e) => e * 3);
const q2 = array.map((e) => e * 4);

console.log(d1);
console.log(t1);
console.log(q1);
console.log("");
console.log(d2);
console.log(t2);
console.log(q2);

// const a = {};

// a.name = "jfhg";

// console.log(a);

// console.log(array.myMap());
// console.log(arr.myMap());
// console.log(arr.myMap);

// console.log(Array.prototype.myMap(arr, (e) => e * 2));
