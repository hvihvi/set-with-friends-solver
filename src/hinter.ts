import {Card, Solution} from "./types";
import {mapCardElementToColor, mapCardElementToMotif, mapCardElementToNumber, mapCardElementToShape} from "./scrapper";

export const hintSolution = (solution: Solution) =>
    solution.map(findCardInDom).forEach(cardToHint => cardToHint!.style.boxShadow = "0px 0px 10px 20px #FFEF53")

export const clickSolution = (solution: Solution) => {
    const cardsToClick = solution.map(findCardInDom);
    cardsToClick.forEach(cardToHint => (cardToHint!.firstChild as HTMLDivElement).click());
    return !!cardsToClick.length;
}

const findCardInDom = (card: Card) => {
    const findCard = isMatchingCard(card);
    return (Array.from(document.querySelectorAll('div[style*="visibility: visible"]')) as HTMLDivElement[])
        .find(findCard);
}

const isMatchingCard = (cardToFind: Card) => (cardDiv: HTMLDivElement) => mapCardElementToNumber(cardDiv) === cardToFind.number &&
    mapCardElementToShape(cardDiv) === cardToFind.shape &&
    mapCardElementToColor(cardDiv) === cardToFind.color &&
    mapCardElementToMotif(cardDiv) === cardToFind.motif;