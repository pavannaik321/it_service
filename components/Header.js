import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing three dots icon

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Function to check if the link is active
  const isActive = (path) => router.pathname === path ? "text-blue-400 font-bold" : "text-white";

  return (
    <header className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">TechElevate</h1>

        {/* Desktop Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className={`hover:text-gray-300 ${isActive("/")}`}>Home</Link>
          <Link href="/about" className={`hover:text-gray-300 ${isActive("/about")}`}>About</Link>
          <Link href="/services" className={`hover:text-gray-300 ${isActive("/services")}`}>Services</Link>
          <Link href="/pricing" className={`hover:text-gray-300 ${isActive("/pricing")}`}>Pricing</Link>
          <Link href="/contact" className={`hover:text-gray-300 ${isActive("/contact")}`}>Contact</Link>
        </nav>

        {/* Mobile Menu Button (Three Dots) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white absolute top-16 left-0 w-full p-4 shadow-lg">
          <nav className="flex flex-col space-y-4 text-center">
            <Link href="/" className={`hover:text-gray-300 ${isActive("/")}`} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={`hover:text-gray-300 ${isActive("/about")}`} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className={`hover:text-gray-300 ${isActive("/services")}`} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/pricing" className={`hover:text-gray-300 ${isActive("/pricing")}`} onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/contact" className={`hover:text-gray-300 ${isActive("/contact")}`} onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
