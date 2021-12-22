import {Card, Color, Motif, Shape} from "./types";

const mapCardElementToNumber = (card: Element) =>
    (card.firstChild as HTMLDivElement).childElementCount - 1;

const mapCardElementToShape = (card: Element) => {
  const svgElement = card.firstChild!.firstChild!.firstChild as SVGElement;
  const shape = svgElement.getAttribute("href");
    if (shape === "#squiggle") return Shape.Squiggle;
    if (shape === "#oval") return Shape.Circle;
    if (shape === "#diamond") return Shape.Square;
    throw new Error();
};

const mapCardElementToColor = (card: Element) => {
  const svgElement = (card.firstChild!.firstChild as SVGElement).children[1] as SVGElement;
  const color = svgElement.getAttribute("stroke");
    if (color === "#800080") return Color.Violet;
    if (color === "#008002") return Color.Green;
    if (color === "#ff0101") return Color.Red;
    throw new Error();
};

const mapCardElementToMotif = (card: Element) => {
    const svgElement = card.firstChild!.firstChild!.firstChild as SVGElement;
    if (svgElement.getAttribute("fill") === "transparent") {
        return Motif.Transparent;
    }
    if (svgElement.getAttribute("mask")!.includes("mask-stripe")) {
        return Motif.Stripe;
    }
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