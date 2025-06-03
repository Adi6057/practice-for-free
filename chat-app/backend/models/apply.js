import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log("Apply MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection failed", err.message);
})

const applySchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true},
    email: { type: String, required: true },
    phone: { type: String, required: true },
    adhar: { type: String, required: true },
    address: { type: String, required: true},
    role: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    hasCalled: { type: Boolean, default: false },
    isConfirmed: { type: Boolean, default: false}
})

const Apply = mongoose.model("Apply", applySchema)
export default Apply;