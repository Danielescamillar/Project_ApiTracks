const express = require("express")
const router = express.Router()
const { validatorUpdateItem, validatorGetItem } = require("../validators/users")
const { getItems, getItem, updateItem, deleteItem } = require("../controllers/users")
const authMiddleWare = require('../middleware/session')
const checkRol = require('../middleware/rol')

/**Lista los Items */
router.get("/", authMiddleWare, checkRol(['admin']), getItems)
    /**Obtener detalle de item */
router.get("/:id", validatorGetItem, authMiddleWare, checkRol(['admin']), getItem)
    /**Actualizar registro */
router.put("/:id", validatorUpdateItem, validatorGetItem, authMiddleWare, checkRol(['admin']), updateItem)
    /**Actualizar registro */
router.delete("/:id", validatorGetItem, authMiddleWare, checkRol(['admin']), deleteItem)




module.exports = router