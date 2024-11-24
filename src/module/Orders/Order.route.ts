import express from 'express'
import { orderController } from './Order.controller'

const OrderRouter = express.Router()

OrderRouter.post('/', orderController.createOrder)
OrderRouter.get('/revenue', orderController.totalrevenue)

export default OrderRouter
