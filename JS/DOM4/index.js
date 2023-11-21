const doc = document;
const button = doc.querySelector(".cursor");
const body = doc.body;

body.addEventListener("mousemove", function (e) {
  console.log("event triggered in");
  const x = e.x;
  const y = e.y;

  button.style.top = y - 10 + "px";
  button.style.left = x - 10 + "px";
  console.log(e.x);
  console.log(e.y);
  console.log(e);
});

button.addEventListener("mouseout", function () {
  console.log("event triggered out");
});
