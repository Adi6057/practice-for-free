import React, { useState, useEffect} from "react";



const CaregiverBody = () => {

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

    const user = fetchedData ? fetchedData.name : "Guest";
    const userEmail = fetchedData ? fetchedData.email : "Guest";



  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    requirement: "",
    applier: userEmail,
    email: user
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/vcare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      alert("Callback request sent!");
    } catch (err) {
      alert("Error sending callback");
      console.error(err);
    }
  };

 

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-10 md:py-16 bg-white text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Largest Home <br /> Healthcare Service Provider In <br />
              <span className="text-indigo-600 italic">Mumbai & Delhi</span>
            </h1>
            <p className="mt-4 text-lg">
              Your health & wellness, our priority. Experience personal care &
              support with Care24.
            </p>
            <a href="#callback">
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded cursor-pointer font-semibold">
              Request Call Back
            </button>
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-medium">Rated on</p>
            <div className="flex items-center gap-4">
              <img
                src="https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=182&h=243&c=7&r=0&o=5&pid=1.7g"
                alt="Google"
                className="h-20 cursor-pointer"
              />
              <img
                src="https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=182&h=243&c=7&r=0&o=5&pid=1.7"
                alt="Justdial"
                className="h-20 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex space-x-4 mb-6">
            <button className="font-bold border-b-2 border-blue-600 cursor-pointer">
              Nurse
            </button>
            <button className="font-bold border-b-2 border-blue-600 cursor-pointer">
              Physiotherapy
            </button>
            <button className="font-bold border-b-2 border-blue-600 cursor-pointer">
              Baby Care
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <img
              src="https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=182&h=243&c=7&r=0&o=5&pid=1.7"
              alt="Caregiver"
              className="w-64 h-auto rounded-lg"
            />
            <div className="text-left max-w-md">
              <h2 className="font-semibold text-xl mb-2">
                Hire our{" "}
                <span className="text-blue-600 italic">
                  Verified Caregivers
                </span>
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>ICU-trained & experienced nurses</li>
                <li>Personal hygiene and bathing support</li>
                <li>Post-surgical & elder care at home</li>
                <li>Vaccination & IV administration</li>
              </ul>
              <a href="/services">
                <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 cursor-pointer px-4 py-2 rounded font-semibold">
                Book Now & Save up to 20%!
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Booking */}
      <section className="py-12 px-5 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">
          Level up your home healthcare service with{" "}
          <span className="text-blue-600">3 easy steps</span>
        </h2>
        <div className="p-2 flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {[
            "Call and explain the health issue",
            "Choose the service & confirm details",
            "Assigned professional at your doorstep",
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl shadow-sm bg-gray-50 w-full md:w-1/3 cursor-pointer"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {idx + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Request Callback Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center p-7">
          <img
            src="https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=182&h=243&c=7&r=0&o=5&pid=1.7"
            alt="Nurses"
            className="rounded-xl w-2/3 self-center mx-auto"
          />
          <div className="bg-white shadow-lg rounded-lg p-6"  id="callback">
            <h3 className="text-xl font-bold mb-4">Request a Callback</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-4 py-2 rounded"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border px-4 py-2 rounded"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border px-4 py-2 rounded"
                onChange={handleChange}
              />
              <textarea
                placeholder="Requirement"
                className="w-full border px-4 py-2 rounded"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded font-semibold w-full cursor-pointer"
              >
                Request a Callback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-10 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-bold text-lg mb-2">
              PROFESSIONAL & COMPASSIONATE CAREGIVERS
            </h4>
            <p>Trained, verified, and background-checked staff</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">
              CONVENIENT AND PERSONALIZED SERVICES
            </h4>
            <p>Get care tailored to your home and health condition</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">TRANSPARENT PRICING</h4>
            <p>No hidden charges. Know everything upfront</p>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      {/* <section className="py-10 bg-white text-center">
        <h3 className="text-2xl font-bold mb-6">
          Hear What Our Clients Have to Say
        </h3>
        <div className="flex justify-center">
          <iframe
            className="w-full md:w-2/5 h-64 rounded-xl shadow-lg p-5"
            src="https://www.youtube.com/embed/Fzs5fEbT4ic?si=Jr8YoVtOeUqLRKTy"
            title="Client Testimonial"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}
    </main>
  );
};

export default CaregiverBody;
