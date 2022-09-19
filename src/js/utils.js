"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
export function dublicateCard(array) { return array.reduce((initial, current) => initial.concat([current, current]), []); }
export function createIconsArray(initialCount) {
    const cardsIcons = [
        'compass',
        'cloud',
        'play',
        'bolt',
        'stop',
        'cogs',
        'atom',
        'basketball-ball'
    ];
    switch (initialCount) {
        case 10:
            return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons.slice(0, 6);
        case 14:
            return cardsIcons.slice(0, 7);
        case 16:
            return cardsIcons;
        default:
            break;
    }
}
const setYear = () => {
    const data = new Date();
    return data.getFullYear();
};
export function showYear(selector) {
    const display = document.querySelector(selector);
    let year = setYear();
    display ? display.textContent = `${year}` : null;
}
