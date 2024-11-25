import express from 'express'
import { bikesController } from './Bikes.controller'

const BikesRouter = express.Router()

BikesRouter.post('/', bikesController.createBike)
BikesRouter.get('/', bikesController.getAllBikes)
//complete: write  valid controller function
BikesRouter.get('/:productId', bikesController.getSpecificBike)
//TODO: Complete :  complete the update work
BikesRouter.put('/:productId', bikesController.updateProducts) //  productId
//TODO : DELETE
BikesRouter.delete('/:productId', bikesController.deleteBike)

export default BikesRouter
