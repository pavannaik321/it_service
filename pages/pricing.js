import Head from "next/head";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Pricing() {
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
      <section className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">We Offer Competitive Pricing for Our Clients</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Basic Plan", price: "$49/month", features: ["HTML & CSS3", "Bootstrap v5", "Responsive Layout"], unavailable: ["Cross-Browser Support"] },
            { name: "Standard Plan", price: "$99/month", features: ["HTML & CSS3", "Bootstrap v5", "Responsive Layout"], unavailable: ["Cross-Browser Support"] },
            { name: "Advanced Plan", price: "$199/month", features: ["HTML & CSS3", "Bootstrap v5", "Responsive Layout", "Cross-Browser Support"], unavailable: [] }
          ].map((plan, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center border border-gray-200">
              <h4 className="text-xl font-semibold text-blue-600">{plan.name}</h4>
              <p className="text-3xl font-bold text-gray-900 mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 flex items-center justify-center">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature, i) => (
                  <li key={i} className="text-gray-400 flex items-center justify-center line-through">
                    <span className="text-red-500 mr-2">✘</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Order Now</button>
            </div>
          ))}
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
