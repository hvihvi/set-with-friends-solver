import {Card, Solution} from "./types";

export const solve = (cards: Card[], indexCard1: number = 0, indexCard2: number = 1): Solution => {
  const contains = containsCard(cards);
  if (contains(findMissing(cards[indexCard1], cards[indexCard2]))) {
    return [cards[indexCard1], cards[indexCard2], findMissing(cards[indexCard1], cards[indexCard2])];
  }
  if (indexCard2 === cards.length - 1) {
      return solve(cards, indexCard1 + 1, indexCard1 + 2);
  }
  return solve(cards, indexCard1, indexCard2 + 1);
};

const containsCard = (cards: Card[]) => (card: Card) =>
  cards.some(
    (it) =>
      it.color === card.color &&
      it.motif === card.motif &&
      it.number === card.number &&
      it.shape === card.shape
  );

export const findMissing = (card1: Card, card2: Card) => ({
  color: findMissingDimension(card1.color, card2.color),
  motif: findMissingDimension(card1.motif, card2.motif),
  number: findMissingDimension(card1.number, card2.number),
  shape: findMissingDimension(card1.shape, card2.shape),
});

export const findMissingDimension = (d1: 0 | 1 | 2, d2: 0 | 1 | 2) =>
  modulo3(3 - (d1 + d2));

// % operator is not a real modulo, -1%3 equals -1:
// https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
export const modulo3 = (n: number) => ((n % 3) + 3) % 3;
