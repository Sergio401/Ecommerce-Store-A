import { games } from "./games.js"

class GamesCover {
    constructor() {
        this.cardsContainer = document.querySelector(".trending")
        this.card = document.createElement("li")
        this.card.setAttribute("id", "game1");


        this.containerImg = document.createElement("div")
        this.img = document.createElement("img")
        this.cardInfo = document.createElement("div")
        this.title = document.createElement("p")
        this.description = document.createElement("p")
        this.price = document.createElement("div")
        this.buttonsContainer = document.createElement("div")
        this.eyeContainer = document.createElement("div")
        this.eye = document.createElement("div")
        this.shoppingContainer = document.createElement("div")
        this.shopping = document.createElement("div")

        this.createCards()
    }

    setAttributes(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    createCards() {

        // Card image container
        this.cardsContainer.appendChild(this.card.cloneNode(true))
        this.card = document.querySelector("#game1")
        this.card.classList.add("Games__posts-game trending")

        //this.card.appendChild(this.containerImg.cloneNode(true))
        //this.setAttributes(this.containerImg.appendChild(this.img.cloneNode(true)), {"src": games[0].image})

    }
}

new GamesCover()