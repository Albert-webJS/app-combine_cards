"use strict";
import { createElement } from "./utils.js";

export function CreateGameCard(defaultIcon, flippedCardIcon) {
    const card = createElement("div", "area__card", null);
    
    const backFlippedCard = document.createElement('i');
    const frontFlippedCard = document.createElement('i');
    backFlippedCard.classList.add('fa', `fa-${defaultIcon}`);
    frontFlippedCard.classList.add('fa', `fa-${flippedCardIcon}`);
    card.append(frontFlippedCard, backFlippedCard);
    return card;
}
