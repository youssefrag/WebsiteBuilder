const {
  createUser,
  findUser,
  userExists,
} = require("../../models/users.model");

const httpCreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (await userExists(email)) {
    return res.status(400).json({ message: "Email already in use" });
  }
  return res.status(200).json(await createUser({ name, email, password }));
};

const httpFindUser = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await findUser({ email, password });
  if (foundUser) {
    return res.status(200).json(foundUser);
  } else {
    return res.status(400).json({ message: "Wrong login info" });
  }
};

module.exports = { httpCreateUser, httpFindUser };
