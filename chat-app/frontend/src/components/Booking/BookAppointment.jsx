import React, { useState } from "react";

function BookingForm() {
  const [serviceType, setServiceType] = useState("caretaker");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentDetails = {
      serviceType,
      name,
      email,
      phone,
      date,
      time,
    };

    console.log("Appointment Details:", appointmentDetails);
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <div className="text-center">
      <h2 className="text-xl text-green-600 font-semibold">
        Appointment Successfully Booked!
      </h2>
      <p className="mt-4 text-gray-600">We have received your appointment request.</p>
      <p className="text-gray-600">Our team will contact you shortly.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Type */}
      <div>
        <label className="block text-gray-600">Service Type</label>
        <div className="flex justify-between space-x-4">
          <button
            type="button"
            onClick={() => setServiceType("caretaker")}
            className={`w-full py-3 rounded-md text-lg font-semibold ${
              serviceType === "caretaker"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Caretaker
          </button>
          <button
            type="button"
            onClick={() => setServiceType("doctor")}
            className={`w-full py-3 rounded-md text-lg font-semibold ${
              serviceType === "doctor" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            Doctor Discussion
          </button>
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="block text-gray-600">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-600">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-gray-600">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your phone number"
          required
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-gray-600">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Time */}
      <div>
        <label className="block text-gray-600">Select Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Book Appointment
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
