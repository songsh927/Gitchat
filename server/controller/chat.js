import {Server} from 'socket.io'
import ios from 'express-socket.io-session'
import session from 'express-session';
import * as userRepo from '../data/auth.js'

export function initSocket(server){
    const io = new Server(server);

    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
    socket.on('disconnect', () => {
        console.log('user disconnected');
        });
    });
}


/*
/main\chat
{
	userid,
	username,
	token,
	talk_seq_num,
	createTime
}
*/