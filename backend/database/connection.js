import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        console.log("CONNECTED TO DATABASE.");
    }).catch((err)=>{
        console.log(`ERROR CONNECTING DATABASE: ${err}`);
    })
}