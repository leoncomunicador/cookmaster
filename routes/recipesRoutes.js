const router = require('express').Router();
const rescue = require('express-rescue');

const recipesControllers = require('../controllers/recipesControllers');

const middleware = require('../middlewares/validateRecipes');

router.get('/', rescue(recipesControllers.getAllRecipes));

router.post('/', middleware.recipesIsValid, rescue(recipesControllers.createRecipes));

module.exports = router;
