import express from "express"
import db from "../db.js";
const router=express.Router();

router.get("/:id",(req,res)=>{
    // res.json("Sending Single Post");
    const id=req.params.id;
    const q=`SELECT * FROM clouds WHERE id=${id}`;
    db.query(q,(err,data)=>{
        if(err){ 
            console.log(err);
            res.status(500).json({error:"Internal Error"});
        }
        else res.json(data);
    });
});

export default router;