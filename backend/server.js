import express from "express"
// import { authDB } from "./models/schema.js"
import {deleteAllData,insertData,deleteData,getData} from './models/authUserSchema.js'
// import bodyParser from "body-parser"
import cors from "cors"
const app = express()
const port = 3000


// app.use(bodyParser.json());
app.use(express.json()); 
app.use(cors()); 

app.get('/', async(req, res,next) => {
  try{
    const data = await getData();
    res.send(data)
  }catch(error){
 next(error);
  }
})

app.post('/',async(req,res,next)=>{

  try{
    const {username,email,password,phoneno}=req.body;
    if(!username || !email || !password || !phoneno){
      throw new Error("All filds (username, email, password, phoneno) are required.");
    }
    const data = await insertData(username,email,password,phoneno); 
    res.status(201).send(data);  
  }catch(error){
    next(error); 
  }
    // await authDB.create(req.body); 
})

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).send({ error: err.message || "An unexpected error occurred." });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
