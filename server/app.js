import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import session, { MemoryStore } from 'express-session'
import FileStore from 'session-file-store'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import path from 'path'

import mainRouter from './router/mainroute.js'
import authRouter from './router/authroute.js'
import loginRouter from './router/loginroute.js'
import { initSocket } from './controller/chat.js'
import {config} from './config.js'
import { db } from './db/database.js'

const __dirname = path.resolve();
const app = express();
const sessionFileStore = FileStore(session);

app.use(cors('*'));
app.use(morgan('tiny'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(session({
    secret: config.session.secretKey,
    resave: false,
    saveUninitialized: true,
    store: new sessionFileStore()
}));

app.use('/public',express.static(path.join(__dirname,'../client/public')));
app.use('/' , loginRouter);
app.use('/gitchat' , mainRouter);
app.use('/auth' , authRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

db.getConnection()
const server = app.listen(config.host.port);
initSocket(server);
