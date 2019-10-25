var express = require("express"),
   app = express(),
   bodyParser = require("body-parser")

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))

// Landing ROUTE
app.get("/", function (req, res) {
   res.render("landing")
})

// INDEX ROUTE shows all dogs
app.get("/dogs", function (req, res) {
   res.render("index")
})

// NEW ROUTE shows enter new dog page
app.get("/dogs/new", function(req, res){
   res.render("new")
})

// CREATE ROUTE to create a new dog
app.post("/dogs", function(req, res){
   // Create new dog
   console.log(req.body.newDog)
   res.redirect("/dogs")
})

app.listen(3000, process.env.IP, function () {
   console.log("The server is running ... ")
})