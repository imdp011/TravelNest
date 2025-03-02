const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const Review =require("./review.js");


const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    Description:String,
    Image:{
        url:String,
        filename: String,
    },
    Price:Number,
    Location:String,
    Country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }

});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }
})


const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;