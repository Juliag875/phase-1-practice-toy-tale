

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", (e) => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


fetchToys()
const toyCollection = document.querySelector("#toy-collection")

function fetchToys() {
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(toys => toys.forEach(toy => createCards(toy)))
}

function createCards(toys) {
    const newToy = document.createElement("div")
    newToy.className = "card"
    
    const toyH2 = document.createElement("h2")
    toyH2.innerText = toys.name

    const img = document.createElement("img")
    img.src = toys.image
    img.className = "toy-avatar"

    const pLikes = document.createElement("p")
    pLikes.innerText = toys.likes

    const btn = document.createElement("btn")
    btn.className = "like-btn"
    btn.id = toys.id
    btn.innerText = " ❤️ "
    
    btn.addEventListener("click", () => { 
      pLikes.innerText = toys.likes++
    })
 
    toyCollection.appendChild(newToy)
    newToy.append(toyH2, img, pLikes, btn)
}

const newToyForm = document.querySelector(".add-toy-form")
newToyForm.addEventListener("submit", createToy)

function createToy(e) {
    (e).preventDefault()
    let newObj = {
      name: e.target.name.value,
      img: e.target.image.value,
    }
  createCards(newObj)
}
