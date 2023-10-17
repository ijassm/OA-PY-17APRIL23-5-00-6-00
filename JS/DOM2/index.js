const doc = document;

// let a = "hello";

// a = a + " world";

// console.log(a);

const colors = ["red", "green", "yellow", "blue", "pink"];

// for (let i = 1; i <= 5; i++) {
//   const div = doc.createElement("div");
//   //   div.className = "box box2";
//   div.classList.add("box2");
//   //   div.className = div.className + " box2";
//   div.textContent = i;
//   div.classList.add("box1");
//   //   div.classList.remove("box1");

//   div.className = "box3";

//   doc.body.appendChild(div);
// }

// let div1 = document.createElement("div");
// div1.textContent = 1;
// div1.classList.add(`box`);

// doc.body.appendChild(div1);

// let div2 = document.createElement("div");
// div2.textContent = 2;
// div2.classList.add(`box`);
// doc.body.appendChild(div2);

// let div3 = document.createElement("div");
// div3.textContent = 3;
// div3.classList.add(`box`);
// doc.body.appendChild(div3);

// let div4 = document.createElement("div");
// div4.textContent = 4;
// div4.classList.add(`box`);
// doc.body.appendChild(div4);

// let div5 = document.createElement("div");
// div5.textContent = 5;
// div5.classList.add(`box`);
// doc.body.appendChild(div5);

// for (let i = 1; i <= 5; i++) {
//   const div = doc.createElement("div");
//   div.textContent = i;
//   // classname style
//   div.classList.add(`box${i}`);
//   doc.body.appendChild(div);
// }

console.log("5*5 matrix elements");

for (let i = 1; i <= 5; i++) {
  const row = doc.createElement("main");
  row.className = "row";
  for (let j = 1; j <= 5; j++) {
    const col = doc.createElement("div");
    col.textContent = j;
    col.className = "col";
    row.appendChild(col);
  }

  doc.body.appendChild(row);
}
