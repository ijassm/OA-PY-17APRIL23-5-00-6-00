console.log("start");

function cb() {
  console.log("i am called back");
}

setTimeout(cb, 0);
// setInterval(() => {
//   const date = new Date();
//   const hr = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();
//   document.writeln(`<h1>hr ${hr}: min ${min}: sec ${sec} </h1>`);
// }, 1000);
let i = 0;

while (i < 5000) {
  console.log(++i);
}
