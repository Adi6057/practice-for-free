import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center w-full">
          <div className="text-2xl font-bold">HealthCare Co.</div>
          <div className="hidden md:flex space-x-6">
            <a href="https://otieu.com/4/9411637" className="hover:text-gray-400">Home</a>
            <a href="https://otieu.com/4/9411637" className="hover:text-gray-400">About</a>
            <a href="https://otieu.com/4/9411637" className="hover:text-gray-400">Services</a>
            <a href="https://otieu.com/4/9411637" className="hover:text-gray-400">Projects</a>
            <a href="https://otieu.com/4/9411637" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } md:hidden bg-gray-800 overflow-hidden transition-all duration-1000 ease-in-out`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="https://otieu.com/4/9411637" className="text-white hover:text-gray-400">Home</a>
            <a href="https://otieu.com/4/9411637" className="text-white hover:text-gray-400">About</a>
            <a href="https://otieu.com/4/9411637" className="text-white hover:text-gray-400">Services</a>
            <a href="https://otieu.com/4/9411637" className="text-white hover:text-gray-400">Projects</a>
            <a href="https://otieu.com/4/9411637" className="text-white hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
          {/* Home Section */}
{/* Home Section */}
<section id="home" className="bg-blue-900 text-white py-20 text-center">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
    {/* Left Content (Text) */}
    <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
      <h1 className="text-4xl font-bold mb-4">Welcome to HealthCare Co.</h1>
      <p className="text-xl mb-8">Your Trusted Partner in Quality Healthcare Services</p>
      <a href="https://otieu.com/4/9411637" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Explore Services</a>
    </div>

    {/* Right Content (Image) */}
    <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
      <img 
        src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" 
        alt="Healthcare" 
        className="w-full h-[75%] object-cover rounded-lg"
      />
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-20 bg-white text-center">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
    {/* Left Content (Text) */}
    <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-xl mb-6">
        HealthCare Co. is dedicated to providing exceptional healthcare services to individuals and communities. Our team is committed to improving patient care and promoting overall well-being.
      </p>
      <p className="text-lg mb-8">
        With years of experience, we aim to innovate and lead in the healthcare industry through advanced technologies, compassionate care, and comprehensive services.
      </p>
    </div>

    {/* Right Content (Image) */}
    <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
      <img 
        src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" 
        alt="About Us" 
        className="w-full h-[75%] object-cover rounded-lg"
      />
    </div>
  </div>
</section>



      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Primary Care" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Primary Care</h3>
              <p>Comprehensive primary care to help manage your health and wellness, from check-ups to preventive care.</p>
            </div>
            <div className="service-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Emergency Care" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Emergency Care</h3>
              <p>Emergency care services available 24/7 to treat injuries, accidents, and urgent medical conditions.</p>
            </div>
            <div className="service-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Specialized Treatments" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Specialized Treatments</h3>
              <p>We offer specialized treatments for various medical conditions, including cardiovascular, oncology, and more.</p>
            </div>
            <div className="service-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Wellness Programs" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Wellness Programs</h3>
              <p>Holistic wellness programs to promote mental health, nutrition, and overall lifestyle improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="project-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Health Tech Innovation" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Health Tech Innovation</h3>
              <p>Developing cutting-edge healthcare technology to improve patient experience and streamline healthcare operations.</p>
            </div>
            <div className="project-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Community Health Initiative" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Community Health Initiative</h3>
              <p>Providing healthcare access to underserved communities, focusing on preventive care and education.</p>
            </div>
            <div className="project-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Health Outreach" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Health Outreach</h3>
              <p>Organizing outreach programs to spread awareness about important health issues in our community.</p>
            </div>
            <div className="project-card p-6 bg-white shadow-md rounded-md">
              <img src="https://www.pixelstalk.net/wp-content/uploads/image10/Cool_beach_wallpaper_for_desktop_Full_HD.jpg" alt="Research Initiatives" className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Research Initiatives</h3>
              <p>Conducting cutting-edge medical research to develop new treatments and improve patient outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
<section id="contact" className="bg-gradient-to-r from-indigo-600 to-blue-800 py-20 text-white">
  <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
    <h2 className="text-4xl font-extrabold mb-6">Contact Us</h2>
    <p className="text-xl mb-12">We would love to hear from you! Please fill out the form below or get in touch through our contact details.</p>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="w-full text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="text-left text-gray-300 max-w-md w-full mt-8 lg:mt-0">
        <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
        <p className="text-lg mb-4">123 HealthCare Street, City, Country</p>
        <p className="text-lg mb-4">Phone: +1 (555) 123-4567</p>
        <p className="text-lg mb-4">Email: info@healthcareco.com</p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      {/* Footer Section */}
<footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-6">
    {/* Footer Top Links */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
      {/* Column 1 */}
      <div>
        <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
        <ul>
          <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#careers" className="hover:text-gray-400">Careers</a></li>
          <li><a href="#press" className="hover:text-gray-400">Press Releases</a></li>
          <li><a href="#amazon" className="hover:text-gray-400">Amazon Devices</a></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
        <ul>
          <li><a href="#affiliate" className="hover:text-gray-400">Become an Affiliate</a></li>
          <li><a href="#advertise" className="hover:text-gray-400">Advertise Your Products</a></li>
          <li><a href="#amazon" className="hover:text-gray-400">Sell on Amazon</a></li>
          <li><a href="#fulfillment" className="hover:text-gray-400">Fulfillment by Amazon</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
        <ul>
          <li><a href="#help" className="hover:text-gray-400">COVID-19 and Amazon</a></li>
          <li><a href="#returns" className="hover:text-gray-400">Returns & Replacements</a></li>
          <li><a href="#shipping" className="hover:text-gray-400">Shipping Rates & Policies</a></li>
          <li><a href="#customer-service" className="hover:text-gray-400">Customer Service</a></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h3 className="font-bold text-lg mb-4">Amazon Payment Products</h3>
        <ul>
          <li><a href="#amazon-visa" className="hover:text-gray-400">Amazon Rewards Visa Signature Cards</a></li>
          <li><a href="#amazon-store" className="hover:text-gray-400">Amazon.com Store Card</a></li>
          <li><a href="#reloading" className="hover:text-gray-400">Reload Your Balance</a></li>
          <li><a href="#payment" className="hover:text-gray-400">Amazon Currency Converter</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media Section */}
    <div className="flex justify-center gap-6 mb-6">
      <a href="#" className="text-gray-400 hover:text-gray-200">
        <i className="fab fa-facebook-square fa-2x"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-200">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-200">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-200">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
    </div>

    {/* Copyright Section */}
    <div className="text-center text-gray-400 text-sm">
      <p>&copy; 2025 HealthCare Co. All Rights Reserved.</p>
      <p className="mt-2">Amazon Clone - Created for educational purposes</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default App;
