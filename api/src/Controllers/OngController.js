const db = require("../Database/OngDatabase")

class Ong{
    async register(req,res){
        let {title,password,uf,city,phone,email} = req.body
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])
        console.log(pool)
        return res.status(200).json({message:"ONG criada com sucesso!"})
    }

    async login(req,res){
        let {password} = req.body

            const conn = await db();
            let pool = await conn.query('SELECT * FROM ong WHERE password = ?',[password])
            console.log("AQIO",pool[0].length > 0)
            if(pool[0].length > 0){
                return res.status(200).json(pool[0])
            }else{
                return res.status(400).json({message:"Erro tente novamente"})
            }
      
    }

    async new(req,res){
        let {title,password,uf,city,phone,email} = req.body
        // let {name} = req.headers
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])
        console.log(pool)
        return res.status(200).json({message:"ONG criada com sucesso!"})
    }
    async delete(req,res){
        let {title,password,uf,city,phone,email} = req.body
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])
        console.log(pool)
        return res.status(200).json({message:"ONG criada com sucesso!"})
    }
    async edit(req,res){
        let {title,password,uf,city,phone,email} = req.body
        const conn = await db();
        let pool = await conn.query('INSERT INTO ong(title,password,uf,city,phone,email) VALUES(?,?,?,?,?,?);',[title,password,uf,city,phone,email])
        console.log(pool)
        return res.status(200).json({message:"ONG criada com sucesso!"})
    }
    
}

module.exports = new Ong();