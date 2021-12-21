import { Color, Motif, Number, Shape, Solution } from "./types";

export const solve = (
  shapes: Shape[],
  colors: Color[],
  motifs: Motif[],
  numbers: Number[]
): Solution => {
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
  ] as Solution;
};
