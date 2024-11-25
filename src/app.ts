/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from 'express'
import BikesRouter from './module/Products/Bikes.route'
import OrderRouter from './module/Orders/Order.route'
const app = express()

// middleware
app.use(express.json())

app.use('/api/products', BikesRouter) //    /api/products
app.use('/api/orders', OrderRouter)
// app.use('/')

app.get('/', (req :Request , res:Response)=>{
  res.json({
    success:true ,
    message:'welcome bike store backend '
  })
})

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found. Please check your URL.',
  })
})
app.use((err: any, req: Request, res: Response) => {
  // console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message,
    error: err.stack,
  })
})

export default app
