const express = require("express")
const router = express.Router()
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
const authMiddleWare = require('../middleware/session')
const checkRol = require('../middleware/rol')

/**Lista los Items */
router.get("/", authMiddleWare, getItems)
    /**Obtener detalle de item */
router.get("/:id", validatorGetItem, authMiddleWare, getItem)
    /**Crear registro */
router.post("/", validatorCreateItem, authMiddleWare, checkRol(['admin']), createItem)
    /**Actualizar registro */
router.put("/:id", validatorCreateItem, validatorGetItem, authMiddleWare, checkRol(['admin']), updateItem)
    /**Actualizar registro */
router.delete("/:id", validatorGetItem, authMiddleWare, checkRol(['admin']), deleteItem)




module.exports = router