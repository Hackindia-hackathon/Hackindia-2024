import express from "express"
import {dirname} from "path";
import { fileURLToPath } from "url";
import getType from "./Routes/getType.js"
import getSingle from "./Routes/getSingle.js"


const dir=dirname(fileURLToPath(import.meta.url));
const app=express();

app.use(express.static(dir + "/Public"));

app.use(express.json());
app.use("/api/getSingle",getSingle);
app.use("/api/getType",getType);
app.get('/home',(req,res)=>{
    res.sendFile(dir + "/Public/index.html")
})

const port=7777;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})