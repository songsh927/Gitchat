import {Server} from 'socket.io'
import cookie from 'cookie'
import fs from 'fs'
import cookieParser from 'cookie-parser';
import {config} from '../config.js'

export function initSocket(server){
    const io = new Server(server);
        io.on('connection', (socket) => {
            socket.on('chat message', (msg) => {
                const cookieStr = socket.handshake.headers.cookie;
                if (cookieStr) {
                    const cookieParsed = cookie.parse(cookieStr);
                    const strArray = Object.values(cookieParsed)[0].split(':');
                    const sidArray = strArray[1].split('.');
    
                    if(sidArray[0]){
                        const sidParsed = cookieParser.signedCookie(sidArray[0], config.session.secretKey);
                        fs.stat('./sessions/'+sidParsed + '.json' , (err,stats) => {
                        if(err){
                            console.log("cannot find file")
                        }
                        fs.readFile('./sessions/' + sidParsed + '.json','utf-8', (err, data) =>{
                            if(err) throw err;
                            const uidIndex = data.split('"').indexOf('userName');
                            console.log(uidIndex);
                            const uid = data.split('"')[uidIndex+2];
                            console.log(uid);
                            io.emit('chat message',uid+': '+ msg);
                        });
                    });
                }
            }
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
    
}