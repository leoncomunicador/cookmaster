const router = require('express').Router();
const rescue = require('express-rescue');

const recipesControllers = require('../controllers/recipesControllers');

const middleware = require('../middlewares/validateRecipes');
const { changeImage } = require('../middlewares/multerMiddleware');

router.get('/:id', middleware.isValidId, rescue(recipesControllers.getRecipeById));

router.get('/', rescue(recipesControllers.getAllRecipes));

router.post('/', middleware.recipesIsValid, rescue(recipesControllers.createRecipes));

router.put('/:id', middleware.isTokenOk, rescue(recipesControllers.updateRecipe));

router.delete('/:id', middleware.isTokenOk, rescue(recipesControllers.deleteRecipe));

router.put('/:id/image', middleware.isTokenOk,
changeImage(), rescue(recipesControllers.editRecipeImage));

module.exports = router;
