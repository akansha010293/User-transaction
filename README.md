# 💸 Transaction Dashboard App

A lightweight web application built with **React (Vite)** and **Express (Node.js)** that allows users to **view, filter, and create transactions**. This app simulates a transaction dashboard with basic CRUD operations and user filtering.

---

## 📸 Preview

Design reference from [Figma](https://www.figma.com/design/H40Lmt45oxLm4fqCXplDik/karia_master?node-id=4327-66231&m=dev)  
Click on the ▶️ Play button in Figma to preview the user flow.

---

## 📦 Tech Stack

- **Frontend**: React (Vite) + Axios
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL (Dockerized)
- **Styling**: Material UI (optional)
- **Environment**: Docker + Docker Compose

---

## 🚀 Features

### ✅ Login
- Simple login using name
- Only users seeded in DB can login
- Redirects to the transactions page upon login

### ✅ Transaction Table
- View all transactions
- Filter by username
- Pagination (10 transactions per page)

### ✅ Create Transaction
- Fill out a form to add a new transaction
- On successful submission, redirects to transaction list with latest transaction at the top

### ✅ Seed Data
- Automatically loads:
  - 2 users (`Alice`, `Bob`)
  - 100 random transactions at startup

---

## 🧪 Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/transaction-dashboard.git
cd transaction-dashboard
