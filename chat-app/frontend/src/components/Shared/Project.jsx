import React from 'react';

export default function ProjectPage() {
  return (
    <div className="bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Our Accomplished Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-blue-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-700">Caretaker Services</h2>
          <p>Over 1,200+ caretakers deployed across homes with consistent 5-star reviews and feedback.</p>
        </div>

        <div className="p-4 bg-green-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-green-700">Attendant Services</h2>
          <p>More than 1,000 attendants have supported elderly and disabled individuals in daily care routines.</p>
        </div>

        <div className="p-4 bg-yellow-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-yellow-700">Nursing Services</h2>
          <p>800+ certified nurses placed for post-surgery care, elder care, and critical home nursing assistance.</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-purple-700">Elderly Care Visits</h2>
          <p>Conducted 5,000+ home visits ensuring safety, health checkups, and mental wellbeing of seniors.</p>
        </div>

        <div className="p-4 bg-pink-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-pink-700">Client Satisfaction</h2>
          <p>Rated 4.9/5 by 3,500+ clients across metro cities. Known for personalized care and real-time updates.</p>
        </div>

        <div className="p-4 bg-indigo-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-indigo-700">Experienced Workforce</h2>
          <p>Team of 2,000+ trained healthcare professionals with over 20 years of collective experience.</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Future Goals</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Expand Care24 services to 10+ more cities across India by 2026.</li>
          <li>Launch a mobile app for real-time caregiver tracking and feedback.</li>
          <li>Develop AI-based health monitoring tools for patients under home care.</li>
          <li>Partner with hospitals to provide seamless discharge-to-home transition care.</li>
          <li>Offer international placement and caregiving services for NRIs’ families.</li>
        </ul>
      </div>
    </div>
  );
}
