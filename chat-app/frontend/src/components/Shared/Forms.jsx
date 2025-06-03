import React, { useState } from 'react';

const AttendantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request for Attendant service submitted!');
    // Send formData to your backend here
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Book Attendant Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="text" name="address" placeholder="Full Address" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="date" name="date" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <textarea name="notes" placeholder="Additional Notes" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

const NurseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request for Nurse service submitted!');
    // Send formData to your backend here
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Book Nurse Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="text" name="address" placeholder="Full Address" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="date" name="date" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <textarea name="notes" placeholder="Additional Notes" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

const CaretakerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request for Caretaker service submitted!');
    // Send formData to your backend here
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Book Caretaker Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="text" name="address" placeholder="Full Address" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="date" name="date" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <textarea name="notes" placeholder="Additional Notes" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

const ElderlyCareForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request for Elderly Care service submitted!');
    // Send formData to your backend here
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Book Elderly Care Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="text" name="address" placeholder="Full Address" required className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <input type="date" name="date" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} />
        <textarea name="notes" placeholder="Additional Notes" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

const ServiceBookingForms = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Our Services</h1>
      <AttendantForm />
      <NurseForm />
      <CaretakerForm />
      <ElderlyCareForm />
    </div>
  );
};

export default ServiceBookingForms;
