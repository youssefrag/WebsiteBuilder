const { createUser, findUser } = require("../../models/users.model");

const httpCreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  return res.status(200).json(await createUser({ name, email, password }));
};

const httpFindUser = async (req, res) => {
  console.log("reached here");
  const { email, password } = req.body;
  const foundUser = await findUser({ email, password });
  console.log(foundUser);
  if (foundUser) {
    return res.status(200).json(foundUser);
  }
};

module.exports = { httpCreateUser, httpFindUser };
