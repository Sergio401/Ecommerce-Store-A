class GamesCover {
    constructor() {
        this.cardsContainer = document.querySelector(".trending")
        this.card = document.createElement("li")
        this.img = document.createElement("img")
        this.cardInfo = document.createElement("div")
        this.title = document.createElement("p")



        this.createCards()
    }

    createCards() {
        this.cardsContainer.appendChild(this.card)
    }
}

new GamesCover()