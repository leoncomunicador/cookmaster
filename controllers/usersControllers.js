const usersServices = require('../services/usersServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await usersServices.createUser(name, email, password);

  res.status(201).json({ user });
};

module.exports = {
  createUser,
};
