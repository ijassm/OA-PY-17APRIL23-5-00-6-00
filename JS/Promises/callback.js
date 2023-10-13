console.log("May be not today");

/*
 Passing callback function and it will be executed after 5000 ms
*/

setTimeout(function () {
  console.log("May be not tomorrow or next month");
}, 5000);

const newPhone = false;

const promises = new Promise(function (resolve, reject) {
  if (newPhone) {
    setTimeout(function () {
      resolve("bought a new phone");
    }, 5000);
  } else {
    setTimeout(function () {
      reject(new Error("no new phone"));
    }, 5000);
  }
});

// promises.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

promises
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log("You will win the game");

// let n = 100;

// function sum1() {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let a = sum1();

// console.log(a);
