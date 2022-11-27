const Engineer = require("../Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const Engineer = new Engineer("Abigail");

      expect(Engineer.name).toEqual("Abigail");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Engineer
    ();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Engineer
    (3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
});