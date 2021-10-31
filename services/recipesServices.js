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

module.exports = {
  createRecipes,
};
