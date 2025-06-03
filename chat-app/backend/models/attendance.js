import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log(" Attendance MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection failed", err.message);
})

const attendanceSchema = new mongoose.Schema({
    email: { type: String, required: true},
    status: { type: String, enum: ['Present', 'Absent'], required: true, default: 'Absent' },
    date: { type: String, required: true }, // YYYY-MM-DD
    time: { type: Date, default: Date.now }
});


const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;