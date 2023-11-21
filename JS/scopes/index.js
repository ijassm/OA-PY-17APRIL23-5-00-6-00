var a = 10;
let b = 20;
const c = 30;

{
  let d = 40;

  {
    var e = 50;
  }

  console.log(d);
  console.log(e);
}

console.log(a);
console.log(b);
console.log(c);
