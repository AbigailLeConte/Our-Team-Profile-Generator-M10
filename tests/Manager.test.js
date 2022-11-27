const Manager = require("../Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const Manager
     = new Manager
    ("Sarah", 3);

      expect(Manager
    .name).toEqual("Abigail");
      expect(Manager
    .age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Manager
    ();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Manager
    (3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
});