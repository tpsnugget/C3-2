var express = require("express"),
   app = express(),
   bodyParser = require("body-parser"),
   mongoose = require("mongoose")

var options = {
   useNewUrlParser: true,
   useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost:27017/dogs",
   options)

var dogSchema = new mongoose.Schema({
   name: String,
   breed: String,
   state: String
})

var Dog = mongoose.model("Dog", dogSchema)

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))

// Landing ROUTE
app.get("/", function (req, res) {
   res.render("landing")
})

// INDEX ROUTE shows all dogs
app.get("/dogs", function (req, res) {
   Dog.find({}, function(err, dogs){
      if (err) {
         console.log("There was an error: ")
         console.log(err)
      }
      res.render("index", {dogs: dogs})
   })
})

// NEW ROUTE shows enter new dog page
app.get("/dogs/new", function(req, res){
   res.render("new")
})

// CREATE ROUTE to create a new dog
app.post("/dogs", function(req, res){
   // Create new dog
   Dog.create(req.body.newDog, function(err, dog){
      if (err) {
         console.log("There was an error: ")
         console.log(err)
      }
      else {res.redirect("/dogs")}
   })
})

// SHOW ROUTE to show info one a single dog
app.get("/dogs/:id", function(req, res){
   Dog.findById(req.params.id, function(err, foundDog){
      if (err) {
         console.log("There was an error: ")
         console.log(err)
      }
      else {res.render("show", {dog: foundDog})}
   })
})

app.listen(3000, process.env.IP, function () {
   console.log("The server is running ... ")
})