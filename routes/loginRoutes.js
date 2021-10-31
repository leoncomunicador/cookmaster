const router = require('express').Router();
const rescue = require('express-rescue');

const usersController = require('../controllers/usersControllers');

const middleware = require('../middlewares/validateLogin');

router.post('/', middleware.verifyLoginIsValid, rescue(usersController.loginUser));
// router.post('/', rescue(usersController.loginUser));

module.exports = router;
