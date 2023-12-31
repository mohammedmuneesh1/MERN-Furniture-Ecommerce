const express = require('express')
const router = express.Router()
const userController = require('../Controller/userController')

//middleware 
const tryCatch = require('../Middleware/errorHandler')
const verifyToken = require('../Middleware/userAuthMiddleware')

router
.post('/register',tryCatch(userController.userRegister))
.post('/login',tryCatch(userController.login))

.post('/app/settings/:id',tryCatch(userController.appSettings))
.use(verifyToken)
.get('/payment/success',userController.success)
.get('/products',tryCatch(userController.products))
.get('/products/:id',tryCatch(userController.productById))
.get('/products/category/:categoryname',tryCatch(userController.productByCategory))
.post('/:id/cart',tryCatch(userController.addToCart))
.get('/:id/cart',tryCatch(userController.showCart))
.put('/:id/cart/quantity/:itemId',tryCatch(userController.productQuantity))
.post('/:id/wishlist',tryCatch(userController.wishList))
.get('/:id/wishlist',tryCatch(userController.showWishlist))
.delete('/:id/cart/:productId',tryCatch(userController.deleteCart))
.delete('/:id/wishlist/:pId',tryCatch(userController.deleteWishlist))
.post('/:id/payment',userController.payment)
.post('/payment/cancel',userController.cancel)
.get('/:id/orders',tryCatch(userController.showOrders))


module.exports=router




