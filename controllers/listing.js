const Listing=require("../models/listing");

//index route

module.exports.index=async(req,res,next)=>{
    const alistings= await Listing.find({});
    res.render("./listings/index.ejs",{alistings});
}


//add new listing form

module.exports.renderNewForm=(req,res)=>{
    res.render("./listings/new.ejs");
}


//show listing

module.exports.showListing=async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing Does not exist");
        res.redirect("/listings");
    }
    res.render("./listings/show.ejs",{listing})
}

//add lisiting

module.exports.addListing=async(req,res,next)=>{
    let url =req.file.path;
    let filename=req.file.filename;
    const formData=req.body;
    const newListing=new Listing(formData);
    console.log(formData);
    newListing.owner=req.user._id;
    newListing.Image={url,filename};
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");

}

//Edit listing form

module.exports.renderEditForm=async(req,res)=>{
    const {id}=req.params;
    console.log(req.params);
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Does not exist");
        res.redirect("/listings");
    }

    let originalImageURL= listing.Image.url;
    originalImageURL= originalImageURL.replace("/upload","/upload/w_250");
    res.render("./listings/edit.ejs",{listing,originalImageURL})

}

//update listing

module.exports.updateListing=async(req,res)=>{
    const {id}=req.params;
    const updateData=req.body;
    let listing= await Listing.findByIdAndUpdate(id,updateData, {new:true});


    if(typeof req.file !=="undefined"){ //typeof used to check is the value of a (req.file) variable is undefined or not.
        let url=req.file.path;
        let filename=req.file.filename;
        listing.Image={url,filename};
        await listing.save();
    }
   
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
}

//delete listing 

module.exports.deleteListing=async(req,res)=>{
    const {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}