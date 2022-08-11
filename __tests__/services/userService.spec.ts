import { fake } from "sinon";
import UserService from "../../src/services/UserService";

describe("UserService", () => {
  describe("#getAll:", () => {
    it("#getAll - Get all users.", () => {
      const userList = [
        {
          name: "Juan",
          email: "juan@email.com",
        },
      ];

      const find = fake.returns(userList);
      const userService = UserService({ find });

      const result = userService.getAll();

      expect(find.callCount).toBe(1);
      expect(result).toEqual(userList);
    });
  });
});
