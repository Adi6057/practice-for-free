import React from "react";

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
      <div className="text-blue-600 mb-4 text-4xl"><img src={icon} alt="Something" /></div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
        Book Appointment
      </button>
    </div>
  );
}

export default ServiceCard;
