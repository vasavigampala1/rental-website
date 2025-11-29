const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listing.js");


router
.route("/")
 .get(wrapAsync(listingController.index))
 .post(isLoggedIn, validateListing , wrapAsync (listingController.createRoute));

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);


//Show Route

router
    .route("/:id")
    .get( wrapAsync (listingController.showRoute))
    .put(isLoggedIn, isOwner,validateListing ,wrapAsync (listingController.updateRoute))
    .delete(isLoggedIn,isOwner, wrapAsync (listingController.destroyRoute));




//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync (listingController.editRoute));



module.exports=router;