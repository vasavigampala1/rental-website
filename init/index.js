const mongoose=require("mongoose");
const initData = require("./init.js");
const Listing = require("../models/listing.js");

main()
    .then((res)=> {console.log("Connected to db")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}

const initDB = async ()=>{
     await Listing.deleteMany({}); //delete if any data already exists
     initData.data=initData.data.map((obj)=>({...obj,owner:"69241de15e418fc6eb45a123"}));
     await Listing.insertMany(initData.data); //intializing the data
     console.log("Data was initialized");
};

initDB();
