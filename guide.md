# Project Setup & Run Guide

## How to Setup & Run this Project

## Install Node.js (Ignore If Already Installed)
1. Visit the official Node.js website: [Node.js Download](https://nodejs.org/en/download/)
2. Download the Node.js installer.
3. Run the installer.
4. Follow the prompts in the installer.

---

## Running Backend, Frontend & Admin
**First, run the backend before starting the frontend and admin panel.**

### Steps to Setup Backend
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
   - Open the MongoDB [link](#).
   - Sign up and log in.
   - Click on **New Project**.
   - In the **Database Section**, click **Build a Database**.
   - Select **M0**, choose your region, and create the database.
   - Set up a **Username & Password** (Avoid `@` in the password).
   - Click **Finish & Close**.
   - **Whitelist IP** `0.0.0.0` and click **Add Entry**.
   - Click **Connect**.
   - Select **Compass Option**.
   - Copy the **Connection String** and paste it into `backend/.env`, replacing `<password>` with your password.
     > **Note:** Do not add `/` at the end of the MongoDB URI.

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

## Steps to Run Frontend
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

5. All the images and the initial meta data is in asset folder in frontend folder `ecom-frontend/src/assets` use the assets.js file to upload the initial data.

---

## Steps to Run Admin Panel
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

Feel free to explore my repositories, contribute to the projects, or reach out for collaboration! 😊

