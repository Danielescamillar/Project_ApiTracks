const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Objeto del usuario
 * @param {*} user 
 */
const tokenSing = async(user) => {

        const sing = jwt.sign({
                _id: user._id,
                role: user.role
            },
            JWT_SECRET, { expiresIn: "8h" }
        )
        return sing
    }
    /**
     * Se debe pasar el token de sesion JWT
     * @param {*} tokenJwt 
     * @returns 
     */
const verifyToken = async(tokenJwt) => {

    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = { tokenSing, verifyToken }