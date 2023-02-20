const data = require("./data");

describe(" checking myAddress object values ", () => {
  describe("This is specifically ids for ...", () => {
    it("check myAddress streetName", () => {
      expect(data.myAddress.streetName).toBe("london-bridge");
    });
  });

  it("check myAddress flatName value", () => {
    expect(data.myAddress.flatNumber).toEqual(12);
  });
});

describe(" checking array ", () => {
  it("check length of array", () => {
    expect(data.myArray).toBeTruthy();
    expect(data.myArray).toHaveLength(7);
  });

  it("check second element value", () => {
    expect(data.myArray[1]).toBe(2);
  });
});

describe(" checking sum function", () => {
  it("check sum function return value", () => {
    let result = data.sum(3, 2);
    expect(result).toBe(5);
  });

  // home work - mock
  it("check sum function has 2 arguments", () => {});
});
