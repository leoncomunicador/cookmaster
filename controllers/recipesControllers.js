const recipesServices = require('../services/recipesServices');

const createRecipes = async (req, res) => {
  const { authorization: token } = req.headers;
  const { name, ingredients, preparation } = req.body;

  const recipe = await recipesServices.createRecipes(token, name, ingredients, preparation);

  res.status(201).json({ recipe });
};

const getAllRecipes = async (req, res) => {
  const recipes = await recipesServices.getAllRecipes();

  res.status(200).json(recipes);
};

module.exports = {
  createRecipes,
  getAllRecipes,
};
