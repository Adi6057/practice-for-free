import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log("Customer MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection failed", err.message);
})

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true},
   status: { type: String, enum: 'customer', required: true, default: 'customer' },
});


const Customer = mongoose.model("Customer", userSchema);

export default Customer;