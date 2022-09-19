"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { Start } from "./Start.js";
export function CreateGameMenu() {
  const title = document.createElement("h2");
  const gameArea = document.querySelector(".game-area__box");
  title.classList.add("game-area__title");
  title.textContent = "combine the cards";
  gameArea ? (gameArea.innerHTML = "") : null;
  const difficultButton = (difficult) => {
    const button = document.createElement("button");
    button.classList.add("game-area__difficult-btn", "btn");
    button.textContent = `${difficult} card`;
    button.addEventListener("click", () => Start(difficult));
    return button;
  };
  gameArea.append(
    title,
    difficultButton(10),
    difficultButton(12),
    difficultButton(14),
    difficultButton(16)
  );
}
