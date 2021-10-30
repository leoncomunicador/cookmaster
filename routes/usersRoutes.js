const router = require('express').Router();
const rescue = require('express-rescue');

const usersController = require('../controllers/usersControllers');

const validateUsers = require('../middlewares/validateUsers');

router.post('/', validateUsers.verifyUserIsValid, rescue(usersController.createUser));

module.exports = router;
