const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/auth')
const { registerCtrl, loginCtrl } = require('../controllers/auth')



/**Crear registro */
router.post("/register", validatorRegister, registerCtrl);
/**Crear registro */
router.post("/login", validatorLogin, loginCtrl);


module.exports = router