const express = require("express");
const bodyParser = require("body-parser");
const app = express();
                                //imp to declar //allows us for nesting
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");//will find the path may it be any where + /name of file
});

app.post("/",function(req, res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+num2;

    res.send("result of calulaton is :"+ result);
});

app.listen(3000, function(){
    console.log("port at 3000")
});