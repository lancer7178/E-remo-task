import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Products
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/membership"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Membership
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <Image src="/saudi.svg" alt="Language" width={20} height={20} />
              <select className="text-gray-700 text-sm bg-transparent border-none cursor-pointer">
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>

            {/* Create Account Button */}
            <button
              className="text-white px-4 py-2 rounded text-sm font-medium"
              style={{ backgroundColor: "var(--primary-dark)" }}
            >
              Create Account
            </button>

            {/* Login Button */}
            <button className="flex items-center space-x-2 border border-gray-700 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded text-sm font-medium">
              <span>Login</span>
              <Image src="/user.svg" alt="User" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
