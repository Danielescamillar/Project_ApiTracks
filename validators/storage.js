const { check } = require("express-validator")
const validatioResults = require("../utils/handelValidators")


const validatorGetItem = [


    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {

        return validatioResults(req, res, next);
    }


]

module.exports = { validatorGetItem }