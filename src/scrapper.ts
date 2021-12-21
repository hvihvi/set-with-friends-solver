import { Card, Color, Motif, Shape } from "./types";

const mapCardElementToNumber = (card: Element) =>
  // @ts-ignore
  card.firstChild.childElementCount - 1 ?? 0;

const mapCardElementToShape = (card: Element) => {
  // @ts-ignore
  const shape = card.firstChild.firstChild.firstChild.getAttribute("href");
  if (shape === "#squiggle") return Shape.Squiggle;
  if (shape === "#oval") return Shape.Circle;
  if (shape === "#diamond") return Shape.Square;
  throw new Error();
};

const mapCardElementToColor = (card: Element) => {
  // @ts-ignore
  const color = card.firstChild.firstChild.children[1].getAttribute("stroke");
  if (color === "#800080") return Color.Violet;
  if (color === "#008002") return Color.Green;
  if (color === "#ff0101") return Color.Red;
  throw new Error();
};

const mapCardElementToMotif = (card: Element) => {
  if (
    // @ts-ignore
    card.firstChild.firstChild.children[0].getAttribute("fill") ===
    "transparent"
  )
    return Motif.Transparent;
  if (
    // @ts-ignore
    card.firstChild.firstChild.children[0]
      .getAttribute("mask")
      .includes("mask-stripe")
  )
    return Motif.Stripe;
  return Motif.Full;
};

export const scrapCards = (): Card[] =>
  Array.from(
    document.querySelectorAll('div[style*="visibility: visible"]')
  ).map((card) => ({
    shape: mapCardElementToShape(card),
    number: mapCardElementToNumber(card),
    motif: mapCardElementToMotif(card),
    color: mapCardElementToColor(card),
  }));
