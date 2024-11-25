/* eslint-disable @typescript-eslint/no-explicit-any */
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.name,
      error: error,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    })
  }
}

const totalrevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.totalRevenueFromDB()
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result[0],
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.name,
      error: error,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    })
  }
}

export const orderController = {
  createOrder,
  totalrevenue,
}
