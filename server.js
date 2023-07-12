const express = require("express");
const cors = require("cors");

//
const app = express();

//
app.use(cors());
app.use(express.json());
app.use(xpress.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.send("<h1>This is a restaurant API</h1>");
})

app.listen(PORT,()=>{
    console.log("Server isrunning on port " + PORT);
})