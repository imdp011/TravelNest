const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl } = require("../middlewares.js");

const userController=require("../controllers/user.js")


//signup

router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

//login 

router
.route("/login")
.get(userController.renderLoginForm)
.post( 
    saveRedirectUrl,
    passport.authenticate
    ("local",
        {failureRedirect:"/login",
         failureFlash:true
        }
    ),
    userController.login
);

//logout

router.get("/logout",userController.logout)


module.exports=router;