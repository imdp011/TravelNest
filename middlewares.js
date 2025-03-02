const Listing=require("./models/listing.js");
const Review=require("./models/review.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl=req.originalUrl;
        req.flash("error", "You must be logged in to perform this action");
        return res.redirect("/login"); // Redirect to login page
    }
    next(); // Only call next if the user is authenticated
};

//for redirection of previous visit URL (is someone goes to add listing then they must be login first so after login they redirected to add listing page again.)

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}


//Checking the ownership of the listing(who have the permission to perform specific task like edit or delete the listing).

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You Don't have Permission to perform this action");
        return res.redirect(`/listings/${id}`);
    }
    next();
}


// Server Side Validation(Validate Listing)

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }
    else{
        next();
    }
}


// Server Side Validation(Validate Review)

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }
    else{
        next();
    }
}



module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id, reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "You Don't have Permission to perform this action");
        return res.redirect(`/listings/${id}`);
    }
    next();
}