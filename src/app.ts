import express, { Request, Response } from 'express'
import BikesRouter from './module/Products/Bikes.route'
import OrderRouter from './module/Orders/Order.route'
const app = express()

// middleware
app.use(express.json())

app.use('/api/products', BikesRouter)
app.use('/api/orders', OrderRouter)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app
