const doc = document;


function openModel() {
    const model = doc.querySelector(".modal");
    model.classList.toggle("block");
    model.classList.remove("hidden");
}

function closeModel() {
    const model = doc.querySelector(".modal");
    model.classList.toggle("hidden");
    model.classList.remove("block");
}