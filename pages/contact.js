import Head from "next/head";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "@/components/Header";
export default function Contact() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Contact Us - TechElevate</title>
      </Head>

      {/* Header */}
<Header/>

      {/* Hero Section */}
      <section className="relative text-center text-white bg-blue-900 py-32 mt-16">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-2">Home &nbsp; ● &nbsp; Contact Us</p>
      </section>

      {/* Contact Section */}
      <section className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">If You Have Any Query, Feel Free To Contact Us</h3>

        {/* Contact Info */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="bg-blue-600 p-4 rounded-full inline-block text-white">
              <i className="fas fa-phone text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold mt-4">Call to ask any question</h4>
            <p className="text-blue-600 font-semibold mt-2">+91 1122334455</p>
          </div>

          {/* Email */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="bg-blue-600 p-4 rounded-full inline-block text-white">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold mt-4">Email to get free quote</h4>
            <p className="text-blue-600 font-semibold mt-2">mail@domain.com</p>
          </div>

          {/* Address */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="bg-blue-600 p-4 rounded-full inline-block text-white">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold mt-4">Visit Our Office</h4>
            <p className="text-blue-600 font-semibold mt-2">123 Street, NY, USA</p>
          </div>
        </div>

        {/* Form & Map */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white shadow-lg p-6 rounded-lg text-left border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg"/>
              <input type="text" placeholder="Your Email" className="w-full p-3 border rounded-lg"/>
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg mt-4"/>
            <textarea placeholder="Message" className="w-full p-3 border rounded-lg mt-4 h-32"></textarea>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              style={{ minHeight: "300px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.9559283153153!3d-37.81720997975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria!5e0!3m2!1sen!2sus!4v1632927382899!5m2!1sen!2sus">
            </iframe>
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
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/pricing" className="hover:underline">Pricing</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Get in Touch</h4>
            <p className="mt-2">123 Street, New York, USA</p>
            <p className="mt-2">support@techelevate.com</p>
            <p className="mt-2">+91 1234567890</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-600 pt-6">
          <p>© 2025 TechElevate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
