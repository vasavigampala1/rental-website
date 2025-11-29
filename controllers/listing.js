const Listing = require("../models/listing.js");

module.exports.index = async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("listing/index.ejs",{allListings});
};

module.exports.renderNewForm=(req,res)=>{
  res.render("listing/form.ejs");
};

module.exports.showRoute=async (req,res)=>{
  let {id} = req.params;
  const listing =  await Listing.findById(id)
  .populate({
    path:"reviews",
    populate:{
      path:"author",
    },
  })
  .populate("owner");
  if(!listing){
     req.flash("error","Listing Not found");
     return res.redirect("/listing");
  }
  res.render("listing/show.ejs",{listing});
};

module.exports.createRoute=async (req,res)=>{
  const newListing= new Listing(req.body.listing);
  newListing.owner=req.user._id;
  await newListing.save();
  req.flash("success","New listing created");
  res.redirect("/listing");
};

module.exports.editRoute=async (req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
   if(!listing){
     req.flash("error","Listing Not found");
     return res.redirect("/listing");
  }
  res.render("listing/edit.ejs",{listing});
};

module.exports.updateRoute= async(req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
   req.flash("success","Listing Updated");
  res.redirect(`/listing/${id}`);
};

module.exports.destroyRoute=async (req,res)=>{
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success","Listing Deleted!");
  res.redirect("/listing");
};