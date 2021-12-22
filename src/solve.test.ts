import { findMissing, findMissingDimension, solve } from "./solve";
import { Card, Color, Motif, Number, Shape } from "./types";

describe("solve", () => {
  it("should solve example 1", () => {
    //given
    const input = [
      { shape: 1, number: 2, motif: 2, color: 0 },
      { shape: 2, number: 0, motif: 0, color: 0 },
      { shape: 2, number: 1, motif: 1, color: 0 },
      { shape: 0, number: 0, motif: 0, color: 1 },
      { shape: 0, number: 2, motif: 1, color: 1 },
      { shape: 1, number: 1, motif: 2, color: 1 },
      { shape: 2, number: 2, motif: 0, color: 1 },
      { shape: 2, number: 0, motif: 1, color: 1 },
      { shape: 0, number: 0, motif: 1, color: 2 },
      { shape: 1, number: 2, motif: 2, color: 2 },
      { shape: 1, number: 1, motif: 1, color: 2 },
      { shape: 2, number: 0, motif: 1, color: 2 },
    ];
    //when
    const output = solve(input);
    //then
    expect(output).toContainEqual({
      color: Color.Green,
      motif: Motif.Transparent,
      number: Number.One,
      shape: Shape.Squiggle,
    });
    expect(output).toContainEqual({
      color: Color.Violet,
      motif: Motif.Stripe,
      number: Number.Two,
      shape: Shape.Square,
    });
    expect(output).toContainEqual({
      color: Color.Red,
      motif: Motif.Full,
      number: Number.Three,
      shape: Shape.Circle,
    });
    expect(output).toHaveLength(3);
  });
  it("should solve example 2", () => {
    //given
    const input = [
      { shape: 1, number: 2, motif: 2, color: 0 },
      { shape: 2, number: 0, motif: 0, color: 0 },
      { shape: 0, number: 2, motif: 1, color: 1 },
      { shape: 1, number: 1, motif: 2, color: 1 },
      { shape: 2, number: 1, motif: 0, color: 1 },
      { shape: 2, number: 2, motif: 0, color: 1 },
      { shape: 2, number: 0, motif: 1, color: 1 },
      { shape: 0, number: 0, motif: 0, color: 2 },
      { shape: 0, number: 1, motif: 0, color: 2 },
      { shape: 0, number: 0, motif: 1, color: 2 },
      { shape: 1, number: 1, motif: 1, color: 2 },
      { shape: 2, number: 0, motif: 1, color: 2 },
    ];
    //when
    const output = solve(input);
    //then
    expect(output).toContainEqual({
      color: Color.Green,
      motif: Motif.Stripe,
      number: Number.One,
      shape: Shape.Square,
    });
    expect(output).toContainEqual({
      color: Color.Red,
      motif: Motif.Transparent,
      number: Number.Two,
      shape: Shape.Squiggle,
    });
    expect(output).toContainEqual({
      color: Color.Violet,
      motif: Motif.Full,
      number: Number.Three,
      shape: Shape.Circle,
    });
    expect(output).toHaveLength(3);
  });

  it("should solve example 3", () => {
    //given
    const input = [
      { shape: 2, number: 0, motif: 0, color: 0 },
      { shape: 0, number: 0, motif: 2, color: 1 },
      { shape: 0, number: 1, motif: 2, color: 1 },
      { shape: 0, number: 2, motif: 1, color: 1 },
      { shape: 1, number: 1, motif: 2, color: 1 },
      { shape: 1, number: 2, motif: 0, color: 1 },
      { shape: 2, number: 1, motif: 0, color: 1 },
      { shape: 2, number: 2, motif: 0, color: 1 },
      { shape: 0, number: 0, motif: 2, color: 2 },
      { shape: 0, number: 0, motif: 0, color: 2 },
      { shape: 0, number: 2, motif: 0, color: 2 },
      { shape: 0, number: 0, motif: 1, color: 2 },
      { shape: 1, number: 0, motif: 1, color: 2 },
      { shape: 1, number: 1, motif: 1, color: 2 },
      { shape: 2, number: 0, motif: 1, color: 2 },
    ];
    //when
    const output = solve(input);
    //then
    expect(output).toContainEqual({
      color: Color.Red,
      motif: Motif.Stripe,
      number: Number.One,
      shape: Shape.Square,
    });
    expect(output).toContainEqual({
      color: Color.Red,
      motif: Motif.Stripe,
      number: Number.One,
      shape: Shape.Squiggle,
    });
    expect(output).toContainEqual({
      color: Color.Red,
      motif: Motif.Stripe,
      number: Number.One,
      shape: Shape.Circle,
    });
    expect(output).toHaveLength(3);
  });

  it("should solve example 4", () => {
    //given
    const input = [
      { shape: 2, number: 0, motif: 0, color: 0 },
      { shape: 0, number: 0, motif: 2, color: 1 },
      { shape: 0, number: 1, motif: 2, color: 1 },
      { shape: 0, number: 2, motif: 1, color: 1 },
      { shape: 1, number: 1, motif: 2, color: 1 },
      { shape: 1, number: 2, motif: 0, color: 1 },
      { shape: 2, number: 1, motif: 0, color: 1 },
      { shape: 2, number: 2, motif: 0, color: 1 },
      { shape: 0, number: 0, motif: 2, color: 2 },
      { shape: 0, number: 0, motif: 0, color: 2 },
      { shape: 0, number: 2, motif: 0, color: 2 },
      { shape: 0, number: 0, motif: 1, color: 2 },
      { shape: 1, number: 0, motif: 1, color: 2 },
      { shape: 1, number: 1, motif: 1, color: 2 },
      { shape: 2, number: 0, motif: 1, color: 2 },
    ];
    //when
    const output = solve(input);
    //then
    expect(output).toContainEqual({
      color: Color.Violet,
      motif: Motif.Transparent,
      number: Number.One,
      shape: Shape.Square,
    });
    expect(output).toContainEqual({
      color: Color.Green,
      motif: Motif.Transparent,
      number: Number.Two,
      shape: Shape.Square,
    });
    expect(output).toContainEqual({
      color: Color.Red,
      motif: Motif.Transparent,
      number: Number.Three,
      shape: Shape.Square,
    });
    expect(output).toHaveLength(3);
  });
});

describe("findMissing", () => {
  it("should find missing card example 1", () => {
    // given
    const card1: Card = {
      color: 1,
      motif: 1,
      number: 1,
      shape: 1,
    };
    const card2: Card = {
      color: 0,
      motif: 0,
      number: 0,
      shape: 0,
    };
    // when
    const output = findMissing(card1, card2);
    //then
    expect(output).toEqual({
      color: 2,
      motif: 2,
      number: 2,
      shape: 2,
    });
  });

  it("should find missing card example 2", () => {
    // given
    const card1: Card = {
      color: 1,
      motif: 1,
      number: 1,
      shape: 1,
    };
    const card2: Card = {
      color: 1,
      motif: 1,
      number: 0,
      shape: 0,
    };
    // when
    const output = findMissing(card1, card2);
    //then
    expect(output).toEqual({
      color: 1,
      motif: 1,
      number: 2,
      shape: 2,
    });
  });

  it("should find missing card example 3", () => {
    // given
    const card1: Card = {
      color: 1,
      motif: 1,
      number: 2,
      shape: 2,
    };
    const card2: Card = {
      color: 0,
      motif: 0,
      number: 0,
      shape: 0,
    };
    // when
    const output = findMissing(card1, card2);
    //then
    expect(output).toEqual({
      color: 2,
      motif: 2,
      number: 1,
      shape: 1,
    });
  });
});

describe("findMissingDimension", () => {
  it("should find missing dimension1", () => {
    expect(findMissingDimension(0, 0)).toEqual(0);
  });
  it("should find missing dimension2", () => {
    expect(findMissingDimension(0, 1)).toEqual(2);
  });
  it("should find missing dimension3", () => {
    expect(findMissingDimension(0, 2)).toEqual(1);
  });
  it("should find missing dimension4", () => {
    expect(findMissingDimension(1, 0)).toEqual(2);
  });
  it("should find missing dimension5", () => {
    expect(findMissingDimension(1, 1)).toEqual(1);
  });
  it("should find missing dimension6", () => {
    expect(findMissingDimension(1, 2)).toEqual(0);
  });
  it("should find missing dimension7", () => {
    expect(findMissingDimension(2, 0)).toEqual(1);
  });
  it("should find missing dimension8", () => {
    expect(findMissingDimension(2, 1)).toEqual(0);
  });
  it("should find missing dimension9", () => {
    expect(findMissingDimension(2, 2)).toEqual(2);
  });
});
