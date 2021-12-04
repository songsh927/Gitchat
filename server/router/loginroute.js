import express from 'express'
import 'express-async-errors'
import {config} from '../config.js'

const __dirname = config.filepath.loc;
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/client/html/login.html')
});

router.get('/signup', (req, res) => {
    res.status(200).sendFile(__dirname + '/client/html/signup.html')
});

export default router