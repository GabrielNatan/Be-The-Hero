const db = require("../Database/OngDatabase")
const jwt = require('jsonwebtoken')
const SECRET = 'legalmesmo'
let blackList = []

class Ong{

    async varifyToken(req,res,next){
        const token = req.headers['x-access-token'];
        const conn = await db();
        let pool = await conn.query('SELECT * FROM blacklisttokens WHERE token = ?',[token])
        if(pool[0].length > 0) return res.status(401).end();
        jwt.verify(token,SECRET,(err,decoded)=>{
            if(err) return res.status(401).end();
        })

        next()
    }

    async register(req,res){
        let {title,password,uf,city,phone,email} = req.body
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])

        return res.status(200).json({message:"ONG criada com sucesso!"})
    }

    async login(req,res){
        let {password} = req.body
            const conn = await db();
            let pool = await conn.query('SELECT * FROM ong WHERE password = ?',[password])
            if(pool[0].length > 0){
                const token = jwt.sign({user:pool[0]},SECRET,{expiresIn:5000});
                return res.status(200).json({user:pool[0],token})
            }else{
                return res.status(400).json({message:"Erro tente novamente"})
            }
      
    }

    async logout(req,res){
        const token = req.headers['x-access-token'];
        const conn = await db();
        let pool = await conn.query('INSERT INTO blacklisttokens(token) VALUES(?)',[token])
        return res.json({blackList:blackList})
      
    }

    async new(req,res){
        let {title,password,uf,city,phone,email} = req.body
        // let {name} = req.headers
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])

        return res.status(200).json({message:"ONG criada com sucesso!"})
    }
    async delete(req,res){
        let {title,password,uf,city,phone,email} = req.body
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])
    
        return res.status(200).json({message:"ONG criada com sucesso!"})
    }
    async edit(req,res){
        let {title,password,uf,city,phone,email} = req.body
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])
    
        return res.status(200).json({message:"ONG criada com sucesso!"})
    }

    async case(req,res){
        let {title,description,price,id} = req.body
        console.log("ID: ",id)
        const conn = await db();
        let pool = await conn.query('INSERT INTO casos(title,description,id_ong,price) VALUES(?,?,?,?);',[title,description,id,price])

        return res.status(200).json({message:"Caso criado com sucesso!"})
    }

    async caseList(req,res){
        let {id} = req.params
        const conn = await db();
        let pool = await conn.query('SELECT * FROM casos WHERE id_ong = ?;',[id])
        console.log("AQUI NA LISTA o ID: ",id)
        return res.status(200).json(pool[0])
    }
    
}

module.exports = new Ong();