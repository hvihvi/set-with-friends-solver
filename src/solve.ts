import { cp } from "fs";
import { Card, Solution } from "./types";

const combinations = ([head, ...tail]: any[]): any[] => {
  if (tail.length > 0) {
    return [
      ...tail.map((tailValue) => [head, tailValue]),
      ...combinations(tail),
    ];
  }
  return [];
};

export const solve = ([firstCard, ...remainingCards]: Card[]): Card[] => {
  if (remainingCards.length === 0) {
    return [];
  }
  const contains = containsCard(remainingCards);
  const resultat = remainingCards.reduce((acc, curr) => {
    return contains(findMissing(firstCard, curr))
      ? [curr, firstCard, findMissing(firstCard, curr)]
      : acc;
  }, [] as Card[]);
  if (resultat.length) {
    return resultat;
  }
  return solve(remainingCards);
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
