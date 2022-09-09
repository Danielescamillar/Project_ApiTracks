const { check } = require("express-validator")
const validatioResults = require("../utils/handelValidators")

const validatorUpdateItem = [

    check("name").exists().notEmpty().optional(),
    check("age").exists().notEmpty().optional(),
    check("email").exists().notEmpty().optional(),
    check("role").exists().notEmpty().optional(),

    (req, res, next) => {

        return validatioResults(req, res, next);
    }


]

const validatorGetItem = [


    check("id").exists().notEmpty(),
    (req, res, next) => {

        return validatioResults(req, res, next);
    }


]

module.exports = { validatorUpdateItem, validatorGetItem }