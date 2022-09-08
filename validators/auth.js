const { check } = require("express-validator")
const validatioResults = require("../utils/handelValidators")

const validatorRegister = [


    check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("age").exists().notEmpty().isNumeric(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),

    (req, res, next) => {

        return validatioResults(req, res, next);
    }


]

const validatorLogin = [

    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),

    (req, res, next) => {

        return validatioResults(req, res, next);
    }


]

module.exports = { validatorRegister, validatorLogin }