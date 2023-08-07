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
    { name: 1, email: 1 }
  );
};

module.exports = { createUser, findUser };
