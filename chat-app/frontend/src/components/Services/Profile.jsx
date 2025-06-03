import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Profile = () => {

  const navigate = useNavigate();


  const [fetchedData, setFetchedData] = useState(null);

  // 🔹 GET request runs once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // if using cookies
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        console.log("GET request received data:", data);
        setFetchedData(data);
      } catch (err) {
        console.error("GET Error:", err.message);
      }
    };

    fetchData();
  }, []);

  const user = fetchedData ? fetchedData.user?.name : "Guest";
  const userEmail = fetchedData ? fetchedData.user?.email : "Guest@gmail.com";

  const logout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include"
    }).then(() => {
      setFetchedData(null);
      navigate("/login"); // or "/" or wherever you want
      window.location.reload();
    }).catch((err) => {
      console.error("Logout error:", err);
    });
  };
  

  
  const caretaker = {
    name: user,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Home Care Nurse',
    location: 'Mumbai, India',
    bio: 'I am a certified nurse with 6+ years of experience in elderly and post-operative care. My goal is to bring comfort and safety to every home I visit.',
    rating: 4.8,
    skills: ['Medication Assistance', 'Mobility Support', 'Daily Hygiene', 'Meal Prep'],
    availability: ['Monday to Friday - 9am to 6pm'],
    documents: ['Nursing License', 'Govt ID', 'First Aid Certificate'],
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="bg-blue-100 p-6 flex flex-col items-center md:w-1/3">
            <img
              src={caretaker.image}
              alt={caretaker.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
            <h2 className="text-xl font-bold uppercase text-gray-800 mt-4">{caretaker.name}</h2>
            <p className="text-sm text-gray-500">{caretaker.title}</p>
            <p className="text-xs text-gray-400 mt-1">{caretaker.location}</p>
            <div className="flex items-center text-yellow-500 mt-3">
              {/* <Star className="fill-yellow-400 w-5 h-5" /> */}
              <span className="ml-1 text-sm font-semibold">{caretaker.rating} / 5</span>
            </div>
            <button onClick={logout} className="mt-6 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 flex items-center gap-2 text-sm cursor-pointer">
              {/* <LogOut size={16} /> Logout */} Logout
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 p-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">About Me</h3>
            <p className="text-gray-700 text-sm mb-4">{caretaker.bio}</p>

            <h3 className="text-lg font-semibold text-blue-800 mb-2">Skills & Services</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {caretaker.skills.map((skill, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mb-2">Availability</h3>
            <ul className="list-disc ml-6 text-sm text-gray-700 mb-4">
              {caretaker.availability.map((time, i) => (
                <li key={i}>{time}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-blue-800 mb-2">Documents</h3>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              {caretaker.documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center mt-4 mb-4 px-6'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 cursor-pointer'>Edit Profile</button>
            <a className='text-blue-800 underline' href="/apply-duty">Watch New Duties --</a>
          </div>
      </div>
    </div>
  );
};

export default Profile;
