const usersDatabase = require("./users.mongo");

const createUser = async (userData) => {
  await usersDatabase.create(userData);
};
