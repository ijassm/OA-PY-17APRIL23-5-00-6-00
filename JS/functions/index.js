// function declaration

function greeting(name) {
  console.log(name + " hello");
}

console.log("start");
greeting("ocean");
greeting("xxx");
greeting("yyy");
console.log("end");

function trigger() {
  //   window.alert("triggered")
  console.log("triggered");
  const h1 = document.getElementsByTagName("h1");
  h1[0].textContent = h1[0].textContent + " ocean";
  console.log(h1[0]);
  // console.log(window.document);
}

const doc = document;

function inc() {
  const h1 = doc.getElementsByTagName("h1")[0];
  h1.textContent = Number(h1.textContent) + 1;
}