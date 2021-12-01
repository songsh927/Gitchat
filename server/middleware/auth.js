const AUTH_ERROR = { message: 'Authentication Error' };

export const isLogin = async(req, res, next) => {
    if(req.session.is_logined){
        next();
    } else {
        return res.status(401).redirect('/')
    }
}

/*
export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        return res.status(401).json(AUTH_ERROR);
    }

    const token = authHeader.split(' ')[1];
    
    // TODO: Make it secure!
    
    jwt.verify(
    token,
    'F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z',
    async (error, decoded) => {
        if (error) {
            return res.status(401).json(AUTH_ERROR);
        }
        const user = await userRepo.findById(decoded.id);
        if (!user) {
            return res.status(401).json(AUTH_ERROR);
        }
        req.userId = user.userid; // req.customData
        next();
        }
    );
};
*/