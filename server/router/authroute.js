import express from 'express'
import 'express-async-errors'
import * as authController from '../controller/auth.js'
import {  isLogin } from '../middleware/auth.js';

const router = express.Router();

router.post('/signup' , authController.signup);

router.post('/login', authController.login);

router.get('/me' ,isLogin, authController.me);

export default router