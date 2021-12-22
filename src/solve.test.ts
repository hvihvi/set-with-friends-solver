import { solve } from "./solve";
import { Color, Motif, Number, Shape } from "./types";

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
    expect(output).toEqual([
      {
        color: Color.Green,
        motif: Motif.Transparent,
        number: Number.One,
        shape: Shape.Squiggle,
      },
      {
        color: Color.Violet,
        motif: Motif.Stripe,
        number: Number.Two,
        shape: Shape.Square,
      },
      {
        color: Color.Red,
        motif: Motif.Full,
        number: Number.Three,
        shape: Shape.Circle,
      },
    ]);
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
    expect(output).toEqual([
      {
        color: Color.Green,
        motif: Motif.Stripe,
        number: Number.One,
        shape: Shape.Square,
      },
      {
        color: Color.Red,
        motif: Motif.Transparent,
        number: Number.Two,
        shape: Shape.Squiggle,
      },
      {
        color: Color.Violet,
        motif: Motif.Full,
        number: Number.Three,
        shape: Shape.Circle,
      },
    ]);
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
    expect(output).toEqual([
      {
        color: Color.Red,
        motif: Motif.Stripe,
        number: Number.One,
        shape: Shape.Square,
      },
      {
        color: Color.Red,
        motif: Motif.Stripe,
        number: Number.One,
        shape: Shape.Squiggle,
      },
      {
        color: Color.Red,
        motif: Motif.Stripe,
        number: Number.One,
        shape: Shape.Circle,
      },
    ]);
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
    expect(output).toEqual([
      {
        color: Color.Violet,
        motif: Motif.Transparent,
        number: Number.One,
        shape: Shape.Square,
      },
      {
        color: Color.Green,
        motif: Motif.Transparent,
        number: Number.Two,
        shape: Shape.Square,
      },
      {
        color: Color.Red,
        motif: Motif.Transparent,
        number: Number.Three,
        shape: Shape.Square,
      },
    ]);
  });
});
