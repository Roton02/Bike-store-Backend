import { Request, Response } from 'express'
import { OrderServices } from './Order.services'

const createOrder = async (req: Request, res: Response) => {
  try {
    const OrderData = req.body
    const result = await OrderServices.OrderBikeIntroDB(OrderData)
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    })
  }
}


export const orderController = {
    createOrder
}
