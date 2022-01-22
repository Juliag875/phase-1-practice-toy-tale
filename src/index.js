
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

function fetchToys() {
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(toyData => toyData.forEach(toy => createCards(toy)))
}

function createCards(toys) {
    const div = document.createElement("div")
    div.className = "card"
    
    const toyH2 = document.createElement("h2")
    toyH2.innerText = toys.name

    const img = document.createElement("img")
    img.src = toys.image
    img.className = "toy-avatar"

    const p = document.createElement("p")
    p.innerText = toys.likes

    const btn = document.createElement("btn")
    btn.className = "like-btn"
    btn.id = toys.id
    btn.innerText = " ❤️ "
    
    btn.addEventListener("click", () => { 
      p.innerText = parseInt(toys.likes++)
      // let number = parseInt(pLikes.innerText)
      // let newNum = number + 1
      // pLikes.innerText = newNum
    })

    div.append(toyH2, img, p, btn)

    const toyCollection = document.querySelector("#toy-collection")
    toyCollection.append(div)  
}

  
  function addNewToy(newToyObj){
    fetch('http://localhost:3000/toys', { 
      method:'POST', 
      headers: {
      "Content-Type": "application/json"
    },
      body:JSON.stringify({
        "name": "Jessie",
        "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
        "likes": 0
    })
    .then(response => response.json())
    .then(toy => addNewToy(toy))
  })
  }

  const newToyForm = document.querySelector("form")
  newToyForm.addEventListener("submit", handleSubmit)

  function handleSubmit(e) {
      e.preventDefault()
      const newToyObj = {
        name:e.target.name.value,
        image:e.target.image.value,
        likes:0
      }
    createCards(newToyObj)
    addNewToy(newToyObj)
    }