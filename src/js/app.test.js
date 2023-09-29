import getRandomNumber from "./GetRandomNumber";
import expect from "expect";

describe("getRandomNumber", () => {
  test("should return a number between 0 and 15", () => {
    const randomNumber = getRandomNumber(0);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(15);
  });

  it("should not return the same number as previous count", () => {
    const prev_count = 5;
    const randomNumber = getRandomNumber(prev_count);
    expect(randomNumber).not.toBe(prev_count);
  });
});
