# Udemy Clone – Project Setup Guide

## 1. Install Dependencies

Run this in both frontend and backend directories:

```bash
npm install
```

## 2. Frontend Environment Variables

Create a `.env` file in the **frontend** root directory with the following:

```env
VITE_CLIENT_ID=""
VITE_PAYPAL_CLIENT_ID=""
VITE_SECRET_KEY_PAYPAL=""
VITE_NODE_ENV=""
VITE_BASE_URL=""
VITE_LOCALHOST=""
VITE_GOOGLE_CLIENT_ID=""
VITE_AI_TOKEN=""
```

## 3. Backend Environment Variables

Create a `.env` file in the **backend** root directory with the following:

```env
PORT=""
DB_URI=""
JWT_SECRET=""
BCRYPT_PW=""
JWT_EXPIRES_IN=""
NODE_ENV=""
EMAIL_USER=""
EMAIL_KEY=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

## 4. Start the App

Once the `.env` files are ready and dependencies are installed:

```bash
# Frontend
npm run dev

# Backend
npm run start:dev
```