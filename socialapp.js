const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// support parsing of application/json type post data
const parseData = bodyParser.json();
let recentShouts = [

    {name: "Russell",
    shout: "I'm watching a good movie!"
    },
    {name: "Indiana",
    shout: "Why did it have to be snakes?"
    } 
];

app.post("/shout", parseData, function (req, res, next) {
    let newShout = {};
   /*  let newShout["name"] =  "User";
    let newShout["shout"] =  "Test Shout"; */
    
    newShout["name"] = req.body.name;
    newShout["shout"] = req.body.shout;
    recentShouts.push(newShout);
    res.send("You shouted: " + newShout["shout"]);
})

app.get("/newshouts", function (req, res, next) {
    res.send(recentShouts);
})

/* app.post("/posturl",function(req,res,next){
    console.log(req.body);
    res.send("response");
}) */


//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function() {
    console.log("Server is ready for shouting");
})

