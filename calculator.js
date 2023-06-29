const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("HEllo");
});

app.listen(3000, function(){
    console.log("port at 3000")
});