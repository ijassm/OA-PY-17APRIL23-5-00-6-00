// const user = Number(prompt("enter your age"));

// if (user <= 0) {
//   console.log("invalid");
// } else if (user >= 18) {
//   console.log("Eligiable for voting");
// } else {
//   console.log("Not eligiable for voting");
// }

// if (user > 0) {
//   if (user >= 18) {
//     console.log("Eligiable for voting");
//   } else {
//     console.log("Not eligiable for voting");
//   }
// } else {
//   console.log("invalid");
// }

// console.log(user);
// console.log(typeof user);

// Date object

const date = new Date();
// const day = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"];
// const mon = [
//   "jan",
//   "feb",
//   "mar",
//   "apr",
//   "may",
//   "jun",
//   "jul",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
//   "dec",
// ];

// console.log(date.getDate());
// console.log(day[date.getDay()]);
// console.log(mon[date.getMonth()]);
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(typeof date);

// document.write(
//   `${date.getHours()} hr :${date.getMinutes()} min : ${date.getSeconds()} sec : ${date.getMilliseconds()} milisec`
// );

const key = date.getDay();

switch (key) {
  case 0:
    console.log("sun");
    break;
  case 1:
    console.log("mon");
    break;
  case 2:
    console.log("tue");
    break;
  case 3:
    console.log("wed");
    break;
  case 4:
    console.log("thr");
    break;
  case 5:
    console.log("fri");
    break;
  case 6:
    console.log("sat");
    break;
  default:
    console.log("invaild");
}
