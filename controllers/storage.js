const fs = require("fs");
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
const { handleHttpError } = require('../utils/handleError');


/**
 * obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async(req, res) => {

        try {
            const data = await storageModel.find({})
            res.send({ data })

        } catch (error) {

            handelHttpError(res, "ERROR_GET_ITEMS")
        }
    }
    /**
     * obtener un detalle
     * @param {*} req 
     * @param {*} res 
     */
const getItem = async(req, res) => {

        try {
            const { id } = matchedData(req);
            const data = await storageModel.findById(id)
            res.send({ data })

        } catch (error) {

            handleHttpError(res, "ERROR_DETAIL_ITEMS")
        }
    }
    /**
     * insertar un registro
     * @param {*} req 
     * @param {*} res 
     */
const createItem = async(req, res) => {

        try {

            const { body, file } = req
            console.log(file)
            const filename = {

                filename: file.filename,
                url: `${PUBLIC_URL}/${file.filename}`
            }

            const data = await storageModel.create(filename)


            res.send({ data })
        } catch (error) {
            handleHttpError(res, "ERROR_CREATE_ITEMS")

        }
    }
    /**
     * eliminar un registro
     * @param {*} req 
     * @param {*} res 
     */
const deleteItem = async(req, res) => {

    try {

        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne(id)
        const { filename } = dataFile;
        filePath = `${MEDIA_PATH}/${filename}`;
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        }
        res.send({ data })

    } catch (error) {

        handleHttpError(res, "ERROR_DELETE_ITEMS");
    }
}


module.exports = { getItems, getItem, createItem, deleteItem }