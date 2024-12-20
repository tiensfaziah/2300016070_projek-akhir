import { Link } from "react-router-dom";
import logo from "../assets/icons/Logo.png"; // Pastikan ini mengarah ke file logo

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#ffecd2] to-[#ffe3c6] p-4 text-[#5f4b32] shadow-md rounded-b-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="FeelSpace Logo" 
            className="w-16 h-19 object-contain"
          />
        </div>
        {/* Navbar Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-[#e07a00] transition duration-300 font-semibold text-lg"
          >
            Home
          </Link>
          <Link
            to="/add-journal"
            className="hover:text-[#e07a00] transition duration-300 font-semibold text-lg"
          >
            Add Journal
          </Link>
          <Link
            to="/analytics"
            className="hover:text-[#e07a00] transition duration-300 font-semibold text-lg"
          >
            Analytics
          </Link>
          <Link
            to="/about"
            className="hover:text-[#e07a00] transition duration-300 font-semibold text-lg"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
