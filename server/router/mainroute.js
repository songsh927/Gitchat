import express from 'express'
import 'express-async-errors'
import  { isLogin }  from '../middleware/auth.js';
import {config} from '../config.js'
const __dirname = config.filepath.loc;
const router = express.Router();

router.get('/' ,isLogin ,(req, res, next) => {
    res.status(200).sendFile(__dirname + '/client/html/main.html')
});

router.get('/about' , isLogin , (req, res, next) => {
    res.status(200).sendFile(__dirname + '/client/html/about.html')
});



export default router