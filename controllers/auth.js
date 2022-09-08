const { matchedData } = require('express-validator')
const { encrypt, compare } = require('../utils/handlePassword')
const { tokenSing } = require('../utils/handleJwt')
const { usersModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * Controlador encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async(req, res) => {

        try {
            req = matchedData(req);
            const password = await encrypt(req.password);
            const body = {...req, password };
            const dataUser = await usersModel.create(body);
            const data = {
                token: await tokenSing(dataUser),
                user: dataUser
            }

            res.send({ data });
        } catch (error) {
            handleHttpError(res, "ERROR_REGISTER_USER")
        }

    }
    /**
     * Controlador para loggear usuario
     * @param {*} req 
     * @param {*} res 
     */
const loginCtrl = async(req, res) => {

    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email }).select('password name role email');
        if (!user) {
            handleHttpError(res, "USER_NOT_EXIST", 404)
            return
        }
        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword);
        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401)
            return
        }
        user.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSing(user),
            user
        }

        res.send({ data });
    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }

}

module.exports = { registerCtrl, loginCtrl }