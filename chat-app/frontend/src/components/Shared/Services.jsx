export function AttendantPage() {
    return (
      <div className="bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Round-the-Clock Attendant Support</h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">
          Care24 offers trained and compassionate attendants to assist patients with their daily needs — from hygiene care to feeding support — ensuring safety, dignity, and comfort.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {['Personal Hygiene Assistance', 'Mobility Support', 'Feeding & Nutrition Help', 'Basic Vital Monitoring'].map((service, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service}</h3>
              <p className="text-gray-600">High-quality care designed around patient comfort and recovery in their own home.</p>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-10">
          <a href="/apply/attendant" className="inline-block">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 cursor-pointer">Book an Attendant Now</button>
          </a>
        </div>
      </div>
    );
  }
  
  export function NursePage() {
    return (
      <div className="bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Skilled Nursing at Your Doorstep</h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">
          Our licensed nurses deliver hospital-level care in the comfort of your home — ensuring faster recovery and clinical precision with personal touch.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {['IV Infusion & Medication', 'Post-surgical Wound Dressing', 'Injections & Vaccinations', 'Medical Equipment Handling'].map((service, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service}</h3>
              <p className="text-gray-600">Delivered with precision and care, right where you need it most.</p>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-10">
          <a href="/apply/nurse" className="inline-block">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 cursor-pointer">Request a Nurse Visit</button>
          </a>
        </div>
      </div>
    );
  }
  
  export function CaretakerPage() {
    return (
      <div className="bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Companionship with Dignity & Empathy</h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">
          Our friendly caretakers provide emotional and physical support to help individuals navigate daily life with ease, dignity, and peace of mind.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {['Daily Routine Help', 'Emotional Companionship', 'Meal Prep & Medication Reminders', 'Household Assistance'].map((service, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service}</h3>
              <p className="text-gray-600">Every service is rooted in empathy, compassion, and understanding.</p>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-10">
          <a href="/apply/caretaker" className="inline-block">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 cursor-pointer">Find a Trusted Caretaker</button>
          </a>
        </div>
      </div>
    );
  }
  
  export function ElderlyCarePage() {
    return (
      <div className="bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Comprehensive Elderly Care with Heart</h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">
          We specialize in senior care that enhances the lives of elders through respect, dignity, emotional support, and professional caregiving.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {['Daily Living Support', 'Check-In & Companionship', 'Medical Coordination', 'Mobility & Hygiene Help'].map((service, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service}</h3>
              <p className="text-gray-600">Care that promotes independence and emotional well-being.</p>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-10">
          <a href="/apply/elderly" className="inline-block">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 cursor-pointer">Get Elderly Care Services</button>
          </a>
        </div>
      </div>
    );
  }
  