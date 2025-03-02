const User=require("../models/user.js");


//render signup form
module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
} 

//signup after click on signup button below code will work.

module.exports.signup=async(req,res,next)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});

//The passport-local-mongoose package (likely used here) handles hashing/salting automatically through the User.register() method, which is why the password isn’t directly set in newUser.


        const registeredUser=await User.register(newUser, password) 
        req.login(registeredUser,(err)=>{
            if (err){
                return next(err);
            }
            req.flash("success",`Welcome To TravelNest ${req.user.username}!`);
            res.redirect("/listings");
        })  
    }
    catch(e){
        req.flash("error",e.message)
        res.redirect("/signup");
    }
   
}

//render login form
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}


module.exports.login= async(req,res)=>{
    req.flash('success', `Welcome, ${req.user.username}!`);
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}


module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err)
        }
        req.flash("success",`you are logged out`)
        res.redirect("/listings");
    })
}