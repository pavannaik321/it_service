import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      <div>
        <h4 className="text-xl font-semibold">TechElevate</h4>
        <p className="mt-2">Providing top-notch IT solutions for businesses worldwide.</p>
        <div className="mt-4 flex space-x-4">
          <a href="#"><i className="fab fa-facebook-f text-xl"></i></a>
          <a href="#"><i className="fab fa-twitter text-xl"></i></a>
          <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
          <a href="#"><i className="fab fa-instagram text-xl"></i></a>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold">Quick Links</h4>
        <ul className="mt-2 space-y-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold">Get in Touch</h4>
        <p className="mt-2">VIT Incubator, Vellore, Tamil Nadu</p>
        <p className="mt-2">pavanpnaik321@gmail.com</p>
        <p className="mt-2">+91 9113909285</p>
      </div>
    </div>
    <div className="text-center mt-8 border-t border-gray-600 pt-6">
      <p>© 2025 TechElevate. All rights reserved.</p>
    </div>
  </footer>
  )
}
