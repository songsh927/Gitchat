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
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD
    }

};