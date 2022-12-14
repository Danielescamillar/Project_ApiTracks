const { check } = require("express-validator")
const validatioResults = require("../utils/handelValidators")

const validatorCreateItem = [

    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("url").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {

        return validatioResults(req, res, next);
    }


]

const validatorGetItem = [


    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {

        return validatioResults(req, res, next);
    }


]

module.exports = { validatorCreateItem, validatorGetItem }