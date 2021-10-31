const router = require('express').Router();
const rescue = require('express-rescue');

const usersController = require('../controllers/usersControllers');

const middleware = require('../middlewares/validateUsers');

router.post('/', middleware.verifyUserIsValid, rescue(usersController.createUser));

module.exports = router;
