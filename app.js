const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

var items = [];
var new_item = "";
app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day : "numeric",
    month: "long"
  }
  var currentDay = today.toLocaleDateString("en-US", options);

  res.render("list.ejs", {Day:currentDay , items : items});
});

app.post("/", function(req, res){
  new_item = req.body.new_item;
  items.push(new_item);
  res.redirect("/");
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
