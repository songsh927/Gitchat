let users = [
    {
        username: 'song',
        password: '$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm',
        phonenum: '01011111111',
    },
    {
        username: 'kim',
        password: '$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm',
        phonenum: '01012345678',
    }
]

export async function findByusername(username){
    return users.find((user) => user.username === username)
};

export async function createUser(user){
    users.push(user)
    return user.username
};

/*
export async function findById(userid) {
    return users.find((user) => user.userid === userid);
};
*/