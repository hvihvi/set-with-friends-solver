import { Card, Color, Motif, Number, Shape, Solution } from "./types";

export const solve = (cards: Card[]): Solution => {
  return [
    {
      color: Color.Green,
      motif: Motif.Full,
      number: Number.One,
      shape: Shape.Circle,
    },
    {
      color: Color.Green,
      motif: Motif.Full,
      number: Number.One,
      shape: Shape.Square,
    },
    {
      color: Color.Green,
      motif: Motif.Full,
      number: Number.One,
      shape: Shape.Squiggle,
    },
  ];
};

export const findMissing = (card1: Card, card2: Card) => ({
  color: findMissingDimension(card1.color, card2.color),
  motif: findMissingDimension(card1.motif, card2.motif),
  number: findMissingDimension(card1.number, card2.number),
  shape: findMissingDimension(card1.shape, card2.shape)
});

export const findMissingDimension = (d1: 0 | 1 | 2, d2: 0 | 1 | 2) =>
  (3 - ((d1 + d2) % 3)) % 3;
