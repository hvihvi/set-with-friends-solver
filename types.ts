export enum Shape {
  Squiggle,
  Circle,
  Square,
}

export enum Color {
  Violet,
  Green,
  Red,
}

export enum Motif {
  Transparent,
  Stripe,
  Full,
}

export enum Number {
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
