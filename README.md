Job Portal (MERN Stack)

A comprehensive Job Portal application built using the MERN stack (MongoDB, Express.js, React, Node.js) that provides dual-role functionality for recruiters and students.

🚀 Features

👨‍💼 Recruiter Features

Create and manage company profiles.

Post detailed job listings with descriptions, requirements, and deadlines.

Manage job applications with approve/reject capabilities.
Access a dedicated dashboard for tracking jobs and applicants.

🎓 Student Features

Browse and search job listings.
Apply for jobs with resume upload functionality.
Track application status (Applied, Approved, Rejected).
Access a personalized dashboard to manage applications.

🔐 Authentication & Security

JWT-based authentication for secure login and signup.
Role-based access control for recruiters and students.
Password hashing with bcrypt.

💻 Other Highlights

Responsive UI designed with React for a seamless user experience.
RESTful API built using Express.js and Node.js.
MongoDB for storing user profiles, job listings, and applications.

🛠️ Tech Stack

Frontend: React.js, Axios, TailwindCSS / Bootstrap (if you used one)
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT, bcrypt
File Uploads: Multer (for resume uploads)

📂 Project Structure


job-portal/
│── backend/               # Node.js + Express backend
│   ├── models/            # Mongoose models (User, Job, Application, etc.)
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth middleware (JWT, role-based)
│   └── server.js          # Entry point
│
│── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Dashboard, Job Listings, etc.
│   │   ├── context/       # Auth context
│   │   └── App.js
│
│── .env                   # Environment variables
│── package.json
│── README.md

⚙️ Installation & Setup

1.Clone the repository
git clone https://github.com/yourusername/job-portal.git
cd job-portal

2.Backend Setup
cd backend
npm install

*Create a .env file inside the backend folder with the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

*Start the backend server:
npm start

3.Frontend Setup
cd frontend
npm install
npm start

4.Visit the App
Open your browser and go to:
👉 http://localhost:3000

📌 Future Enhancements

Advanced job search with filters (location, skills, salary range).
Email notifications for job applications.
Admin panel for managing users and jobs.
Integration with cloud storage (AWS S3, Cloudinary) for resumes.

