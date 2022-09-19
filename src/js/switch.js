"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const switchBtn = document.querySelector(".switch-btn");
const cursorToggleLefr = document.querySelector(".position-left");
const cursorToggleRight = document.querySelector(".position-right");
export function switchThemeForPage() {
    switchBtn.addEventListener("click", function () {
        this.classList.toggle("switch-on");
        if (cursorToggleLefr && cursorToggleRight) {
            if (this.classList.contains("switch-on")) {
                setTimeout(() => {
                    cursorToggleLefr.style.display = "block";
                }, 300);
                setTimeout(() => {
                    cursorToggleRight.style.display = "none";
                }, 100);
            }
            else {
                setTimeout(() => {
                    cursorToggleLefr.style.display = "none";
                }, 100);
                setTimeout(() => {
                    cursorToggleRight.style.display = "block";
                }, 300);
            }
        }
        if (document.documentElement.hasAttribute("theme")) {
            setTimeout(() => {
                document.documentElement.removeAttribute("theme");
            }, 300);
        }
        else {
            setTimeout(() => {
                document.documentElement.setAttribute("theme", "light");
            }, 300);
        }
    });
}
