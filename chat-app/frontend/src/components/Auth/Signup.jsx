import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function SignUp({ toggleForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {  setUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/vcare/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
        setUser(data.user);
        navigate("/"); // ✅ Redirect after successful signup
        window.location.reload();
      } else {
        console.error("Signup failed:", data.message);
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 sm:py-2.5 md:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 sm:py-2.5 md:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 sm:py-2.5 md:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
  
          {error && <p className="text-red-500 text-sm">{error}</p>}
  
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 cursor-pointer text-white py-2 sm:py-2.5 md:py-3 rounded-md mt-2 focus:outline-none hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
  
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
  
}

export default SignUp;
