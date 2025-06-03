import React from "react";

function ServicesPage() {
  const services = [
    {
      title: "Caretaker Services",
      description:
        "Our caretaker services offer compassionate support for individuals who require assistance with daily tasks. Our trained caretakers provide companionship, help with mobility, and assist with personal care such as bathing, dressing, and grooming. Whether it’s for the elderly, disabled, or anyone needing assistance, we ensure your loved one receives the care they deserve in the comfort of their home.",
      details:
        "With a focus on empathy and respect, our caretakers provide physical, emotional, and social support. We tailor our services to meet the unique needs of each individual, ensuring they live a dignified and fulfilling life. Our caregivers are trained to handle various medical and personal care situations, offering peace of mind to families who cannot always be present."
    },
    {
      title: "Child Caretaker Services",
      description:
        "Our child caretakers provide a nurturing, safe, and loving environment for children of all ages. From newborns to toddlers, our caregivers are skilled in offering developmental support, basic care, and educational activities. Parents can trust that their children are in capable hands while they attend to their own work or personal commitments.",
      details:
        "Our services include feeding, diapering, nap time, playtime, and educational activities tailored to your child's age. We ensure your child's safety and well-being at all times, providing emotional support and encouraging healthy growth. Our child caretakers are thoroughly trained and experienced in early childhood development."
    },
    {
      title: "Doctor Consultancy",
      description:
        "Access medical expertise from the comfort of your home with our doctor consultancy services. Whether it's for a routine check-up or a specific health concern, our experienced doctors offer virtual consultations to diagnose, advise, and recommend treatments.",
      details:
        "Our doctors are available for video consultations, phone calls, or even online chat. We provide advice for common illnesses, chronic conditions, general health, and even preventive care. Our goal is to make healthcare more accessible, saving you time while ensuring you receive the best care possible."
    },
    {
      title: "Home Nursing",
      description:
        "Home nursing services are ideal for individuals who require medical care at home, whether recovering from surgery or managing chronic conditions. Our registered nurses provide medical care, assist with medications, manage wounds, and monitor vital signs in the comfort of your home.",
      details:
        "Our home nurses are highly trained professionals who can help with a wide range of needs, including medication administration, wound care, post-surgery rehabilitation, and chronic disease management. We work closely with doctors to ensure you or your loved one receives continuous, high-quality care at home."
    },
    {
      title: "Elderly Assistance",
      description:
        "We provide comprehensive elderly assistance for seniors who need help with daily activities, mobility, and emotional support. Our trained caregivers ensure that elderly individuals maintain a high quality of life while receiving the support they need.",
      details:
        "From personal care to companionship, our elderly assistance services are designed to promote independence while ensuring safety and comfort. We assist with daily tasks such as dressing, eating, medication reminders, and transportation. Our caregivers also offer companionship, engaging in conversation and activities that enhance the emotional well-being of the elderly."
    },
    {
      title: "Physical Therapy",
      description:
        "Our physical therapy services help individuals recover from injuries, surgery, or chronic pain. Our licensed physical therapists create customized recovery plans to help improve mobility, strength, and flexibility.",
      details:
        "Whether you’re recovering from an injury or surgery, or managing a condition like arthritis or back pain, our physical therapy services aim to restore your function and quality of life. We offer a variety of therapies, including exercises, stretches, and hands-on techniques, all tailored to your specific needs."
    },
    {
      title: "Mental Health Support",
      description:
        "We understand the importance of mental well-being, which is why we offer mental health support through counseling and therapy. Our licensed psychologists and therapists provide support for a wide range of mental health issues, including anxiety, depression, stress, and trauma.",
      details:
        "We offer one-on-one therapy sessions tailored to individual needs, focusing on cognitive-behavioral therapy (CBT), mindfulness, stress management, and other therapeutic techniques. Whether you're struggling with everyday stress or dealing with a more serious mental health condition, our therapists are here to support you in your journey toward better mental health."
    }
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Comprehensive Services</h1>
        {services.map((service, index) => (
          <div key={index} className="mb-16 bg-white p-8 rounded-lg shadow-lg">
            {/* Service Header */}
            <div className="flex justify-center items-center mb-6">
              <div className="text-blue-600 text-4xl mr-4">{service.icon}</div>
              <h2 className="text-3xl font-semibold text-gray-800">{service.title}</h2>
            </div>
            
            {/* Service Description */}
            <p className="text-lg text-gray-700 mb-4">{service.description}</p>

            {/* Full Details */}
            <div className="text-gray-600 text-lg leading-relaxed">
              <p>{service.details}</p>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
