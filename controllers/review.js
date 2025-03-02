const Review=require("../models/review.js");
const Listing=require("../models/listing.js");


//Create Review route

module.exports.createReview=async(req,res)=>{

    const {id}=req.params;
    const newReview=await Review.create(req.body);
    let listing=await Listing.findById(id);
    newReview.author=req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success","New Review Created");
    res.redirect(`/listings/${id}`);
}

//Deleting reviews route

module.exports.deleteReview=async(req,res)=>{

    let {id, reviewId}= req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");

    res.redirect(`/listings/${id}`); 
}