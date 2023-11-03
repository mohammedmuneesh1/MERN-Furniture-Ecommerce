const express = require('express')
const router = express.Router()
const controller = require('../Controller/adminController')

//middleware start
const tryCatch = require('../Middleware/errorHandler')
const verifyToken = require('../Middleware/authmiddleware')
const imgUpload = require('../Middleware/Image Upload/imageUpload')
//middleware end
router
.post('/login',tryCatch(controller.login))
.get('/products',tryCatch(controller.allProduct))
.get('/products/category',tryCatch(controller.productByCategory))
.get('/products/:id',tryCatch(controller.productById))
.use(verifyToken)
.get('/users',tryCatch(controller.viewUsers))
.post('/products',imgUpload,tryCatch(controller.createProduct))
.get('/users/:id',tryCatch(controller.userById))
.delete('/products/:id',tryCatch(controller.deleteProduct))
.put('/products',imgUpload,tryCatch(controller.updateProduct))
.get('/orders',tryCatch(controller.orderDetails))
.get('/order/:id',tryCatch(controller.UserOrder))
.get('/stats',tryCatch(controller.analysis))









module.exports=router