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

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const recipe = await recipesServices.getRecipeById(id);
  return res.status(200).json(recipe);
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;

  const updatedRecipe = await recipesServices
    .updateRecipe(name, ingredients, preparation, id);

  res.status(200).json(updatedRecipe);
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  await recipesServices.deleteRecipe(id);

  res.status(204).end();
};

const editRecipeImage = async (req, res) => {
  const { id } = req.params;
  const { filename } = req.file;

  const image = `localhost:3000/src/uploads/${filename}`;

  const updateImage = await recipesServices.editRecipeImage(id, image);

  res.status(200).json(updateImage);
};

module.exports = {
  createRecipes,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  editRecipeImage,
};
