import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/first").then(() => {
    console.log("Payments MongoDB connected successfully");
}).catch((err) => {
    console.log("Payments connection failed", err.message);
})

const paymentSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true}
});


const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;