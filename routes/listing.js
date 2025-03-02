const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing}=require("../middlewares.js");

const ListingController=require('../controllers/listing.js');
const multer  = require('multer')
const {storage}=require("../cloudconfig.js");
const upload = multer({ storage }); //multer use the folder name to store the file here the *storage* is from cloudnairy




router
.route("/")
//index
.get(wrapAsync(ListingController.index))
//add route(create )
.post(
    isLoggedIn,
    upload.single("Image"),
    validateListing,
    wrapAsync(ListingController.addListing)
);


// New route
router.get("/new",isLoggedIn,ListingController.renderNewForm);

router
.route("/:id")
//show route
.get(wrapAsync(ListingController.showListing))
//update route(using put request)
.put(
    isLoggedIn,
    isOwner,
    upload.single("NewImage"),
    validateListing, 
    wrapAsync(ListingController.updateListing))
//delete route(using delete request)  
.delete(isLoggedIn,isOwner,wrapAsync(ListingController.deleteListing));


//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(ListingController.renderEditForm));



module.exports=router;