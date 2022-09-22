"use strict";

import { Start } from "./Start.js";
import { createElement } from "./utils.js";

export function CreateGameMenu() {
  const title = createElement("h2", "game-area__title", null);
  const gameArea = document.querySelector(".game-area__box--display-menu");
  title.textContent = "combine the cards";
  gameArea ? (gameArea.innerHTML = "") : null;
  const difficultButton = (difficult) => {
    const button = createElement("button", "game-area__difficult-btn", "btn");
    button.textContent = `${difficult} card`;
    button.addEventListener("click", () => Start(difficult));
    return button;
  };
  gameArea
    ? gameArea.append(
        title,
        difficultButton(10),
        difficultButton(12),
        difficultButton(14),
        difficultButton(16)
      )
    : null;
}
