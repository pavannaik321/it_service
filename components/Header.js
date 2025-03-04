import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  // Function to check if the link is active
  const isActive = (path) => router.pathname === path ? "text-blue-400 font-bold" : "text-white";

  return (
    <header className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">TechElevate</h1>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className={`hover:text-gray-300 ${isActive("/")}`}>Home</Link>
          <Link href="/about" className={`hover:text-gray-300 ${isActive("/about")}`}>About</Link>
          <Link href="/services" className={`hover:text-gray-300 ${isActive("/services")}`}>Services</Link>
          <Link href="/pricing" className={`hover:text-gray-300 ${isActive("/pricing")}`}>Pricing</Link>
          <Link href="/contact" className={`hover:text-gray-300 ${isActive("/contact")}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
