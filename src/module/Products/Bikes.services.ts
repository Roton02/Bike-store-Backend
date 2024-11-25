import { UpdateQuery } from 'mongoose'
import IBike from './Bikes.interface'
import BikeModel from './Bikes.model'

const createBikesIntroDB = async (Bike: IBike): Promise<IBike> => {
  const result = await BikeModel.create(Bike)
  return result
}
//TODO : complete the query wised  get data
const getAllBikesFromDb = async (searchTerm: string): Promise<IBike[]> => {
  const search = new RegExp(searchTerm, 'i')
  const result = await BikeModel.find({ name: { $regex: search } })
  return result
}
//complete get specifice data
const getASpeecificeBikeFromDB = async (
  productId: string
): Promise<IBike | null> => {
  const result = await BikeModel.findById(productId)
  return result
}

//update product
const updateDataIntroDB = async (
  productId: string,
  updateData: UpdateQuery<Partial<IBike>>
) => {
  const result = await BikeModel.findByIdAndUpdate(productId, updateData, {
    new: true,
    runValidators: true,
  })
  return result
}

//Delete Data
const deleteDataFromDB = async (productId: string | null | undefined) => {
  const result = await BikeModel.deleteOne({ _id: productId })
  return result
}
export const bikesServices = {
  createBikesIntroDB,
  getAllBikesFromDb,
  getASpeecificeBikeFromDB,
  updateDataIntroDB,
  deleteDataFromDB,
}
