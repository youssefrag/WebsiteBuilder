const { createUser } = require("../../models/users.model");

const httpCreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  return res.status(200).json(await createUser({ name, email, password }));
};

module.exports = { httpCreateUser };
