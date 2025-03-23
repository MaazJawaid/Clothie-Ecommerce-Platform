# Full-Stack E-commerce Platform Documentation

## Project Overview

This is a complete full-stack e-commerce platform built using the **MERN stack** (MongoDB, Express.js, React, Node.js). The platform includes a **real-time admin panel** and integrates popular payment gateways such as **Stripe** and **Razorpay**. The system supports adding products to the cart, checking out, and managing orders. It also utilizes **Cloudinary** for file storage, providing seamless image handling.

---

## Live Demo

- **Frontend**: https://private-clothie-ecommerce-platf-git-6bcae8-maazjawaids-projects.vercel.app
- **Admin Panel**: https://private-clothie-ecommerce-platform-admin.vercel.app
  - **Email**: admin@example.com
  - **Password**: maazjawaid123

---

## Features

- **MERN Stack**: MongoDB, Express.js, React, Node.js
- **Real-Time Admin Panel**: Manage products, orders, users, and more
- **Payment Integration**: Stripe, Razorpay, and other payment gateways
- **Cloudinary Integration**: For storing product images
- **User Authentication**: Secure login and registration
- **Cart and Checkout**: Add products to cart and proceed to checkout
- **Order Management**: Track orders, shipping, and payment status

---

## Tech Stack

- **Frontend**: React.js (with Hooks and Context API)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (using Mongoose)
- **Cloud Storage**: Cloudinary for image and file management
- **Payment Gateways**: Stripe, Razorpay (and more)
- **Authentication**: JWT (JSON Web Tokens)
- **Admin Panel**: Real-time management interface

---

## Features and Functionalities

### User Features

- **Product Listings**: Users can browse and view products.
- **Product Search**: Search products by name, category, or price.
- **Add to Cart**: Users can add products to their shopping cart.
- **Checkout**: Users can proceed to checkout and make payments.
- **Order Tracking**: Users can view their order history and track the status of their orders.
- **Payment Integration**: Supports **Stripe** and **Razorpay** for secure payment processing.

### Admin Features

- **Product Management**: Admins can add, update, and delete products.
- **Order Management**: Admins can view and update order statuses.
- **User Management**: Admins can manage users (view, delete).
- **Payment Management**: Admins can track payments and view transaction details.
- **Real-Time Updates**: The admin panel shows real-time updates on orders and payments.

---

## Optional Features

### Payment Gateway Configuration

This project supports **Stripe** and **Razorpay** for payments. You need to enter your API keys in the `.env` file for both gateways to start using them.

- **Stripe**: Get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/).
- **Razorpay**: Get your API keys from the [Razorpay Dashboard](https://dashboard.razorpay.com/).

### Cloudinary Setup

Sign up for a Cloudinary account and get your **Cloud Name**, **API Key**, and **API Secret**. Store these values in the `.env` file to enable file uploads.

---

## Installation and Setup

### Prerequisites
Make sure you have the following installed:

- **Node.js** (latest version) - [Node.js Download](https://nodejs.org/en/download/)
- **MongoDB** - For local setup or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-based database.
- **Cloudinary Account** - For storing product images ([Cloudinary](https://cloudinary.com/))

---

### 1. Clone the Repository

Clone the project repository from GitHub:

```bash
git clone https://github.com/yourusername/your-ecommerce-project.git
cd your-ecommerce-project
```

### 2. Backend Setup

1. Open the project folder in VS Code.
2. Open Integrated Terminal:
   - Right-click on the `backend` folder > Select **"Open in Integrated Terminal"**.
3. Run the following command to install dependencies:
   ```sh
   npm install
   ```
4. **Setup Cloudinary for file storage:**
   - Create an account and log in at [Cloudinary](https://cloudinary.com/).
   - Go to the **Dashboard**.
   - Copy and paste the **Cloud Name**, **API Key**, and **Secret Key** into the `backend/.env` file.

5. **Setup MongoDB:**
   - Open the MongoDB [link](https://mongodb.com/).
   - Copy the **MongoDB Connection String** and paste it into `backend/.env`, replacing `<password>` with your password.

6. **Setup Stripe (Optional)**
   - Create a [Stripe](https://stripe.com/) account.
   - Get the **Stripe Secret Key** from the dashboard.
   - Paste the key into `backend/.env` and save.

7. **Setup Razorpay (Optional)**
   - Create a [Razorpay](https://razorpay.com/) account.
   - Get the **Razorpay Secret Key** & **Razorpay Key ID** from the dashboard.
   - Paste them into `backend/.env` and save.

8. **Run the Backend**
   ```sh
   npm run server
   ```
   > **Ensure the backend is running before starting the frontend or admin panel.**
---

### 3. Frontend Setup

1. Right-click on the `frontend` folder > Select **"Open in Integrated Terminal"**.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```
4. Open the provided URL in a browser (default: `http://localhost:5173`).

5. All the images and the initial meta data is in asset folder in frontend folder `ecom-frontend/src/assets` use the assets.js file to upload the initial data use a script or do it manually.

---

### 4. Admin Panel Setup

1. Right-click on the `admin` folder > Select **"Open in Integrated Terminal"**.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the admin panel:
   ```sh
   npm run dev
   ```
4. Open the provided URL in a browser (default: `http://localhost:5174`).

---

## Contributing

We welcome contributions! If you'd like to contribute, please fork the repository, create a new branch, make your changes, and submit a pull request.

