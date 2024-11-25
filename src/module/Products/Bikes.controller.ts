/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { bikesServices } from './Bikes.services'
// import BikeZodValidation from './Bike.validation'

const createBike = async (req: Request, res: Response) => {
  try {
    const body = req.body
    // const validation = BikeZodValidation.parse(body)
    const result = await bikesServices.createBikesIntroDB(body)
    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
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

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query
    // const term = typeof searchTerm === 'string' ? searchTerm : undefined;
    const result = await bikesServices.getAllBikesFromDb(searchTerm as string)
    //throw an error
    if (result.length > 0) {
      res.status(200).json({
        message: 'Bikes retrieved successfully',
        success: true,
        data: result,
      })
    } else {
      res.status(500).json({
        success: false,
        message: 'data is not found ',
      })
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.name,
      error: error,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    })
  }
}

//TODO:Complete : GET specific data
const getSpecificBike = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const result = await bikesServices.getASpeecificeBikeFromDB(productId)
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      success: true,
      data: result,
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

//Complete : update products
const updateProducts = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const updateData = req.body
    const result = await bikesServices.updateDataIntroDB(productId, updateData)
    res.status(200).json({
      message: 'Bikes updated successfully',
      success: true,
      data: result,
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

//TODO : Delete the data
const deleteBike = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await bikesServices.deleteDataFromDB(productId)
    res.status(200).json({
      message: 'Bikes deleted  successfully',
      success: true,
      data: {},
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

export const bikesController = {
  createBike,
  getAllBikes,
  getSpecificBike,
  updateProducts,
  deleteBike,
}
