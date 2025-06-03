import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useUser } from "../../UserContext";

const AttendancePage = ({ userId }) => {
  const { user } = useUser();
  const email = user?.email;
  const [attendanceData, setAttendanceData] = useState([]);
  const [leaveDays, setLeaveDays] = useState(1);
  const today = format(new Date(), "yyyy-MM-dd");

  const fetchAttendance = async () => {
    const res = await fetch(`http://localhost:3000/attendance`);
    const data = await res.json();
    setAttendanceData(data.AttendanceData || []);
  };

  const markPresent = async () => {
    try {
      const response = await fetch("http://localhost:3000/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          status: "Present",
          date: today,
          email: email, // Assuming 'email' is available in this component
        }),
      });

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Attendance response:", result.message);

      // Refresh attendance data
      fetchAttendance();
    } catch (error) {
      console.error("Failed to mark attendance:", error.message);
    }
  };

  const handleLeaveRequest = async () => {
    const fromDate = new Date();
    const toDate = new Date();
    toDate.setDate(fromDate.getDate() + leaveDays - 1);

    await fetch("http://localhost:3000/api/leave/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        fromDate: format(fromDate, "yyyy-MM-dd"),
        toDate: format(toDate, "yyyy-MM-dd"),
        days: leaveDays,
      }),
    });
    fetchAttendance();
  };

  useEffect(() => {
    fetchAttendance();
  }, [userId]); // Re-run when userId changes

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Attendance Dashboard
      </h2>

      <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 rounded-lg shadow">
        <p className="text-lg font-medium">Today: {today}</p>
        <button
          onClick={markPresent}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer"
        >
          Mark Present
        </button>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Attendance Record</h3>
        <div className="overflow-x-auto rounded-lg shadow h-100">
          <table className="min-w-full bg-white text-left text-sm">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-4">
                    {new Date(entry.time).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-white font-medium ${
                        entry.status === "Present"
                          ? "bg-green-500"
                          : entry.status === "Leave"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Request Leave</h3>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={leaveDays}
            onChange={(e) => setLeaveDays(e.target.value)}
            className="border px-4 py-2 rounded w-24"
            min="1"
          />
          <button
            onClick={handleLeaveRequest}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer"
          >
            Request Leave
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default AttendancePage;
