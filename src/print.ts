import { Card, Color, Motif, Shape, Solution } from "./types";

// TODO utiliser des smiley?
export const print = (cards: Solution) => {
  console.group("solution");
  cards.map((card) =>
    console.log(
      "%c" + toReadableCard(card),
      `font-weight: bold; font-size: 50px;${toReadableColor(
        card.color
      )}; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)`
    )
  );
  console.groupEnd();
};

const toReadableCard = (card: Card) => {
  return `${toReadableShape(card.shape).repeat(
    card.number + 1
  )} ${toReadableMotif(card.motif)}
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
      return "color:green";
    case Color.Red:
      return "color:red";
    case Color.Violet:
      return "color:violet";
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
