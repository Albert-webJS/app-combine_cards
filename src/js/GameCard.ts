export const CreateGameCard = (defaultIcon: string, flippedCardIcon: string): HTMLDivElement => {
    const card: HTMLDivElement = document.createElement("div");
    card.classList.add("area__card");

    const backFlippedCard: HTMLElement = document.createElement('i');
    const frontFlippedCard: HTMLElement = document.createElement('i');

    backFlippedCard.classList.add('fa', `fa-${defaultIcon}`);
    frontFlippedCard.classList.add('fa', `fa-${flippedCardIcon}`)

    card.append(frontFlippedCard, backFlippedCard)

    return card;
}