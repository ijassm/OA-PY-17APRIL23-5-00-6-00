const doc = document;

const main = doc.createElement("main");

// edit the contents of the element

// main.textContent = "Hello, world";

// INLINE CSS

// main.style.backgroundColor = "blue";
// main.style.height = "100px";

// ----------------------------------------------------------------

// INTERNAL CSS STYLE THROUGH JS DOM

// const style = doc.createElement("style");

// style.textContent = `
// main {
//   background-color: blue;
//   color: white;
//   text-align: center;
// }
// `;

// ----------------------------------------------------------------
// console.log(doc.body);
// console.log(doc.head);

// doc.body.appendChild(main);
// doc.head.appendChild(style);

// console.log(main);

// for (let i = 1; i <= 100; i++) {
//   const element = doc.createElement("main");

//   element.textContent = i;
//   element.style.backgroundColor = "blue";
//   element.style.height = "100px";
//   element.style.width = "100px";
//   element.style.color = "white";
//   element.style.textAlign = "center";
//   element.style.margin = "10px";
//   element.style.padding = "10px";
//   element.style.borderRadius = "10px";

//   doc.body.appendChild(element);
// }

const persons = [
  {
    name: "John",
    age: 25,
    occupation: "Student",
  },
  {
    name: "Emily",
    age: 28,
    occupation: "Marketing Specialist",
  },
  {
    name: "Michael",
    age: 30,
    occupation: "Teacher",
  },
  {
    name: "Sarah",
    age: 23,
    occupation: "Graphic Designer",
  },
  {
    name: "Alex",
    age: 29,
    occupation: "Accountant",
  },
  {
    name: "Olivia",
    age: 22,
    occupation: "Web Developer",
  },
  {
    name: "David",
    age: 27,
    occupation: "Mechanical Engineer",
  },
  {
    name: "Sophia",
    age: 26,
    occupation: "Nurse",
  },
  {
    name: "Jacob",
    age: 24,
    occupation: "Sales Representative",
  },
  {
    name: "Ava",
    age: 21,
    occupation: "Art Student",
  },
  {
    name: "William",
    age: 30,
    occupation: "Data Analyst",
  },
  {
    name: "Mia",
    age: 29,
    occupation: "Software Developer",
  },
  {
    name: "Ethan",
    age: 28,
    occupation: "Architect",
  },
  {
    name: "Isabella",
    age: 23,
    occupation: "Writer",
  },
  {
    name: "James",
    age: 27,
    occupation: "Dentist",
  },
  {
    name: "Charlotte",
    age: 25,
    occupation: "Pharmacist",
  },
  {
    name: "Liam",
    age: 22,
    occupation: "Chef",
  },
  {
    name: "Emma",
    age: 20,
    occupation: "Student",
  },
  {
    name: "Benjamin",
    age: 24,
    occupation: "Mechanical Engineer",
  },
  {
    name: "Aiden",
    age: 26,
    occupation: "Marketing Manager",
  },
];

function box(i, index) {
  const element = doc.createElement("main");

  element.textContent = i;
  element.innerHTML = `
    <h1>Name: ${i.name}</h1>
    <p>Age: ${i.age}</p>
    <p>occupation: ${i.occupation}</p>
    `;

  element.classList.add("box");
  index % 2 === 0
    ? element.classList.add("bg-grey")
    : element.classList.add("bg-pink");

  //   element.style.backgroundColor = "blue";
  //   element.style.color = "white";
  //   element.style.textAlign = "center";
  //   element.style.margin = "10px";
  //   element.style.padding = "10px";
  //   element.style.borderRadius = "10px";

  doc.body.appendChild(element);
}

persons.map(box);
