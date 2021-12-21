import { solve } from "./solve";
import { Color, Motif, Number, Shape } from "./types";

describe("solve", () => {
  it("should", () => {
    expect(solve([])).toEqual([
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
    ]);
  });
});
