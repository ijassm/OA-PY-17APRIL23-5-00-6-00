const doc = document;

function createCardElement(imageLink, title, description) {
  return `  
        <img
          src= ${imageLink}
          alt="img"
        />
        <h5 class="card-title my-3">${title}</h5>
        <p class="card-text">
          ${description}
        </p>
        <a href="#" class="btn btn-primary">View</a>
    `;
}

const cardRow = doc.querySelector(".card-row");

function addCard() {
  const imageLink = doc.querySelector(".image-link").value;
  const title = doc.querySelector(".title").value;
  const description = doc.querySelector(".description").value;
  console.log(imageLink);
  console.log(title);
  console.log(description);
  const card = doc.createElement("section");
  card.className = "card p-2";
  card.innerHTML = createCardElement(imageLink, title, description);
  cardRow.appendChild(card);
}
