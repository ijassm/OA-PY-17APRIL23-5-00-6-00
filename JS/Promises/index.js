function cb(i) {
  console.log(i);
}

// for (let i = 0; i <= 3; i++) {
//   setTimeout(cb, 0, i);
// }

// for (let i = 0; i < 100000; i++) {
//   console.log(`done${i}`);
// }

// const doc = document;
// const word = "hello";

// function main() {
//   setTimeout(function () {
//     const h1 = document.querySelector("h1");
//     console.log("done1");
//     h1.textContent = h1.textContent + word[0];
//     setTimeout(function () {
//       h1.textContent = h1.textContent + word[1];
//       console.log("done2");
//       setTimeout(function () {
//         h1.textContent = h1.textContent + word[2];
//         console.log("done3");
//         setTimeout(function () {
//           h1.textContent = h1.textContent + word[3];
//           setTimeout(function () {
//             h1.textContent = h1.textContent + word[4];
//             console.log("finally finished");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }

// main();

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// Array.map()

// function getDetail(cb) {
//   //   cb();
// }

// getDetail(function () {});

// api.getDetail();

for (let i = 0; i <= 3; i++) {
  setTimeout(cb, 0, i);
}

const p = new Promise((resolve, reject) => {
  resolve("success");
});

p.then(function (res) {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

for (let i = 0; i < 1000; i++) {
  console.log("hello world");
}
// console.log(p, "---");

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("done");
//   }, 1000);
// }).then(function () { });
