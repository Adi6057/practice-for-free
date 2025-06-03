import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ApplyForm() {
  const { role } = useParams(); // gets 'attendant', 'nurse', etc.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    adhar: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/applied", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, role }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const result = await response.json();
      alert(`Application for ${role} submitted successfully!`);
      console.log("Server response:", result);
    } catch (error) {
      alert("Error submitting application");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        Apply for {role.charAt(0).toUpperCase() + role.slice(1)} Position
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <select
          name="gender"
          required
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <input
          type="number"
          name="adhar"
          placeholder="Adhar Number"
          required
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Full Address"
          required
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
}
