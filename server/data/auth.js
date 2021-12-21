import {db} from '../db/database.js';

export async function findByusername(username){
    return db
    .execute('SELECT * FROM users WHERE username=?',[username])
    .then((result) => result[0][0])
};

export async function createUser(user){
    const {username, password, phonenum} = user;
    return db.execute('INSERT INTO users (username, password, phonenum) VALUES (?,?,?)' ,
    [username, password, phonenum]
    ).then((result) => result[0].insertId)
};
