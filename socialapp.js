const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let recentshouts = [
    {name: "Russell",
    shout: "I'm watching a good movie!"
    },
    {name: "Indiana",
    shout: "Why did it have to be snakes?"
    }
];

app.post("/shout", function (req, res, next) {
    /* let name = prompt("Name:", "User") ;
    let shout = prompt("What's worth shouting about?", "Test Shout"); */
    recentshouts.pop(name);
    recentshouts.pop(shout);
    res.send(recentshouts[0].name +" shouts "+ recentshouts[0].message)
})

app.get("/newshouts", function (req, res, next) {
    res.send(recentshouts);
})

app.post("/posturl",function(req,res,next){
    console.log(req.body);
    res.send("response");
})

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function() {
    console.log("Server is ready for shouting");
})

