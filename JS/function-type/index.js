// contructor function

// function Person(fname, lname, age) {
//   this.firstname = fname;
//   this.lastname = lname;
//   this.age = age;
// }

// factory function

function Person(fname, lname, age) {
  return {
    firstname: fname,
    lastname: lname,
    age: age,
  };
}

// Person.prototype.a = "gh";

// const obj1 = new Person("ocean", "academy", 10);
const obj1 = Person("ocean", "academy", 10);

console.log(obj1);
