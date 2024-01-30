const users = require("../utils/users") 

const login= (req, res)=> {

    const {email, password}= req.query
    let access = false

    users.forEach(user => {
        if(user.email === email && user.password === password){
            access= true
        }   
    }
    )
    res.json({access});
}

module.exports = login;
// const user = users = users.find(us=> us.email && us.password === password)
//user? res.json({access : true}) : res.status(401).json({access: false})