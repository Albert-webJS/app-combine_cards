import { createElement } from "./utils.js";

export const CreateGameCard = (defaultIcon: string, flippedCardIcon: string): HTMLElement => {
    const card = createElement("div", "area__card", null);

    const backFlippedCard: HTMLElement = document.createElement('i');
    const frontFlippedCard: HTMLElement = document.createElement('i');

    backFlippedCard.classList.add('fa', `fa-${defaultIcon}`);
    frontFlippedCard.classList.add('fa', `fa-${flippedCardIcon}`)

    card.append(frontFlippedCard, backFlippedCard)

    return card;
}