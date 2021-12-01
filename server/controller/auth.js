//import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'express-async-errors'
import * as userRepo from '../data/auth.js'
import {config} from '../config.js'

/*
const jwtSecretKey = 'F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z';
const jwtExpiresInDays = '2d';
*/
export async function signup(req,res){
    const {username, password, phonenum} = req.body;
    const found = await userRepo.findByusername(username)
    if(found){
        return res.status(409).json({message: `${username} is already exists`})
    }
    const hashed = await bcrypt.hash(password, parseInt(config.bcrypt.saltRounds))
    const userId = await userRepo.createUser({
        username,
        password: hashed,
        phonenum
    });
    res.status(201).redirect('/')
}

export async function login(req,res){
    const {username, password} = req.body;
    const user = await userRepo.findByusername(username);
    if(!user){
        return res.status(401).json({message:'Invalid User or Password'})
    }
    const validPassword = await bcrypt.compare(password,user.password);
    if(!validPassword){
        return res.status(401).json({message:'Invalid User or Password'});
    }
    req.session.is_logined = true;
    req.session.userName = username
    req.session.save(function(){
        res.status(200).redirect(`/gitchat`); 
    });

    console.log(username + '  login success!' )
}

export async function me(req, res, next) {
    const user = await userRepo.findByusername(req.session.userName);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
        res.status(200).json({ username: user.username });
}