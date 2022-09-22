export const shuffle = <T>(array: T[]): T[] => {
    let currentIndex: number = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array;
}

export const dublicateCard = <T>(array: T[]) => array.reduce((initial: T[], current) => initial.concat([current, current]), []);

export const createIconsArray = (initialCount: number) => {
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

const setYear = (): number => {
    const data = new Date();
    return data.getFullYear();
};

export const showYear = (selector: string) => {
    const display: HTMLSpanElement | null = document.querySelector(selector);
    let year = setYear();

    display ? display.textContent = `${year}` : null;
};


export const createElement = (tag: string, className: string, additionalClass: string | null): HTMLButtonElement | HTMLElement => {
    const domElement: HTMLElement | HTMLButtonElement = document.createElement(tag);

    if (className) {
        domElement.classList.add(className, (additionalClass ? additionalClass : ""))
    }

    return domElement
}