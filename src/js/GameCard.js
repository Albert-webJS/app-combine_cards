"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
export function CreateGameCard(defaultIcon, flippedCardIcon) {
    const card = document.createElement("div");
    card.classList.add("area__card");
    const backFlippedCard = document.createElement('i');
    const frontFlippedCard = document.createElement('i');
    backFlippedCard.classList.add('fa', `fa-${defaultIcon}`);
    frontFlippedCard.classList.add('fa', `fa-${flippedCardIcon}`);
    card.append(frontFlippedCard, backFlippedCard);
    return card;
}
