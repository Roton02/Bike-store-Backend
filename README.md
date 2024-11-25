# Bike Store Backend

A simple and efficient **RESTful API** built with **Express.js** and **TypeScript** to manage bike products and customer orders. This API supports core features like bike management, order creation, and revenue calculation.

---

## Features

- **Product Management**
  - Add, view, update, and delete bikes.
  - Filter products by name.
- **Order Management**
  - Place orders for bikes and manage stock.
- **Revenue Insights**
  - Calculate total revenue from all orders.

---

## API Endpoints

### Product Endpoints

| Endpoint                     | Method | Description                         |
|------------------------------|--------|-------------------------------------|
| `/api/products`              | POST   | Add a new bike                     |
| `/api/products`              | GET    | Get all bikes or filter by name    |
| `/api/products/:productId`   | GET    | Retrieve details of a specific bike|
| `/api/products/:productId`   | PUT    | Update details of a specific bike  |
| `/api/products/:productId`   | DELETE | Delete a specific bike             |

### Order Endpoints

| Endpoint                   | Method | Description                              |
|----------------------------|--------|------------------------------------------|
| `/api/orders`              | POST   | Place an order                          |
| `/api/orders/revenue`      | GET    | Calculate total revenue from all orders |

---

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/roton02/Bike-store-Backend.git
   cd Bike-store-Backend

Install Dependencies:

Step 2: Install Dependencies
Run the following command to install all required packages:

  ```bash
npm install
```
Step 3: Setup Environment Variables
Configure the .env file in the root directory to include the necessary environment variables:

PORT
MONGO_URI
NODE_ENV
 - 
Create a .env file and add:
env
  ```bash
PORT=5000

DATABASE_URL =mongodb+srv://next-level-a2-user:a2121212@cluster0.mi2xoxt.mongodb.net/bike-store?retryWrites=true&w=majority&appName=Cluster0
```
Step 4: Start the Server
Use this command to start the server in development mode: 

```bash
npm run dev