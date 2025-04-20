import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import woohooQrCode from "../assets/images/woohooQrCode.jpg";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row space-x-20">
          {/* QR Code Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative bg-white p-4 rounded-lg mb-4">
              <img
                src={woohooQrCode}
                alt="QR Code"
                className="w-[400px]"
              />
            </div>
            <p className="text-sm text-gray-400">Scan to visit our website</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-10 md:mt-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gift-cards"
                    className="text-gray-400 hover:text-white"
                  >
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="text-gray-400 hover:text-white">
                    Deals
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Gift Card Tool Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Gift Card Tool</h3>
              <p className="text-gray-400 mb-4">
                Use our gift card tool to create a gift card for your loved ones.
              </p>
            </div>

            {/* Stay Updated Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest deals and updates.
              </p>
            </div>

            {/* Need Help Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-400 mb-4">
                Contact us for any questions or assistance.
              </p>
            </div>

            {/* Support and Inquiries Section - Spans remaining columns */}
            <div className="md:col-span-2 mt-8">
              <h3 className="text-sm font-semibold">For Support and Inquiries</h3>
              <p className="text-white mb-4 text-2xl font-medium">
                09123456789
              </p>
              <p className="text-gray-400 text-xs">(All days from 9:00 AM to 9:00 PM)</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Naise. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
