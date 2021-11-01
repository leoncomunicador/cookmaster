const recipesModels = require('../models/recipesModels');
const verifyToken = require('../auth/jwtFunctions');

const createRecipes = async (token, name, ingredients, preparation) => {
  const validToken = verifyToken.verify(token);
  const { _id: userId } = validToken;
  const recipe = await recipesModels.createRecipes(name, ingredients, preparation, userId);
  if (validToken) {
    return recipe;
  }
};

const getAllRecipes = async (name, ingredients, preparation, userId) => {
  const recipes = await recipesModels.getAllRecipes(name, ingredients, preparation, userId);
  return recipes;
};

const getRecipeById = async (id) => {
  const recipe = await recipesModels.getRecipeById(id);
  return recipe;
};

const updateRecipe = async (name, ingredients, preparation, userId) => {
  const recipe = await recipesModels.updateRecipe(name, ingredients, preparation, userId);
  return recipe;
};

// req. 8 excludeRecipes
// const { user: admin } = validToken
// if (admin === 'admin') return .....

module.exports = {
  createRecipes,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
};
