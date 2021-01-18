const express=require("express");
const methodOverride=require("method-override");
const passport=require("passport")
const LocalStrategy=require("passport-local");
const User=require("./models/user");
const Article=require("./models/article");

const mongoose=require("mongoose");
const articleRouter=require("./routes/articles");
const { session } = require("passport");



const app=express();
mongoose.connect("mongodb://localhost/blog",{useNewUrlParser:true, useUnifiedTopology:true});






app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));





app.use(methodOverride("_method"))











//this is the route for landing page that displays all the articles
app.get("/",(req,res)=>{
    res.render("articles/main");

});

app.get("/get",async(req,res)=>{

    const articles=await Article.find().sort({createdAt:"desc"})
    
    res.render("articles/index",{articles:articles});

});


app.use("/articles",articleRouter);


app.listen(4000);