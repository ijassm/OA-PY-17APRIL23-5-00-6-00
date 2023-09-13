Array.prototype.myMap = function (logicFunc) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logicFunc(this[i], i, this));
  }
  return output;
};

Array.prototype.myFilter = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) output.push(this[i]);
  }
  return output;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue ?? this[0];
  if (initialValue) {
    for (let i = 0; i < this.length; i++) {
      acc = cb(acc, this[i], i, this);
    }
  } else {
    for (let i = 1; i < this.length; i++) {
      acc = cb(acc, this[i], i, this);
    }
  }

  return acc;
};

// const array = [2, 4, 5, 6, 7];
// const arr = [5, 3, 3, 6, 2];
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

// const d1 = array.myMap((e) => e * 2);
// const t1 = array.myMap((e) => e * 3);
// const q1 = array.myMap((e) => e * 4);

// const d2 = array.map((e) => e * 2);
// const t2 = array.map((e) => e * 3);
// const q2 = array.map((e) => e * 4);

// console.log(d1);
// console.log(t1);
// console.log(q1);
// console.log("");
// console.log(d2);
// console.log(t2);
// console.log(q2);

// const a = {};

// a.name = "jfhg";

// console.log(a);

// console.log(array.myMap());
// console.log(arr.myMap());
// console.log(arr.myMap);

// console.log(Array.prototype.myMap(arr, (e) => e * 2));

// function func(element, index, array, a) {
//   console.log(element, "element");
//   console.log(index, "index");
//   console.log(array, "array");
//   console.log(this);
//   console.log(a);
//   console.log("------------------------------");
// }

// const myfilter1 = arr.filter((e) => e > 3);
// const myfilter2 = arr.myFilter((e) => e > 3);

// console.log(myfilter1);
// console.log(myfilter2);

// reduce

const l1 = [5, 4, 2, 3, 0];
const l2 = [4, 6, 1, 2];

// function hof(array, cb, initialValue) {
//   let acc = initialValue ?? array[0];
//   if (initialValue) {
//     for (let i = 0; i < array.length; i++) {
//       acc = cb(acc, array[i], i, array);
//     }
//   } else {
//     for (let i = 1; i < array.length; i++) {
//       acc = cb(acc, array[i], i, array);
//     }
//   }

//   return acc;
// }

// const s = hof(l1, (o, i) => o + i, 5);
// const m = hof(l1, (o, i) => o * i, 1);

// console.log(s);
// console.log(m);

function cb(acc, cv, i) {
  console.log(acc, "acc");
  console.log(cv, "cv");
  console.log(i, "i");
  console.log("");
  return acc + cv;
}

// const r1 = l1.reduce(cb);
// console.log(r1, "---");
// console.log("------------------------------");

// const r2 = hof(l1, cb);
// console.log(r2, "---");

const r1 = l1.reduce((acc, cv) => acc + cv, 2);
const r2 = l1.myReduce((acc, cv) => acc + cv, 2);

console.log(r1);
console.log(r2);
