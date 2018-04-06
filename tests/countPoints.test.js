import GameEngine from "../scripts/gameEngine";
import * as testConstants from "./testConstants";

test("no pips array should return (undefined)", () => {
  expect(GameEngine.findSecondHighestPipCountIndices(null)).toBe(undefined);
});

test("2p 1 room, 0 pips should return [0,0]", () => {
  expect(GameEngine.countPoints([[0, 0]]).toEqual([0, 0]));
});

test("2p 2r, 0 pips should return [0,0]", () => {
  expect(GameEngine.countPoints([[0, 0], [0, 0]]).toEqual([0, 0]));
});

test("2p 1r, 1 pip for 1st player should return [4,0]", () => {
  expect(GameEngine.countPoints([[1, 0]]).toEqual([4, 0]));
});

test("2p 1r, 1 pip for 2nd player should return [0,4]", () => {
  expect(GameEngine.countPoints([[0, 1]]).toEqual([0, 4]));
});

test("2p 4r, mixed pips should return [4,12]", () => {
  expect(GameEngine.countPoints([[2, 3], [0, 0], [1, 13], [4, 4]]).toEqual([4, 12]));
});

test("2p 6r, mixed pips should return [4,20]", () => {
  expect(GameEngine.countPoints([[7, 0], [1, 2], [1, 13], [20, 25], [2, 3], [0, 1]]).toEqual([4, 20]));
});

test("2p 7r, mixed pips should return [20,8]", () => {
  expect(GameEngine.countPoints([[2, 3], [4, 3], [3, 2], [1, 0], [2, 3], [2, 1], [3, 1]]).toEqual([20, 8]));
});

test("2p 5r, all rooms the same should return [20,20]", () => {
  expect(GameEngine.countPoints([[2, 2], [2, 2], [2, 2], [2, 2], [2, 2]]).toEqual([20, 20]));
});

test("3p 1r, 0 pips should return [0,0,0]", () => {
  expect(GameEngine.countPoints([[0, 0, 0]]).toEqual([0, 0, 0]));
});

test("4p 1r, 0 pips should return [0,0,0,0]", () => {
  expect(GameEngine.countPoints([[0, 0, 0, 0]]).toEqual([0, 0, 0, 0]));
});
test("3p 2r, 0 pips should return [0,0,0]", () => {
  expect(GameEngine.countPoints([[0, 0, 0], [0, 0, 0]]).toEqual([0, 0, 0]));
});

test("4p 2r, 0 pips should return [0,0,0,0]", () => {
  expect(GameEngine.countPoints([[0, 0, 0, 0], [0, 0, 0, 0]]).toEqual([0, 0, 0, 0]));
});
