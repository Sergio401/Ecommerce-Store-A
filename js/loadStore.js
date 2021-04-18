import { games } from "./games"

class GamesCover {
    constructor() {
        this.cardsContainer = document.querySelector(".trendings")
        this.card = document.createElement("div")
        this.image = document.createElement("img")
        this.title = document.createElement("h2")
        this.date = document.createElement("span")

        this.createCards()
    }

    createCards() {
        games.forEach(game => {
            this.cardContainer = this.cardsContainer.appendChild(this.card.cloneNode(true))
            this.cardContainer.appendChild(this.image.cloneNode(true)).innerHTML = game.image
            this.cardContainer.appendChild(this.title.cloneNode(true)).innerHTML = game.title
            this.cardContainer.appendChild(this.date.cloneNode(true)).innerHTML = game.price
        })
    }
}

new GamesCover()