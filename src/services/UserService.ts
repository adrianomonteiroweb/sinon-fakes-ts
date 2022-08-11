import { IRepository } from "../interfaces/IRepository";

function UserService(userRepository: IRepository) {
  function getAll(): Array<object> {
    try {
      return userRepository.find();
    } catch (error) {
      if (error.message === "Could not connect to db.") {
        throw new Error("Unavailable service.");
      }

      throw error;
    }
  }

  return {
    getAll,
  };
}

export default UserService;
