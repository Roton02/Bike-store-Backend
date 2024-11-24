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
    //TODO : error message gula thik kora lagbe --//
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    })
  }
}

const totalrevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.totalRevenueFromDB()
    res.status(200).json({
      message: 'Revenue calculated successfully',
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
  createOrder,
  totalrevenue,
}
