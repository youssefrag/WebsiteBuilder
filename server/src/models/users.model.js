const usersDatabase = require("./users.mongo");

const createUser = async (userData) => {
  return await usersDatabase.create(userData);
};

const findUser = async (userData) => {
  const { email, password } = userData;
  return await usersDatabase.findOne(
    {
      email,
      password,
    },
    "name email -password"
  );
};

module.exports = { createUser, findUser };
