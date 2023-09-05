// console.log(this);

// fname = "a";
// lname = "l";

const user1 = {
  fname: "ocean",
  lname: "academy",
};

const user2 = {
  fname: "xxx",
  lname: "yyy",
};

function fullname(location) {
  console.log(this.fname + " " + this.lname);
  console.log("from" + " " + location);
}

// buit-in-methods to change context of this
// call apply bind

fullname.call(user1, "pondy");
fullname.call(user2, "chennai");

// console.log(user);
// user1.fullname();
// user2.fullname();
