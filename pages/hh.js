


import Head from "next/head";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import CustomDropdown from "@/components/dropdown";


export default function Pricing() {

  // Services and their pricing plans
  const services = {
    "Website Development": [
      { name: "Basic", price: "₹8,000", features: ["Static Website", "Up to 5 Pages", "Basic SEO"], unavailable: ["Custom Design"] },
      { name: "Standard", price: "₹16,000", features: ["Dynamic Website", "Up to 10 Pages", "SEO & Analytics"], unavailable: ["E-commerce"] },
      { name: "Advanced", price: "₹28,000", features: ["E-commerce", "Unlimited Pages", "Premium Hosting"], unavailable: [] }
    ],
    "App Development": [
      { name: "Basic", price: "₹15,000", features: ["Android App", "Basic UI", "No Backend"], unavailable: ["iOS Support"] },
      { name: "Standard", price: "₹30,000", features: ["Android & iOS", "Custom UI", "API Integration"], unavailable: ["Advanced Features"] },
      { name: "Advanced", price: "₹50,000", features: ["Full-Stack App", "AI Features", "Cloud Hosting"], unavailable: [] }
    ],
    "Digital Marketing": [
      { name: "Basic", price: "₹5,000", features: ["SEO Audit", "Google My Business", "1 Social Media Page"], unavailable: ["Paid Ads"] },
      { name: "Standard", price: "₹12,000", features: ["SEO Optimization", "Social Media Marketing", "Ad Campaign Setup"], unavailable: [] },
      { name: "Advanced", price: "₹25,000", features: ["Advanced Ads", "Lead Generation", "Brand Strategy"], unavailable: [] }
    ],
    "Website Development": [
      { name: "Basic", price: "₹8,000", features: ["Static Website", "Up to 5 Pages", "Basic SEO"], unavailable: ["Custom Design"] },
      { name: "Standard", price: "₹16,000", features: ["Dynamic Website", "Up to 10 Pages", "SEO & Analytics"], unavailable: ["E-commerce"] },
      { name: "Advanced", price: "₹28,000", features: ["E-commerce", "Unlimited Pages", "Premium Hosting"], unavailable: [] }
    ],
    "App Development": [
      { name: "Basic", price: "₹15,000", features: ["Android App", "Basic UI", "No Backend"], unavailable: ["iOS Support"] },
      { name: "Standard", price: "₹30,000", features: ["Android & iOS", "Custom UI", "API Integration"], unavailable: ["Advanced Features"] },
      { name: "Advanced", price: "₹50,000", features: ["Full-Stack App", "AI Features", "Cloud Hosting"], unavailable: [] }
    ],
    "Digital Marketing": [
      { name: "Basic", price: "₹5,000", features: ["SEO Audit", "Google My Business", "1 Social Media Page"], unavailable: ["Paid Ads"] },
      { name: "Standard", price: "₹12,000", features: ["SEO Optimization", "Social Media Marketing", "Ad Campaign Setup"], unavailable: [] },
      { name: "Advanced", price: "₹25,000", features: ["Advanced Ads", "Lead Generation", "Brand Strategy"], unavailable: [] }
    ]
  };
  // State for selected service
  const [selectedService, setSelectedService] = useState(Object.keys(services)[0]);

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Pricing Plans - TechElevate</title>
      </Head>

      {/* Header */}
<Header/>

      {/* Hero Section */}
      <section className="relative text-center text-white bg-blue-900 py-24"
  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
  <div className="container mx-auto">
    <h2 className="text-5xl font-extrabold tracking-wide animate-fade-in">Pricing Plans</h2>
    <p className="mt-4 text-lg text-gray-200">Flexible and transparent pricing for businesses of all sizes</p>
  </div>
</section>


{/* Pricing Section */}

<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <h3 className="text-4xl font-bold text-center text-gray-900">
      Choose a Service to View Pricing
    </h3>

{/* Service Dropdown */}
{/* <div className="mt-8 flex justify-center">
  <div className="relative w-full max-w-xs"> */}
    {/* Styled Select Box */}


    {/* Custom Dropdown Arrow */}
    {/* <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
      <svg
        className="w-6 h-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div> */}
  {/* </div> */}
{/* </div> */}




    {/* Pricing Plans */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services[selectedService].map((plan, i) => (
        <div 
          key={i} 
          className="p-8 bg-white shadow-lg rounded-lg text-center border border-gray-200 transition-all duration-300 hover:scale-105"
        >
          {/* Plan Name */}
          <h4 className="text-2xl font-semibold text-gray-900">{plan.name} Plan</h4>
          
          {/* Plan Price */}
          <p className="text-3xl font-bold text-blue-600 mt-4">{plan.price}</p>

          {/* Features List */}
          <ul className="mt-6 space-y-3 text-gray-700">
            {plan.features.map((feature, j) => (
              <li key={j} className="flex items-center justify-center">
                <span className="text-green-600 mr-2">✔</span> {feature}
              </li>
            ))}
            {plan.unavailable.map((feature, j) => (
              <li key={j} className="flex items-center justify-center text-gray-400 line-through">
                <span className="text-red-500 mr-2">✘</span> {feature}
              </li>
            ))}
          </ul>

          {/* Order Button */}
          <button 
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            onClick={() => window.location.href = '/pricing'}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Need A Free Quote? Please Feel Free to Contact Us</h3>
          <p className="text-gray-600 mt-2">We will reply within 24 hours and provide telephone support 24/7.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
  <h4 className="text-xl font-semibold text-blue-600">Request a Quote</h4>
  <p className="text-gray-600 mt-2">
    Reply within <span className="font-semibold">24 hours</span> & 24/7 telephone support available.
  </p>
  <ul className="mt-4 space-y-3">
    <li className="flex items-center">
      <span className="text-blue-600 mr-2">✔</span> Reply within 24 hours
    </li>
    <li className="flex items-center">
      <span className="text-blue-600 mr-2">✔</span> 24 hrs telephone support
    </li>
  </ul>

  <p className="text-gray-700 mt-4 text-start">
    Please provide details about the product or service you are interested in, any specific requirements, and other relevant information to help us generate an accurate quote.
  </p>

  <div className="mt-6 flex items-center bg-blue-100 p-3 rounded-lg">
    <div className="bg-blue-600 p-3 rounded-full text-white flex items-center justify-center w-12 h-12">
      <i className="fas fa-phone text-lg"></i>
    </div>
    <p className="ml-4 text-lg font-bold text-blue-600">+91 1234567890</p>
  </div>
</div>


            {/* Contact Form */}
            <form className="bg-white shadow-lg p-6 rounded-lg text-left">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg mb-4"/>
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mb-4"/>
              <select className="w-full p-3 border rounded-lg mb-4">
                <option>Select A Service</option>
                <option>Web Development</option>
                <option>Cyber Security</option>
                <option>Data Analytics</option>
              </select>
              <textarea placeholder="Message" className="w-full p-3 border rounded-lg mb-4"></textarea>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">Request A Quote</button>
            </form>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 text-center">
        <h3 className="text-xl font-semibold">Our Trusted Partners</h3>
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          {["google", "apple", "microsoft", "ibm", "yahoo", "dell"].map((partner, index) => (
            <img key={index} src={`/${partner}.png`} alt={partner} className="h-10 grayscale hover:grayscale-0 transition"/>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

