import { helloWorld } from ".";

describe("helloWorldTest", () => {
  test("Check return type of function", () => {
    expect(helloWorld()).toBe("Hello World");
  });
});
