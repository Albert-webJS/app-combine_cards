"use strict";

import { CreateGameMenu } from "./GameMenu.js";
import { showYear } from "./utils.js";
import { switchThemeForPage } from "./switch.js";
const app = () => {
  CreateGameMenu();
  showYear(".footer-show-year");
  switchThemeForPage();
};
app();

const modal = () => {
  function showModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    
    if (trigger && modal && close) {
      trigger.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
      close.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      });
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = "";
        }
      });
    }
    const btnContinue = document.querySelector(".popup__button");

    btnContinue?.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
  }
  showModal(".box-icon--describ", ".popup", ".popup__close");
};
modal();
