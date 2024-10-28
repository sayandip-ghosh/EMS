import express from 'express';
import { login, signup } from '../Controllers/AuthController.js';
const AuthRouter =express.Router();

AuthRouter.post("/signup",signup)
AuthRouter.post("/login",login)

export default AuthRouter;