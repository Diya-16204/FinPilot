# FinPilot 💰

FinPilot is a full-stack personal finance management web application that helps users track income and expenses, visualize spending patterns, and gain insights into their financial habits.

---

## 🚀 Features
- Secure user authentication (Login / Signup using JWT)
- Add, edit, and delete income & expenses
- Category-wise expense tracking
- Monthly and yearly financial summaries
- Interactive charts and analytics (day, month, year trends)
- Search and filter expenses (by date, category, amount)
- Export reports (CSV, Excel, PDF)

---

## 🛠 Tech Stack
- **Frontend:** React.js (Hooks, Context API, Recharts)
- **Backend:** Node.js + Express (REST APIs)
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens)

---

## 📂 Project Structure
FinPilot/
│── backend/ # Express + MongoDB API
│── frontend/ # React application
│── README.md


---

## ⚙️ Prerequisites
- Node.js (>= 18.x recommended)
- npm or yarn
- MongoDB (Local installation or MongoDB Atlas)

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/FinPilot.git
cd FinPilot

2. Install dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

3. Configure environment variables

Create a .env file inside the backend/ directory:

PORT=5000
MONGO_URI=mongodb://localhost:27017/finpilot
JWT_SECRET=your_secret_key
4. Run the application
Start backend
cd backend
npm start

Start frontend
cd ../frontend
npm start


Frontend runs on: http://localhost:3000

Backend runs on: http://localhost:5000

📊 Project Status

🚧 In Development

React frontend: ✅ Completed

Backend APIs: 🚧 In progress
