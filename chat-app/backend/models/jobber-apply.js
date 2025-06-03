import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log("JobberApply MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection failed", err.message);
})

const JobberApplySchema = new mongoose.Schema({
   user: Object,
   duty: Object,
   hasConfirmed: { type: Boolean, default: false },
   isRead: { type: Boolean, default: false },
   hasCalled: { type: Boolean, default: false },
   isConfirmed: { type: Boolean, default: false },
   time: { type: Date, default: Date.now}
})

const JobberApply = mongoose.model("JobberApply", JobberApplySchema)
export default JobberApply;