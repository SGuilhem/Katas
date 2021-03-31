import {fizzBuzz} from "./fizzbuzz"
test("Here it counts", () => {
  expect(fizzBuzz(1)).toBe('1');
});

test("Here it counts", () => {
  expect(fizzBuzz(3)).toBe('Fizz!');
});

test("Here it counts", () => {
  expect(fizzBuzz(5)).toBe('Buzz!');
});

test("Here it counts", () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz!');
});

test("Here it counts", () => {
  expect(fizzBuzz(30)).toBe('FizzBuzz!');
});

test("Here it counts", () => {
  expect(fizzBuzz(22)).toBe('22');
});

test("Here it counts", () => {
  expect(fizzBuzz(100)).toBe('Buzz!');
});
