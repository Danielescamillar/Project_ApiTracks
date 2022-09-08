const { handleHttpError } = require('../utils/handleError')
const { verifyToken } = require('../utils/handleJwt')
const { usersModel } = require('../models')

const authMiddleWare = async(req, res, next) => {

    try {

        if (!req.headers.authorization) {
            handleHttpError(res, 'NEED_SESSION', 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token)
        console.log(req.body);

        if (!dataToken._id) {
            handleHttpError(res, 'ERROR_ID_TOKEN', 401)
            return
        }
        const user = await usersModel.findById(dataToken._id)
        req.user = user
        next()

    } catch (error) {
        console.log(error)
        handleHttpError(res, 'NOT_SESSION', 401)
    }
}

module.exports = authMiddleWare