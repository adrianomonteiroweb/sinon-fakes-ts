import { fake } from "sinon";

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
      expect(find.firstArg).toBe(undefined);
      expect(result).toEqual(userList);
    });
  });
});
