import React, { useEffect, useState } from 'react';

const DutiesPage = () => {
  const [duties, setDuties] = useState([]);

  // Fetch duties using POST
  useEffect(() => {
    const fetchDuties = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/get-duties', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });

        const data = await response.json();
        setDuties(data);
      } catch (error) {
        console.error('Error fetching duties:', error);
      }
    };

    fetchDuties();
  }, []);

  // Update fields like isRead, hasCalled, isConfirmed
  const updateDutyStatus = async (id, field) => {
    try {
      const response = await fetch(`http://localhost:3000/api/update-duty/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ field }),
      });

      const result = await response.json();

      if (result.success) {
        setDuties(prev =>
          prev.map(duty =>
            duty._id === id ? { ...duty, [field]: true } : duty
          )
        );
      }
    } catch (error) {
      console.error('Error updating duty:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Available Duties</h2>
      {duties.length === 0 ? (
        <p>No duties available.</p>
      ) : (
        <div className="grid gap-4">
          {duties.map(duty => (
            <div key={duty._id} className="border p-4 rounded shadow-sm bg-white">
              <p><strong>Name:</strong> {duty.name}</p>
              <p><strong>Email:</strong> {duty.email}</p>
              <p><strong>Phone:</strong> {duty.phone}</p>
              <p><strong>Adhar:</strong> {duty.adhar}</p>
              <p><strong>Role:</strong> {duty.role}</p>
              <p><strong>Address:</strong> {duty.address}</p>
              <p><strong>isRead:</strong> {duty.isRead ? '✅' : '❌'}</p>
              <p><strong>hasCalled:</strong> {duty.hasCalled ? '✅' : '❌'}</p>
              <p><strong>isConfirmed:</strong> {duty.isConfirmed ? '✅' : '❌'}</p>

              <div className="flex gap-4 mt-3 flex-wrap">
                <button
                  onClick={() => updateDutyStatus(duty._id, 'isRead')}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  disabled={duty.isRead}
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => updateDutyStatus(duty._id, 'hasCalled')}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  disabled={duty.hasCalled}
                >
                  Mark as Called
                </button>
                <button
                  onClick={() => updateDutyStatus(duty._id, 'isConfirmed')}
                  className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
                  disabled={duty.isConfirmed}
                >
                  Confirm Duty
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DutiesPage;
