import React, { useState } from 'react';
import { useUser } from '../../UserContext'

// Helper to parse cookies

export default function Applier() {
  const [duties, setDuties] = useState([]);

  const {user, setUser} = useUser();

  const loadDutiesAndUser = async () => {
    // Step 1: Load duties
    try {
      const dutiesRes = await fetch('http://localhost:3000/api/get-duties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const dutiesData = await dutiesRes.json();
      setDuties(dutiesData);
    } catch (err) {
      console.error('Error fetching duties:', err);
    }

    // Step 2: Get cookie and fetch full user

    try {

      const email = user?.email;

      const userRes = await fetch('http://localhost:3000/api/get-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      const userData = await userRes.json();
      console.log('✅ Full user data:', userData);
      setUser(userData);
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const handleApply = async (duty) => {
    if (!user) return alert('Please log in to apply.');

    const payload = { user, duty };

    try {
      const res = await fetch('http://localhost:3000/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert('Applied successfully!');
    } catch (err) {
      console.error('Error applying:', err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Available Duties</h1>

      <div className='text-center'>
      <button
        onClick={loadDutiesAndUser}
        className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer"
      >
        Load Duties
      </button>
      </div>

      {duties.map((duty) => (
        <div key={duty._id} className="bg-white p-4 rounded shadow mb-4">
          <p><strong>Name:</strong> {duty.name}</p>
          <p><strong>Gnder:</strong> {duty.gender}</p>
          <p><strong>Phone:</strong> {duty.phone}</p>
          <p><strong>Aadhar:</strong> {duty.adhar}</p>
          <p><strong>Role:</strong> {duty.role}</p>
          <p><strong>Address:</strong> {duty.address}</p>
          <button
            onClick={() => handleApply(duty)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}
