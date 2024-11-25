import { model, Schema } from 'mongoose'
import { isEmail } from 'validator'
import IOrder from './Order.interface'

const OrderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'email is required'],
      trim: true,
      validate: [isEmail, 'invalid email'],
    },
    product: {
      type: String,
      required: [true, 'product id is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be biggest then  0  '],
    },
    totalPrice: {
      type: Number,
      required: [true, 'totalPrice is required'],
      min: [0, 'totalPrice must be a positive number'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const OrderModel = model<IOrder>('Order', OrderSchema)

export default OrderModel
