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

bash
Copy code
npm install
Configure Environment:

Create a .env file and add:
env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/bike-store
Run the Server:

bash
Copy code
npm run dev