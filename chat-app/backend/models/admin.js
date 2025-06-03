import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log("Admin MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection failed", err.message);
})

const adminSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true},
   status: { type: String, enum: 'admin', required: true, default: 'admin' },
});


const Admin = mongoose.model("Admin", adminSchema);

export default Admin;