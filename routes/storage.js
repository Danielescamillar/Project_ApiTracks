const express = require("express")
const router = express.Router()
const uploadMiddleware = require('../utils/handelStorage.js')
const { validatorGetItem } = require("../validators/storage")
const { createItem, getItems, getItem, deleteItem } = require('../controllers/storage')
const authMiddleWare = require('../middleware/session')
const checkRol = require('../middleware/rol')

/**Lista los Items */
router.get("/", authMiddleWare, checkRol(['admin']), getItems)
    /**Lista detalle */
router.get("/:id", validatorGetItem, authMiddleWare, checkRol(['admin']), getItem)
    /**Crear */
router.post("/", uploadMiddleware.single("myfile"), authMiddleWare, checkRol(['admin']),createItem)
    /**Borrar */
router.delete("/:id", validatorGetItem, authMiddleWare, checkRol(['admin']),deleteItem)


module.exports = router