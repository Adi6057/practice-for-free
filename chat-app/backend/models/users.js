import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log("User MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection failed", err.message);
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    requirement: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    hasCalled: { type: Boolean, default: false }, // <-- New field
});


const User = mongoose.model("User", userSchema);

export default User;