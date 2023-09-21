function outerFunc() {
  let a = 10;
  a = 30;
  function innerfunc() {
    return a;
  }

  innerfunc();
}

// let func = outerFunc();

// console.log(func());

outerFunc();
