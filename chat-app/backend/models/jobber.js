import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log(" Jobber MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection failed", err.message);
})

const jobberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: { type: String, enum: 'jobber', required: true, default: 'jobber' },
});


const Jobber = mongoose.model("Jobber", jobberSchema);

export default Jobber;