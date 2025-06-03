import React, { useEffect, useState } from "react";

const PaymentPage = () => {
  const [payments, setPayments] = useState([]);

  // Dummy fetch call - Replace with actual API
  useEffect(() => {
    const dummyPayments = [
      { id: 1, amount: 1000, type: "Received", date: "2025-04-20", from: "Client A" },
      { id: 2, amount: 500, type: "Paid", date: "2025-04-21", to: "Caregiver B" },
      { id: 3, amount: 1500, type: "Received", date: "2025-04-22", from: "Client C" },
    ];
    setPayments(dummyPayments);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Payment History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">From/To</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t">
                <td className="px-6 py-4">{payment.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full font-semibold text-white ${
                      payment.type === "Received" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {payment.type}
                  </span>
                </td>
                <td className="px-6 py-4">₹{payment.amount}</td>
                <td className="px-6 py-4">
                  {payment.type === "Received" ? payment.from : payment.to}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentPage;