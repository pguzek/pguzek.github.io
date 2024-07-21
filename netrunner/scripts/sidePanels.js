import { flipElement, snapToGrid } from "./utils.js"
import { setupCorp, setupRunner } from "./game.js"
import { updateCardArea, updateCardHoverArea, updateCardTooltipPosition, handleCardBehavior } from "./card.js"

export const flipBoard = () => {
    const bodyRect = document.querySelector("body").getBoundingClientRect()
    Array.from(document.querySelectorAll("#card-layer>.deck"))
        .forEach(deck => {
            flipElement(deck, bodyRect)
            snapToGrid(deck)
        })
    Array.from(document.querySelectorAll("#card-layer>.game-card"))
        .forEach(card => {
            flipElement(card, bodyRect)
            snapToGrid(card)
            updateCardTooltipPosition(card)
            updateCardArea(card)
            updateCardHoverArea(card)
            handleCardBehavior(card)
        })
    Array.from(document.querySelectorAll("#card-layer>.token"))
        .forEach(token => {
            flipElement(token, bodyRect)
            snapToGrid(token, 15)
        })
}

export const setupSidePanels = () => {
    const playerPanel = document.querySelector("#player-panel")
    document.querySelector("#open-player-panel").addEventListener("click", e => {
        playerPanel.classList.remove("hiding")
        playerPanel.classList.add("show")
        playerPanel.focus()
    })
    playerPanel.addEventListener("focusin", e => {
        playerPanel.classList.remove("hiding")
        playerPanel.classList.add("show")
    })
    playerPanel.addEventListener("focusout", e => {
        playerPanel.classList.add("hiding")
    })
    
    const resourcePanel = document.querySelector("#resource-panel")
    document.querySelector("#open-resource-panel").addEventListener("click", e => {
        resourcePanel.classList.remove("hiding")
        resourcePanel.classList.add("show")
        resourcePanel.focus()
    })
    resourcePanel.addEventListener("focusin", e => {
        resourcePanel.classList.remove("hiding")
        resourcePanel.classList.add("show")
    })
    resourcePanel.addEventListener("focusout", e => {
        resourcePanel.classList.add("hiding")
    })

    document.querySelector(".flex-container").addEventListener("mousemove", e => {
        if (e.clientX === 0) {
            document.querySelector("#open-resource-panel").click()
        }
    })
    
    document.querySelector("#corp-check").checked = "true"
    document.querySelector("#corp-check").addEventListener("click", e => {
        console.log(window.playerSide)
        if (window.playerSide !== "corp") {
            window.playerSide = "corp"
            flipBoard()
        }
        document.querySelector("#your-title").innerText = "Corporation"
        document.querySelector("#opponent-title").innerText = "Runner"
    
        document.querySelector("#corp-deck-panel").classList.remove("hidden")
        document.querySelector("#runner-deck-panel").classList.add("hidden")
    })
    
    document.querySelector("#runner-check").addEventListener("click", e => {
        console.log(window.playerSide)
        if (window.playerSide !== "runner") {
            window.playerSide = "runner"
            flipBoard()
        }
        document.querySelector("#your-title").innerText = "Runner"
        document.querySelector("#opponent-title").innerText = "Corporation"
    
        document.querySelector("#corp-deck-panel").classList.add("hidden")
        document.querySelector("#runner-deck-panel").classList.remove("hidden")
    })
    
    document.querySelector("#load-deck-button").addEventListener("click", e => {
        if (window.playerSide === "corp") {
            document.querySelector("#card-layer>#corp-deck")?.remove()
            document.querySelectorAll('#card-layer>.game-card[data-side="corp"]').forEach(card => card.remove())
            setupCorp()
        } else {
            document.querySelector("#card-layer>#runner-deck")?.remove()
            document.querySelectorAll('#card-layer>.game-card[data-side="runner"]').forEach(card => card.remove())
            setupRunner()
        }
    })
}
