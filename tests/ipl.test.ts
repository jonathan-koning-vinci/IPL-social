import { isValidEmail } from "../src/ipl";

describe("isValidEmail", () => {
  describe("validate email", () => {
    it("should reject email with spaces", () => {
      const actual = isValidEmail("exam @email.com");
      expect(actual).toBe("Invalid email: contains spaces");
    });

    it("should reject email without @", () => {
      const actual = isValidEmail("example.com");
      expect(actual).toBe("Invalid email: missing @");
    });

    it("should reject email with dot at the end of domain", () => {
      const actual = isValidEmail("user@example.");
      expect(actual).toBe("Invalid email: invalid domain");
    });

    it("should accept valid email", () => {
      const actual = isValidEmail("user@example.com");
      expect(actual).toBe("OK");
    });
  });
  
});