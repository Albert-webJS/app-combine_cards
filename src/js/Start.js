"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { CreateGameMenu } from "./GameMenu.js";
import { CreateGameCard } from "./GameCard.js";
import { createIconsArray, dublicateCard, shuffle } from "./utils.js";
export function Start(difficult) {
  let firstCard = null;
  let secondCard = null;
  let clicked = true;
  const gameArea = document.querySelector(".game-area__box");
  const areaForCard = document.createElement("div");
  const cardsIcons = createIconsArray(difficult);
  const duplicatedCardsIcons = dublicateCard(cardsIcons);
  const restartButton = document.createElement("button");
  gameArea ? (gameArea.innerHTML = "") : null;
  restartButton.textContent = "Restart";
  areaForCard.classList.add("game-area__card");
  restartButton.classList.add("restart-btn", "btn");
  shuffle(duplicatedCardsIcons);
  duplicatedCardsIcons.forEach((icon) =>
    areaForCard.append(CreateGameCard("question-circle", icon))
  );
  gameArea ? gameArea.append(areaForCard, restartButton) : null;
  const cards = document.querySelectorAll(".area__card");
  restartButton.addEventListener("click", CreateGameMenu);
  cards.forEach((card, index) =>
    card.addEventListener("click", () => {
      if (clicked === true && !card.classList.contains("successfully")) {
        card.classList.add("flip");
        if (firstCard === null) {
          firstCard = index;
        } else {
          if (index !== firstCard) {
            (secondCard = index), (clicked = false);
          }
        }
        if (
          firstCard !== null &&
          secondCard !== null &&
          firstCard !== secondCard
        ) {
          if (
            cards[firstCard].firstElementChild.className ===
            cards[secondCard].firstElementChild.className
          ) {
            setTimeout(() => {
              typeof firstCard === "number"
                ? cards[firstCard].classList.add("successfully")
                : null;
              typeof secondCard === "number"
                ? cards[secondCard].classList.add("successfully")
                : null;
              firstCard = null;
              secondCard = null;
              clicked = true;
            }, 500);
          } else {
            setTimeout(() => {
              typeof firstCard === "number"
                ? cards[firstCard].classList.remove("flip")
                : null;
              typeof secondCard === "number"
                ? cards[secondCard].classList.remove("flip")
                : null;
              firstCard = null;
              secondCard = null;
              clicked = true;
            }, 500);
          }
        }
        if (
          Array.from(cards).every((card) => card.className.includes("flip"))
        ) {
          console.log("Okey, this app complited");
        }
      }
    })
  );
}
