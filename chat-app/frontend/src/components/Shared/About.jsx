import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="flex flex-row md:flex-row items-center justify-between p-8 md:p-16 bg-blue-50">
        <div className="w-1/2 md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-blue-900">About Us!</h1>
          <p className="text-lg font-medium">
            Empowering homes with <span className="font-semibold text-blue-600">professional, world-class & affordable home healthcare</span>,<br />
            because <span className="text-orange-500 font-bold">we care for you!</span>
          </p>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7"
          alt="Care24 Team"
          className="rounded-xl mt-8 md:mt-0 w-1/2 md:w-[40%] shadow-md"
        />
      </section>

      {/* Trusted Partner Section */}
      <section className="px-6 md:px-24 py-10 text-center">
        <h2 className="text-2xl font-semibold text-blue-900">
          Your Trusted Home <span className="text-blue-600">Healthcare Partner</span>
        </h2>
        <p className="mt-4 text-gray-700">
          At Care24, we deeply understand the challenges many face post-surgery or when battling chronic pain. [...] 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="p-6 bg-white shadow-lg rounded-2xl border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold">Who we are</h3>
            <p className="mt-2 text-gray-600">
              Founded in 2014 by visionary IIT alumni, Care24 strives to bring professional and compassionate [...] 
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold">Our Commitment</h3>
            <p className="mt-2 text-gray-600">
              With Care24, wave goodbye to the constant worry about the well-being of your loved ones. Trust in our trained caregivers [...] 
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-blue-50 py-12 px-6 md:px-24 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Team, <span className="text-blue-600">Leadership with Vision and Compassion</span></h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our dedicated team at Care24 comprises passionate professionals who share a collective vision of transforming home healthcare.
        </p>

        <h3 className="mt-12 text-xl font-bold border-b-2 border-blue-200 w-fit mx-auto pb-1">Meet Our Team</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {[
            {
              name: 'Garima Tripathi',
              title: 'Co-founder',
              img: 'https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7',
              desc: 'Garima, an IIT graduate, is the backbone of Care24’s operational excellence...'
            },
            {
              name: 'Vipin Pathak',
              title: 'Founder & CEO',
              img: 'https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7',
              desc: 'An alumnus of IIT, Vipin’s visionary leadership has been instrumental in shaping Care24’s success...'
            },
            {
              name: 'Jagjit Singh',
              title: 'Chief Operating Officer',
              img: 'https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7',
              desc: ''
            },
            {
              name: 'Rahul Nair',
              title: 'Supply Head',
              img: 'https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7',
              desc: ''
            },
            {
              name: 'Divyank Singh',
              title: 'NCR, City Head',
              img: 'https://th.bing.com/th/id/OIP.mhSmze40-jaFnIloebbhVAHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7',
              desc: ''
            },
          ].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={member.img} alt={member.name} className="w-32 h-32 object-cover rounded-full mb-4 shadow-md" />
              <h4 className="text-lg font-semibold text-blue-800">{member.name}</h4>
              <p className="text-sm text-gray-600 font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 px-6 md:px-24 text-center">
        <h2 className="text-2xl font-bold text-blue-900">Care24 news coverage</h2>
        <p className="mt-2 text-gray-700">
          Transforming home healthcare with quality home healthcare services in Mumbai, Delhi-NCR & Bangalore
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: 'JUNE 2019 A special presentation complimentary with Forbes to Care24',
              source: 'Forbes HEALTHCARE',
              desc: 'Forbes India Marquee, a marketing initiative...'
            },
            {
              title: 'Home caregiving thrives but talent needs to keep pace',
              source: 'The Economic Times',
              desc: 'Proud to announce that Care24 is in a spree of market penetration...'
            },
            {
              title: 'Mumbai-based healthcare start-up in talks with investors to raise funds',
              source: 'Financial Express',
              desc: 'Care24 operates in Mumbai and Delhi. It raised $350,000...'
            },
          ].map((news, idx) => (
            <div key={idx} className="bg-white shadow-lg p-6 rounded-xl">
              <h4 className="text-blue-900 font-semibold mb-2">{news.source}</h4>
              <p className="text-md font-bold text-gray-800 mb-1">{news.title}</p>
              <p className="text-sm text-gray-600">{news.desc}</p>
            </div>
          ))}
        </div>

        <a href="#" className="inline-block mt-6 text-blue-600 font-semibold hover:underline">Get Full Coverage →</a>
      </section>
    </div>
  );
}
