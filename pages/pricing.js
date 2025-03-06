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
      <Header />

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

          {/* Custom Dropdown */}
          <div className="mt-8 flex justify-center">
            <CustomDropdown
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          </div>

          {/* Pricing Plans */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[selectedService].map((plan, i) => (
              <div key={i} className="p-8 bg-white shadow-lg rounded-lg text-center border border-gray-200 transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold text-gray-900">{plan.name} Plan</h4>
                <p className="text-3xl font-bold text-blue-600 mt-4">{plan.price}</p>

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

                <button
                  className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}

