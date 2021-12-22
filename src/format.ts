import { Card, Color, Motif, Shape, Solution } from "./types";

// TODO utiliser des smiley?
export const format = (cards: Solution) =>
  "" +
  toReadableCard(cards[0]) +
  toReadableCard(cards[1]) +
  toReadableCard(cards[2]);

const toReadableCard = (card: Card) => {
  return `${toReadableShape(card.shape).repeat(
    card.number + 1
  )} ${toReadableColor(card.color)} ${toReadableMotif(card.motif)}
  `;
};

const toReadableShape = (input: Shape) => {
  switch (input) {
    case Shape.Circle:
      return "O";
    case Shape.Square:
      return "⬦";
    case Shape.Squiggle:
      return "S";
  }
};

const toReadableColor = (input: Color) => {
  switch (input) {
    case Color.Green:
      return "vert";
    case Color.Red:
      return "rouge";
    case Color.Violet:
      return "violet";
  }
};

const toReadableMotif = (input: Motif) => {
  switch (input) {
    case Motif.Full:
      return "full";
    case Motif.Stripe:
      return "stripe";
    case Motif.Transparent:
      return "transparent";
  }
};
