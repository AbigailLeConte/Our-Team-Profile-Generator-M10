const Employee = require("../Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const Employee = new Employee("Abigail");

      expect(Employee.name).toEqual("Abigail");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
});
