console.log("start");
var a;
let b;
const c = 10;

{
  let c = 20;
  console.log(c);
}

console.log(c);

console.log(sum(2, 5));

function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(2, 89));
