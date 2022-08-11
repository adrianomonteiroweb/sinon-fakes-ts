function UserService(userRepository) {
  function getAll() {
    return userRepository.find();
  }

  return {
    getAll,
  };
}

export default UserService;
