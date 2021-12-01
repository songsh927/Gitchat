import dotenv from 'dotenv'
dotenv.config();

export const config = {
    host: {
        port: process.env.HOST_PORT
    },
    filepath: {
        loc: process.env.DIR_ROUTE
    },
    bcrypt: {
        saltRounds: process.env.BCRYPT_SALT_ROUNDS
    },
    session: {
        secretKey: process.env.SESSION_SECRET_KEY
    }

};