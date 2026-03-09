import Image from "next/image";
import { Facebook, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Chair Location"
                width={120}
                height={120}
                className="h-28 w-auto"
              />
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 text-[#365327]  rounded-sm flex items-center justify-center"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 text-[#365327]  rounded-sm flex items-center justify-center"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="flex  gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 text-[#365327]  rounded-sm flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 text-[#365327]  rounded-sm flex items-center justify-center"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className="text-[#365327] font-bold text-2xl mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#365327] font-bold text-2xl  mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                    <Image
                    src="/footer/conference.svg"
                    alt="price-tag"
                    width={16}
                    height={16}
                    className="inline-block mr-2"
                />
                  Shared Space
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                           <Image
                    src="/footer/co-working.svg"
                    alt="price-tag"
                    width={16}
                    height={16}
                    className="inline-block mr-2"
                />
                  Private Offices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                           <Image
                    src="/footer/workplace.svg"
                    alt="price-tag"
                    width={16}
                    height={16}
                    className="inline-block mr-2"
                />
                  Meeting Rooms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900"
                >
                           <Image
                    src="/footer/video-call.svg"
                    alt="price-tag"
                    width={16}
                    height={16}
                    className="inline-block mr-2"
                />
                  Virtual Offices
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-[#365327] font-semibold text-2xl mb-4">
              Download the Chair Location App
            </h3>
            <div className="space-y-3">
              <a href="#" className="inline-block">
                <Image
                  src="/footer/Group 36855.png"
                  alt="Google Play"
                  width={160}
                  height={48}
                  className="h-auto w-40"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/footer/Group 36856.png"
                  alt="App Store"
                  width={160}
                  height={48}
                  className="h-auto w-40"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms & Conditions
            </a>
          </div>
          <p className="text-sm text-gray-600">
            All Copyrights Chair Location | Developed by{" "}
            <span className="font-semibold">e-RAMO For Digital Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
