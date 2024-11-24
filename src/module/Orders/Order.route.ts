import express from 'express'
import { orderController } from './Order.controller'

const OrderRouter = express.Router()

OrderRouter.post('/order-bike', orderController.createOrder)

export default OrderRouter
