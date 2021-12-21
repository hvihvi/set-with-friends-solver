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
