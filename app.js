const express = require("express");
const bodyParser = require("body-parser");
// const { use } = require("express/lib/application");
const date = require(__dirname +  "/date.js")

const app = express();

let listItems = ["Buy Food","Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("Public"))

app.get("/", function(req,res){
    
    let day = date.getdate();
    
    res.render("list", {ListTitle : day,newListItem : listItems})


})
app.post("/", function(req,res){
 
    let button = req.body.list;
    console.log(button);
    if (button === "Work List") {
        let item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work")
    } else {
        listItems.push(req.body.newItem)
        res.redirect("/")  
    }
})

app.get("/work", function(req,res){
    res.render("list", {ListTitle : "Work List", newListItem : workItems})
})

app.get("/about", function(req,res){
    res.render("about")
})


app.listen(3000, function(){
    console.log("server is running on port 3000");
})

