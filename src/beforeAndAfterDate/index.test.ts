import { beforeAndAfterDate } from ".";

describe("beforeAndAfterDate", () => {
  const dates = [
    new Date("2023-11-07"),
    new Date("2023-11-08"),
    new Date("2023-11-09"),
    new Date("2023-11-10"),
    new Date("2023-11-11"),
  ];

  it("should return correct before and after date", () => {
    const date = new Date("2023-11-09");

    const { beforeDate, afterDate } = beforeAndAfterDate({ dates, date });

    expect(beforeDate).toEqual(new Date("2023-11-08"));
    expect(afterDate).toEqual(new Date("2023-11-10"));
  });

  it("should return undefined for before date", () => {
    const date = new Date("2023-11-07");

    const { beforeDate } = beforeAndAfterDate({ dates, date });

    expect(beforeDate).toEqual(null);
  });

  it("should return undefined for after date", () => {
    const date = new Date("2023-11-11");

    const { afterDate } = beforeAndAfterDate({ dates, date });

    expect(afterDate).toEqual(null);
  });
});
