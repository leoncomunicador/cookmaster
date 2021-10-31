const usersServices = require('../services/usersServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await usersServices.createUser(name, email, password);

  res.status(201).json({ user });
};

const loginUser = async (req, res) => {
  const { email } = req.body;

  const token = await usersServices.userLogin(email);
  
  res.status(200).json({ token });
};

module.exports = {
  createUser,
  loginUser,
};
