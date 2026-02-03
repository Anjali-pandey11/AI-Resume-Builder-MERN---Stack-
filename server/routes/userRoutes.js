import express from "express";
import { getUserById, getuserResumes, loginUser, registerUser } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";



const userRouter = express.Router();


userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data',protect, getUserById);
userRouter.get('/resumes',protect,getuserResumes);

export default userRouter;