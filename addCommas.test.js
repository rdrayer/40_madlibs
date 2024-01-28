const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("correctly formats numbers with commas", () => {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(1234567)).toBe("1,234,567");
    expect(addCommas(1234567890)).toBe("1,234,567,890");
  });

  test("handles small numbers without commas", () => {
    expect(addCommas(123)).toBe("123");
    expect(addCommas(99)).toBe("99");
  });

  test("handles negative numbers", () => {
    expect(addCommas(-1000)).toBe("-1,000");
    expect(addCommas(-1234567)).toBe("-1,234,567");
  });

  test("handles decimal numbers", () => {
    expect(addCommas(1234.56)).toBe("1,234.56");
    expect(addCommas(-1234.56)).toBe("-1,234.56");
  });

});
