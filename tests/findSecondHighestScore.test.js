import GameEngine from "../scripts/gameEngine";
import * as testConstants from "./testConstants";

test("no pips array should return (undefined)", () => {
  expect(GameEngine.findSecondHighestScore(null)).toBe(undefined);
});

test("no pips should return -1 (4 players)", () => {
  expect(GameEngine.findSecondHighestScore([0, 0, 0, 0])).toEqual(-1);
});

test("all equal pip counts should return -1 (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([2, 2, 2])).toEqual(-1);
});

test("no pips should return -1 (2 players)", () => {
  expect(GameEngine.findSecondHighestScore([0, 0])).toEqual(-1);
});

test("all equal pip counts should return -1 (2 players)", () => {
  expect(GameEngine.findSecondHighestScore([5, 5])).toEqual(-1);
});

test("no pips should return -1 (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([0, 0, 0])).toEqual(-1);
});

test("all equal pip counts should return -1 (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([10, 10, 10])).toEqual(-1);
});

test("[0,5,0] should return -1 (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([0, 5, 0])).toEqual(-1);
});

test("[0,6,6] should return -1 (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([0, 6, 6])).toEqual(-1);
});

test("[7,0,0,7] should return -1 (4 players)", () => {
  expect(GameEngine.findSecondHighestScore([7, 0, 0, 7])).toEqual(-1);
});

test("[9,9,9,0] should return -1 (4 players)", () => {
  expect(GameEngine.findSecondHighestScore([9, 9, 9, 0])).toEqual(-1);
});

test("[2,1] should return [0] (2 players)", () => {
  expect(GameEngine.findSecondHighestScore([2, 1])).toEqual([0]);
});

test("[2,4] should return [1] (2 players)", () => {
  expect(GameEngine.findSecondHighestScore([2, 4])).toEqual([1]);
});

test("[2,6,6] should return [0] (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([2, 6, 6])).toEqual([0]);
});

test("[2,4,6] should return [1] (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([2, 4, 6])).toEqual([1]);
});

test("[0,6,3] should return [2] (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([0, 6, 3])).toEqual([2]);
});

test("[3,6,3] should return [0,2] (3 players)", () => {
  expect(GameEngine.findSecondHighestScore([3, 6, 3])).toEqual([0, 2]);
});

test("[1,9,9,0] should return [0] (4 players)", () => {
  expect(GameEngine.findSecondHighestScore([1, 9, 9, 0])).toEqual([0]);
});

test("[1,9,9,0] should return [0] (4 players)", () => {
  expect(GameEngine.findSecondHighestScore([1, 9, 9, 0])).toEqual([0]);
});

test("[3,9,3,3] should return [0,2,3] (4 players)", () => {
  expect(GameEngine.findSecondHighestScore([3, 9, 3, 3])).toEqual([0, 2, 3]);
});

test("[4,2,3,1] should return [2] (4 players)", () => {
  expect(GameEngine.findSecondHighestScore([4, 2, 3, 1])).toEqual([2]);
});