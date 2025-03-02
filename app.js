if(process.env.NODE_ENV !="production")
    {
        require('dotenv').config()
    }


const express=require("express");
const app=express();
const mongoose= require("mongoose");
const methodOverride=require("method-override");
const path=require("path");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");


const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

const port=8080;

const mongo_url="mongodb://127.0.0.1:27017/travelNest"
async function main() {
    await mongoose.connect(mongo_url);
}

main().then(()=>{
    console.log("connection to DB 'Established successfully'");
}).catch((err)=>{
    console.log(err); 
})

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);


const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge:7 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    }
};


//root route
app.get("/",(req,res)=>{
    res.send("You are on root directory ");
})


//Sessions
app.use(session(sessionOptions));
app.use(flash());


//passport configuration

app.use(passport.initialize());
app.use(passport.session());


//passport authentication
passport.use(new LocalStrategy(User.authenticate()));
//passport serialize into the sessions
passport.serializeUser(User.serializeUser());
//passport deserialize into the sessions
passport.deserializeUser(User.deserializeUser());

// middleware for flash
app.use((req,res,next)=>{
    
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})


app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


//Error Handling MiddleWares

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"));
})


app.use((err,req,res,next)=>{

    let {statusCode=500,message="Something went Wrong"}=err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
});

app.listen(port,(req,res)=>{
    console.log("app listening on port 8080");
})




