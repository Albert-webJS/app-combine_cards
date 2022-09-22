import { CreateGameMenu } from "./GameMenu.js";
import { CreateGameCard } from "./GameCard.js";
import { shuffle, dublicateCard, createIconsArray, createElement } from "./utils.js";

type Cards = number | null

export const Start = (difficult: number) => {
  let firstCard: Cards = null;
  let secondCard: Cards = null;
  let clicked: boolean = true;

  const areaForCard: HTMLElement = createElement('div', "game-area__card", null);
  const restartButton = createElement('button', "restart-btn", "btn");

  restartButton.textContent = "Restart"
  
  const gameArea: HTMLDivElement | null = document.querySelector('.game-area__box');
  const cardsIcons: string[] | undefined = createIconsArray(difficult);
  const duplicatedCardsIcons: string[] = dublicateCard(cardsIcons ?? []);

  gameArea ? gameArea.innerHTML = "" : null;

  shuffle(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach(icon => areaForCard.append(CreateGameCard("question-circle", icon)));

  gameArea ? gameArea.append(areaForCard, restartButton) : null;

  const cards: NodeListOf<Element> = document.querySelectorAll(".area__card");

  restartButton.addEventListener("click", CreateGameMenu)


  cards.forEach((card, index) => card.addEventListener("click", () => {
    if (clicked === true && !card.classList.contains("successfully")) {
      card.classList.add("flip");

      if (firstCard === null) {
        firstCard = index
      } else {
        if (index !== firstCard) {
          secondCard = index,
            clicked = false;
        }
      }

      if (firstCard !== null && secondCard !== null && firstCard !== secondCard) {
        if (cards[firstCard].firstElementChild?.className === cards[secondCard].firstElementChild?.className) {
          setTimeout(() => {
            typeof firstCard === "number" ? cards[firstCard].classList.add("successfully") : null;
            typeof secondCard === "number" ? cards[secondCard].classList.add("successfully") : null;

            firstCard = null;
            secondCard = null;
            clicked = true;
          }, 500)
        } else {
          setTimeout(() => {
            typeof firstCard === "number" ? cards[firstCard].classList.remove('flip') : null;
            typeof secondCard === "number" ? cards[secondCard].classList.remove('flip') : null;

            firstCard = null;
            secondCard = null;
            clicked = true;
          }, 500)

        }
      }

      if (Array.from(cards).every(card => card.className.includes("flip"))) {
        console.log("Okey, this app complited");
      }
    }
  }))


};
