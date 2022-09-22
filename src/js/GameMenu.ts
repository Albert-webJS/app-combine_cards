import { Start } from "./Start";
import { createElement } from './utils.js'

export const CreateGameMenu = (): void => {
    const title: HTMLElement = createElement("h2", "game-area__title", null);
    const gameArea: HTMLDivElement | null = document.querySelector(".game-area__box--display-menu");

    title.textContent = "combine the cards";

    gameArea ? gameArea.innerHTML = "" : null;

    const difficultButton = (difficult: number): HTMLButtonElement | HTMLElement => {
        const button = createElement("button", "game-area__difficult-btn", "btn")

        button.textContent = `${difficult} card`

        button.addEventListener('click', () => Start(difficult))

        return button;
    }

    gameArea?.append(title, difficultButton(10), difficultButton(12), difficultButton(14), difficultButton(16))
}