import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    
    <nav className="h-16 w-full bg-gray-800 flex justify-between items-center text-white px-6 shadow-lg">
      {/* Hamburger Menu for Mobile (Left side) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl cursor-pointer">
          {isOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Logo Section (Right side) */}
      <section className="flex items-center mr-10 space-x-2 w-1/4">
        <img
          className="h-12 w-12 rounded-full"
          src="https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?rs=1&pid=ImgDetMain"
          alt="Ragnar"
        />
        <h1 className="text-xl font-semibold">Ragnar</h1>
      </section>

      {/* Desktop Navbar Links */}


        {fetchedData ? (
          // If user is found, show the user's name
          <ul className="hidden md:flex space-x-5 items-center uppercase text-md">
          <li className='hover:underline font-bold'><a href="/profile">Profile</a></li>
          <li className='hover:underline font-bold'><a href="/payments">Payments</a></li>
          <li className='hover:underline font-bold'><a href="/attendance">Attendance</a></li>
          <li className='hover:underline font-bold'><a href="/chat-us">Chat us</a></li>
        </ul>
        ) : (
          // If user is not found, show login link
          <ul className="hidden md:flex space-x-5 items-center uppercase text-md">
          <li className='hover:underline font-bold'><a href="/about-us">About Us</a></li>
          <li className='hover:underline font-bold'><a href="/">Home</a></li>
          <li className='hover:underline font-bold'><a href="/services">Services</a></li>
          <li className='hover:underline font-bold'><a href="/projects">Projects</a></li>
          <li className='hover:underline font-bold'><a href="/login">Login</a></li>
        </ul>
        )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-1/2 bg-gray-800 text-white h-screen transition-all duration-300 transform md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Cross Icon to Close the Menu */}
        <div className="flex justify-center p-6">
          <button onClick={toggleMenu} className="text-3xl text-white cursor-pointer">
            X
          </button>
        </div>


          {fetchedData ? (
          // If user is found, show the user's name
          <ul className="flex flex-col items-center space-y-6 pt-1">
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/profile" className='w-full' onClick={toggleMenu}>Profie</a></li>
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/payments" className='w-full' onClick={toggleMenu}>Payments</a></li>
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/Attendance" className='w-full' onClick={toggleMenu}>Attendance</a></li>
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/chat-us" className='w-full' onClick={toggleMenu}>Chat Us</a></li>
        </ul>
        ) : (
          // If user is not found, show login link
          <ul className="flex flex-col items-center space-y-6 pt-1">
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/about-us" onClick={toggleMenu}>About Us</a></li>
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/" onClick={toggleMenu}>Home</a></li>
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/projects" onClick={toggleMenu}>Projects</a></li>
          <li className='hover:bg-blue-500 w-full text-center h-10 flex justify-center items-center rounded-3xl cursor-pointer'><a href="/login" onClick={toggleMenu}>Login</a></li>
        </ul>
        )}      
      </div>
    </nav>
  );
};

export default Navbar;
