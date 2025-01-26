import express from "express"
import db from "../db.js"
const router = express.Router();

router.get("/",(req,res)=>{
    const type = req.query.type;
    const q = `SELECT * FROM clouds WHERE type =?`;
    db.query(q, [type],(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).send({message:"Error fetching data"});
        }
        else{
            res.json(data);
        }
    });
})

export default router;