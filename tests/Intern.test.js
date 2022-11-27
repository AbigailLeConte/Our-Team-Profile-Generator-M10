const Intern = require("../Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const Intern= new Intern("Abigail");

      expect(Intern.name).toEqual("Abigail");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Intern
    ();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Intern
    (3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
});