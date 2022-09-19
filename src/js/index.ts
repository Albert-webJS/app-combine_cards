import { CreateGameMenu } from "./GameMenu.js";
import { showYear } from "./utils.js";
import { switchThemeForPage } from "./switch.js";

const app = (): void => {
    CreateGameMenu();
    showYear(".footer-show-year");
    switchThemeForPage();
}

app();

const createModalPopUp = () => {
    const body = document.body;
    const substrateForPopUp: HTMLDivElement = document.createElement("div");
    const popUpBody: HTMLDivElement = document.createElement("div");
    substrateForPopUp.classList.add("popup")
    popUpBody.classList.add("popup__body")


    substrateForPopUp.append(popUpBody);
    body.append(substrateForPopUp);


}

