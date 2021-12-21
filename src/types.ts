export const enum Shape {
  Squiggle,
  Circle,
  Square,
}

export const enum Color {
  Violet,
  Green,
  Red,
}

export const enum Motif {
  Transparent,
  Stripe,
  Full,
}

export const enum Number {
  One,
  Two,
  Three,
}

export type Card = {
  shape: Shape;
  color: Color;
  motif: Motif;
  number: Number;
};

export type Solution = [Card, Card, Card];
