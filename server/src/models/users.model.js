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

const userExists = async (email) => {
  const user = await usersDatabase.findOne({ email }, { email: 1 });
  if (!user) {
    return false;
  }
  return true;
};

module.exports = { createUser, findUser, userExists };
