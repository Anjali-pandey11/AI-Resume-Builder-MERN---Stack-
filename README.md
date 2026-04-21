# 🤖 AI Resume Builder — MERN Stack

A full-stack resume builder powered by AI that helps users craft professional, tailored resumes with ease. Built with the **MERN** stack (MongoDB, Express.js, React, Node.js).

---

## ✨ Features

- 🧠 **AI-Powered Content Generation** — Automatically generate professional summaries, skills, and job descriptions using AI
- 📝 **Interactive Resume Editor** — Fill in your details with a clean, guided form interface
- 🎨 **Multiple Resume Templates** — Choose from professionally designed templates
- 👁️ **Live Preview** — See your resume update in real time as you type
- 📄 **PDF Export** — Download your finished resume as a high-quality PDF
- 🔐 **User Authentication** — Secure sign-up and login with JWT-based auth
- ☁️ **Cloud Storage** — Save and manage multiple resumes in your account
- 📱 **Responsive Design** — Fully usable on desktop, tablet, and mobile

---

## 🛠 Tech Stack

### Frontend (`/client`)
| Technology | Purpose |
|---|---|
| React.js | UI framework |
| React Router DOM | Client-side routing |
| Axios | HTTP requests |
| Tailwind CSS / CSS Modules | Styling |
| html2pdf.js / jsPDF | PDF generation |

### Backend (`/server`)
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | REST API framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JSON Web Tokens (JWT) | Authentication |
| bcrypt.js | Password hashing |
| Google Gemini / OpenAI API | AI content generation |
| dotenv | Environment variable management |
| imageKitProfile image upload & storage (CDN) |

---

## 📁 Project Structure

```
AI-Resume-Builder-MERN---Stack-/
│
├── client/                     # React frontend
│   ├── public/
│   └── src/
│       ├── components/         # Reusable UI components
│       ├── pages/              # Page-level components
│       ├── context/            # React Context (auth, resume state)
│       ├── services/           # Axios API call helpers
│       ├── utils/              # Utility functions
│       └── App.jsx
│
├── server/                     # Express backend
│   ├── config/                 # DB connection config
│   ├── controllers/            # Route handler logic
│   ├── middleware/             # Auth & error middleware
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API route definitions
│   └── server.js               # Entry point
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anjali-pandey11/AI-Resume-Builder-MERN---Stack-.git
   cd AI-Resume-Builder-MERN---Stack-
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

---

### Environment Variables

#### Server (`/server/.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key   # or OPENAI_API_KEY
```

#### Client (`/client/.env`)
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

> ⚠️ Never commit `.env` files. They are listed in `.gitignore`.

---

### Running the App

**Start the backend server:**
```bash
cd server
npm run dev
```
The server will start at `http://localhost:5000`

**Start the frontend (in a new terminal):**
```bash
cd client
npm run dev
```
The React app will start at `http://localhost:5173`

---

## 📡 API Endpoints

### Auth Routes — `/api/auth`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and receive JWT |

### Resume Routes — `/api/resume`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all resumes for a user |
| POST | `/` | Create a new resume |
| GET | `/:id` | Get a resume by ID |
| PUT | `/:id` | Update a resume |
| DELETE | `/:id` | Delete a resume |

### AI Routes — `/api/ai`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/generate-summary` | Generate a professional summary |
| POST | `/generate-skills` | Suggest relevant skills |
| POST | `/improve-description` | Improve job/project descriptions |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---



## 👩‍💻 Author

**Anjali Pandey**
- GitHub: [@Anjali-pandey11](https://github.com/Anjali-pandey11)

---

> ⭐ If you found this project helpful, please give it a star!
