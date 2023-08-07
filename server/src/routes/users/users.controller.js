const { createUser } = require("../../models/users.model");

const httpCreateUser = async (req, res) => {
  return res.status(200).json(await createUser());
};

module.exports = { httpCreateUser };
