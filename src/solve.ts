import { Card, Color, Motif, Number, Shape, Solution } from "./types";

export const solve = (cards: Card[]): Solution => {
  const contains = containsCard(cards);
  if (contains(findMissing(cards[0], cards[1]))) {
    return [cards[0], cards[1], findMissing(cards[0], cards[1])];
  }
  return solve(shuffleArray(cards));
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

const shuffleArray = (cards: Card[]) => {
  const result = [...cards];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
