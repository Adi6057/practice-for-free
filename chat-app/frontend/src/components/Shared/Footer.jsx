import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white pt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-10 text-sm">
          <div>
            <h2 className="font-bold mb-4">Care24</h2>
            <p>Mumbai, Maharashtra</p>
            <p className="mt-2">care@care24.co.in</p>
            <p>+91-9029 488 488</p>
            <div className="flex space-x-3 mt-4">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Nursing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Attendant
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Physiotherapy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Doctor Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">Location</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Mumbai
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delhi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bangalore
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pune
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">Special Conditions</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Stroke
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orthopedic
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Post Surgery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Agreement Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-white bg-blue-950 py-3">
          © 2025 Care24 Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
