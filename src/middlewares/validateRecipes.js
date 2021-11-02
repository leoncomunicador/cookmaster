const verifyToken = require('../auth/jwtFunctions');

const hasNameInRecipes = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const hasIngredientsInRecipes = async (req, res, next) => {
  const { ingredients } = req.body;
  if (!ingredients) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const hasPreparationInRecipes = async (req, res, next) => {
  const { preparation } = req.body;
  if (!preparation) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const isTokenOn = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({
      message: 'missing auth token',
    });
  }
  next();
};

const isValidToken = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    verifyToken.verify(token);
  } catch (error) {
    if (error) {
      return res.status(401).json({
        message: 'jwt malformed',
      });
    }
  }
  next();
};

const isValidId = async (req, res, next) => {
  const { id } = req.params;
  if (!id || id.length !== 24) {
    return res.status(404).json({
      message: 'recipe not found',
    });
  }
  next();
};

const isTokenOk = [
  isTokenOn,
  isValidToken,
];

const recipesIsValid = [
  hasNameInRecipes,
  hasIngredientsInRecipes,
  hasPreparationInRecipes,
  isValidToken,
];

module.exports = {
  recipesIsValid,
  isValidToken,
  isValidId,
  isTokenOk,
};