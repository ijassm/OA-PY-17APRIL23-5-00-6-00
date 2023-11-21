const doc = document;
const default_input = doc.getElementById("default");
const debounce_input = doc.getElementById("debounce");
const default_output = doc.querySelector(".default-output");
const debounce_output = doc.querySelector(".debounce-output");

default_input.addEventListener("input", function (e) {
  const value = e.target.value;
  default_output.textContent = value;
});

debounce_input.addEventListener("input", function (e) {
  let id;
  const value = e.target.value;
  function debounce() {
    if (id) {
      console.log(id, "inner id");
      clearTimeout(id);
    } else {
      id = setTimeout(function () {
        debounce_output.textContent = value;
      }, 2000);
    }
    // console.log(id, "id--------");
  }
  debounce();
});

function changeTheme() {
  doc.body.classList.toggle("dark-mode");
}
