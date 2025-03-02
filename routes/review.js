const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review=require("../models/review.js");
const {isLoggedIn,validateReview,isReviewAuthor}=require("../middlewares.js");
const reviewController = require("../controllers/review.js");

//  Reviews Route

//Create Review (post route)

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));


//Deleting reviews 

router.delete("/:reviewId", isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview))

module.exports=router;

