const express = require("express")
const router = express.Router()
const OngController = require("./Controllers/OngController")
const db = require("./Database/OngDatabase")

router.use('/data/*',OngController.varifyToken)

router.post('/register',OngController.register)
router.post('/login',OngController.login)
router.get('/data/logout',OngController.logout)
router.post('/novo',OngController.new)
router.delete('/data/:delete',OngController.delete)
router.put('/data/:edit',OngController.edit)
router.post('/data/case',OngController.case)
router.get('/data/listCase/:id',OngController.caseList)
router.get('/data/list',async (req,res)=>{
    const conn = await db();
    let list = await conn.query('SELECT * FROM `Bethehero`.ong;')
    return res.status(200).json({data:list[0]})
})


module.exports = router;