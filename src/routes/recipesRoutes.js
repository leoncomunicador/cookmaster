const router = require('express').Router();
const rescue = require('express-rescue');

const recipesControllers = require('../controllers/recipesControllers');

const middleware = require('../middlewares/validateRecipes');

router.get('/:id', middleware.isValidId, rescue(recipesControllers.getRecipeById));

router.get('/', rescue(recipesControllers.getAllRecipes));

router.post('/', middleware.recipesIsValid, rescue(recipesControllers.createRecipes));

router.put('/:id', middleware.updateRecipes, rescue(recipesControllers.updateRecipe));

router.delete('/:id', middleware.updateRecipes, rescue(recipesControllers.deleteRecipe));

module.exports = router;
