const { matchedData } = require('express-validator')
const { tracksModel, usersModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async(req, res) => {


        try {
            const data = await usersModel.find({})
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

        req = matchedData(req);
        const { id } = req;
        const data = await usersModel.findById(id)
        res.send({ data })

    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
    }
    /**
     * actualizar un registro
     * @param {*} req 
     * @param {*} res 
     */
const updateItem = async(req, res) => {

        try {

            const { id, ...body } = matchedData(req);
            const data = await usersModel.findOneAndUpdate(
                id,
                body
            );
            res.send({ data });
        } catch (e) {

            handleHttpError(res, "ERROR_UPDATE_ITEM");

        }
    }
    /**
     * eliminar un registro
     * @param {*} req 
     * @param {*} res 
     */
const deleteItem = async(req, res) => {

    try {

        req = matchedData(req);
        const { id } = req;
        const data = await usersModel.delete({ _id: id })
        res.send({ data })

    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}


module.exports = { getItems, getItem, updateItem, deleteItem }