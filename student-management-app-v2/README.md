# Student Manager (Beginner Project)

A simple React + Express + MongoDB app. The frontend uses **fetch**, not Axios.

## Project structure

```text
student-management-app/
├── backend/
│   ├── config/db.js
│   ├── controllers/studentController.js
│   ├── models/Student.js
│   ├── routes/studentRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/StudentForm.jsx
    │   ├── components/StudentList.jsx
    │   ├── lib/api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── style.css
    ├── .env.example
    └── package.json
```

## Requirements

- Node.js and npm
- MongoDB running locally, or a MongoDB Atlas connection string

## 1. Configure the backend

Open a terminal:

```bash
cd backend
npm install
```

Copy `.env.example` to a new file named `.env`. Update `MONGODB_URI` if you use MongoDB Atlas.

Example local settings:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/student_management
CLIENT_URL=http://localhost:5173
```

Start the backend with nodemon:

```bash
npm run dev
```

Nodemon restarts the server when backend files change.

## 2. Configure the frontend

Open a **second terminal** from the project root:

```bash
cd frontend
npm install
```

Copy `frontend/.env.example` to `frontend/.env`:

```env
VITE_API_URL=http://localhost:5001/api
```

Start React:

```bash
npm run dev
```

Open the local URL Vite displays, usually `http://localhost:5173`.

Restart Vite after changing a frontend `.env` file.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Add a student |
| PUT | `/api/students/:id` | Edit a student's details |

Example request body for POST and PUT:

```json
{
  "name": "Ada Okon",
  "age": 21,
  "course": "Computer Science"
}
```

## What the folders do

- `config/db.js`: connects Express to MongoDB.
- `models/Student.js`: defines the student data fields.
- `controllers/studentController.js`: contains the endpoint logic.
- `routes/studentRoutes.js`: connects URLs to controller functions.
- `src/lib/api.js`: keeps all frontend `fetch()` calls in one place.
- `src/components/`: contains reusable form and list components.
- `.env`: stores environment-specific settings. Do not commit real secrets to GitHub.

## Notes

- This version stores students in MongoDB, so records remain after restarting the server.
- `cors` allows the local Vite frontend to call the backend.
- This is a learning project. Add authentication and stronger production validation before deploying it publicly.
