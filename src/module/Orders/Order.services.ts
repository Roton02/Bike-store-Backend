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
    if (cheekQuantity <= 0) {
      const result = await BikeModel.findByIdAndUpdate(productId, {
        inStock: false,
      })
      // console.log('updated result' ,result);
      return {success: false , message:'stock is over '}
    }
    if (!isExistBike.inStock) {
      return {success: false , message:'inStock is false thats why unavailable product  '}
    }
    if (isExistBike && cheekQuantity > 0) {
      const decrement =  await BikeModel.findByIdAndUpdate(productId, {
        $inc: { quantity: -orderData.quantity },
      })
      console.log(decrement , 'decrement from bikes collection');
      const result = await OrderModel.create(orderData)
      return result
    }
  }
  console.log('something is gone a wrong');
  return
}

export const OrderServices = {
   OrderBikeIntroDB,
}
