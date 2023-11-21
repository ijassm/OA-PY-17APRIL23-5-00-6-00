setTimeout(() => {
  console.log("callback func called1");
}, 0);
setTimeout(() => {
  console.log("callback func called2");
}, 0);
setTimeout(() => {
  console.log("callback func called3");
}, 0);

console.log("hello1");

new Promise((resolve, reject) => {
  resolve("success");
}).then((res) => {
  console.log(res);
});

console.log("hello2");
