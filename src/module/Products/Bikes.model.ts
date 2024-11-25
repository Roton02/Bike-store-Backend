import { Schema, model } from 'mongoose'
import IBike from './Bikes.interface'

const BikesSchema = new Schema<IBike>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message: '{VALUE} is not a valid category',
      },
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      min: [0, 'Quantity must be a non-negative number'],
      required: [true, 'Quantity is required'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'inSock in required and  must be a boolean value'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const BikeModel = model<IBike>('Bikes', BikesSchema)

export default BikeModel
