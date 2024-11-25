import BikeModel from '../Products/Bikes.model'
import IOrder from './Order.interface'
import OrderModel from './Order.model'

const OrderBikeIntroDB = async (orderData: IOrder) => {
  const productId = orderData.product
  const isExistBike = await BikeModel.findOne({ _id: productId })
  // console.log('isExistBike :', isExistBike)

  if (isExistBike) {
    const cheekQuantity = isExistBike.quantity - orderData.quantity
    // console.log(cheekQuantity)
    if (!isExistBike.inStock) {
      throw new Error('inStock is false thats why unavailable product  !')
    }
    if(isExistBike.quantity === 0){
      throw new Error('Stock  is Empty Quantity is 0 !')
    }
    if (cheekQuantity < 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await BikeModel.findByIdAndUpdate(productId, {
        inStock: false,
      })
      throw new Error('Stock is Empty !')
    }
   
    if (isExistBike && cheekQuantity >= 0) {
      await BikeModel.findByIdAndUpdate(productId, {
        $inc: { quantity: -orderData.quantity },
      })
      // console.log(decrement, 'decrement from bikes collection')
      const result = await OrderModel.create(orderData)
      return result
    }
  }
  // console.log('something is gone a wrong')
  throw new Error('there are no Product here with is ID!')
  // { success: false, status : 404  , message: 'there are no Product here with is ID ' }
}

//DONE : multifly value is not correct
const totalRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: 'null',
        totalRevenue: { $sum: { $multiply: ['$quantity', '$totalPrice'] } },
      },
    },
    {
      $project: { totalRevenue: 1, _id: 0 },
    },
  ])

  // console.log(result, 'asdffasdfsdf')
  return result
}
export const OrderServices = {
  OrderBikeIntroDB,
  totalRevenueFromDB,
}
