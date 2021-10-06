const express = require("express")
const router = express.Router()
const OngController = require("./Controllers/OngController")
const db = require("./Database/OngDatabase")


router.post('/register',OngController.register)
router.post('/login',OngController.login)
router.post('/novo',OngController.new)
router.delete('/:delete',OngController.delete)
router.put('/:edit',OngController.edit)
router.get('/list',async (req,res)=>{
    const conn = await db();
    let list = await conn.query('SELECT * FROM `Bethehero`.ong;')
    return res.status(200).json({data:list[0]})
})


module.exports = router;