import { Start } from "./Start";

export const CreateGameMenu = (): void => {
    const title: HTMLElement = document.createElement("h2");
    const gameArea: HTMLDivElement | null = document.querySelector(".game-area__box");

    title.classList.add("game-area__title")
    title.textContent = "combine the cards";

    gameArea ? gameArea.innerHTML = "" : null;

    const difficultButton = (difficult: number): HTMLButtonElement => {
        const button: HTMLButtonElement = document.createElement("button");

        button.classList.add("game-area__difficult-btn", "btn");
        button.textContent = `${difficult} card`

        button.addEventListener('click', () => Start(difficult))

        return button;
    }

    gameArea?.append(title, difficultButton(10), difficultButton(12), difficultButton(14), difficultButton(16))
}