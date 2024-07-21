import { shuffle } from "./utils.js"
import { sendCreateMessage } from "./p2p.js"
import { createCard, snapOutOfHandArea } from "./card.js"
import { grabCard } from "./grab.js"

export const createDeck = (deckList, id, x, y) => {
    const deck = deckList.trim().split("\n").flatMap(entry => {
        const nameParts = entry.trim().split(" ")
        const number = parseInt(nameParts.shift().replace("x", ""))
        const name = nameParts.join(" ")

        return [...new Array(number)].map(() => name)
    }).map(cardName => window.allCards.find(c => c.title === cardName))
    shuffle(deck)

    const deckElement = document.createElement("div")
    deckElement.id = id
    deckElement.title = deck.length + " cards"
    deckElement.style.left = x
    deckElement.style.top = y
    deckElement.classList.add("deck")
    deckElement.innerHTML = `
    <div class="deck-card-back">
        <img width="190" height="265" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEArMDpLqCtEe0kLcWh5dJj0s-dAnCShz_cQ&s">
    </div>`
    document.querySelector("#card-layer").appendChild(deckElement)
    snapOutOfHandArea(deckElement)

    deckElement.addEventListener("mousedown", e => {
        e.preventDefault()

        if (deck.length) {
            const deckRect = deckElement.getBoundingClientRect()
            const cardElement = createCard(deck.pop(), deckRect.x + "px", deckRect.y + "px")
            grabCard(cardElement)(e)

            if (!deck.length) {
                deckElement.firstElementChild.classList.add("red-tint")
                deckElement.title = "no cards left"
            } else {
                deckElement.title = deck.length + " card" + (deck.length > 1 ? "s" : "")
            }
        }
    })
    deckElement.addEventListener("puttop", e => {
        const cardInfo = cardElementToCardInfo(e.detail.card)
        deck.push(cardInfo)

        deckElement.firstElementChild.classList.remove("red-tint")
        deckElement.title = deck.length + " card" + (deck.length > 1 ? "s" : "")
    })

    deckElement.addEventListener("putbottom", e => {
        const cardInfo = cardElementToCardInfo(e.detail.card)
        deck.unshift(cardInfo)

        deckElement.firstElementChild.classList.remove("red-tint")
        deckElement.title = deck.length + " card" + (deck.length > 1 ? "s" : "")
    })

    deckElement.addEventListener("shufflein", e => {
        const cardInfo = cardElementToCardInfo(e.detail.card)
        deck.push(cardInfo)
        shuffle(deck)

        deckElement.firstElementChild.classList.remove("red-tint")
        deckElement.title = deck.length + " card" + (deck.length > 1 ? "s" : "")
    })

    deckElement.addEventListener("shuffle", e => {
        shuffle(deck)
    })
    
    sendCreateMessage("deck", id, [deckList, id, x, y])
    return deckElement
}

const cardElementToCardInfo = (cardElement) => {
    return {
        title: cardElement.getAttribute("data-title"),
        side_code: cardElement.getAttribute("data-side"),
        faction_code: cardElement.getAttribute("data-faction"),
        type_code: cardElement.getAttribute("data-type"),
        image: cardElement.querySelector(".card-front img").src
    }
}
