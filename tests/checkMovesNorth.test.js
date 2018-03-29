import GameEngineChipMoves from "../scripts/gameEngineChipMoves";
import Chip from "../scripts/chip";
import * as testConstants from "./testConstants";

beforeEach(() => {
  testConstants.clearChipsFromSquares();
});

test("chip null should return (undefined)", () => {
  expect(GameEngineChipMoves.checkMovesNorth(null, testConstants.squares[0])).toBe(undefined);
});

test("chip(1) on [2,2] with square [2,1] containing a chip ", () => {
  testConstants.chipThree.validMoves = [[1, 1], null, null, [1, 2]];
  testConstants.squares[2].activeChip = testConstants.chipTwo;
  expect(GameEngineChipMoves.checkMovesNorth(testConstants.chipThree, testConstants.squares[2])).toEqual(
    testConstants.chipThree.validMoves
  );
});
