import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logof from "../assets/logof.svg"


const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <Image src={logof} alt="Company Logo" width={150} height={50} />
            <p className="mt-4 md:text-[13px] font-futura mb-4">
            Anyaa Softek Technologies Private limited based in Dehradun, has 13 years of expertise in software consultancy, specializing in web and mobile app development, branding, UI/UX, and cloud solutions. Experience innovation and excellence with ASTPL – your trusted digital partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className='md:mr-10'>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#aboutUs">Home</a></li>
              <li><a href="/services">About Us</a></li>
              <li><a href="/products">Contact Us</a></li>
              <li><a href="/contact"> Services</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/terms">Terms and Condition</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/faq">Aanya Softek</a></li>
              <li><a href="/careers">Anya softek</a></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-xl font-gilory font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                51/16-B, Doon Vihar, Rajpur Road,
Jakhan Dehradun - 248001 (UK)
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>
                +91 9560346002
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>
                anyasoftek@admin.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Aanya Softek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
