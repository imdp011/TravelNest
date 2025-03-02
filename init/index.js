const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const mongo_url="mongodb://127.0.0.1:27017/travelNest"
async function main() {
    await mongoose.connect(mongo_url);
    
}
main().then(()=>{
    console.log("connection to DB 'Established successfully'");
}).catch((err)=>{
    console.log(err); 
})


const initDb=async()=>{
     await Listing.deleteMany({});
     initData.data=initData.data.map((obj)=>({...obj,owner:"67051817b968be32d153cffd"}))
     await Listing.insertMany(initData.data);
     console.log("data initiazled");

}

initDb();