import Header from "@/components/Header";
import Head from "next/head";

export default function Services() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Our Services - TechElevate</title>
      </Head>

      {/* Header */}
<Header/>

      {/* Hero Section */}
      <section className="relative text-center text-white bg-blue-900 py-32 mt-16">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="mt-2">Home &nbsp; ● &nbsp; Services</p>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">Custom IT Solutions for Your Business</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
    { title: "Website Development", desc: "Custom websites built for performance, security, and scalability." },
    { title: "UI/UX Design", desc: "Beautiful, user-friendly designs that enhance user experience." },
    { title: "Digital Marketing", desc: "SEO, social media marketing, and paid ads to grow your business." },
    { title: "App Development", desc: "Native and hybrid mobile apps for Android and iOS platforms." },
            { title: "SEO Optimization", desc: "Improve your website’s ranking with our expert SEO services." }
          ].map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
          {/* Call Us For Quote Box */}
          <div className="p-6 bg-blue-600 text-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold">Call Us for Quote</h4>
            <p className="mt-2">Get a tailored IT solution for your business. Speak with our experts now!</p>
            <p className="text-2xl font-bold mt-4">+91 1234567890</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 text-center">
        <h3 className="text-3xl font-bold">What Our Clients Say About Our Digital Services</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Michael Anderson", role: "Professor", feedback: "The IT solutions provided helped my institution stay secure and efficient." },
            { name: "Emily Davis", role: "Business Woman", feedback: "The web development team created a fantastic e-commerce platform for my business!" },
            { name: "James Wilson", role: "Application Developer", feedback: "Their cybersecurity solutions are top-notch and reliable." }
          ].map((client, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-left">
              <h4 className="text-lg font-semibold">{client.name}</h4>
              <p className="text-blue-600">{client.role}</p>
              <p className="text-gray-600 mt-2">{client.feedback}</p>
            </div>
          ))}
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

            {/* Our Projects */}
            <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Our Recent Projects</h3>
          <p className="text-gray-600 mt-2">Take a look at some of our successfully completed projects.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "E-Commerce Platform", desc: "A fully customized e-commerce website with secure payment integration.", img: "/projects/ecommerce.jpg" },
              { name: "AI Chatbot", desc: "An intelligent AI-powered chatbot for customer support automation.", img: "/projects/chatbot.jpg" },
              { name: "Healthcare App", desc: "A telemedicine app connecting doctors with patients instantly.", img: "/projects/healthcare.jpg" },
              { name: "Cyber Security Suite", desc: "A security tool to monitor and prevent cyber threats in real-time.", img: "/projects/cybersecurity.jpg" },
              { name: "Real Estate Portal", desc: "An advanced real estate listing and booking system.", img: "/projects/realestate.jpg" },
              { name: "Data Analytics Dashboard", desc: "A business intelligence dashboard with real-time data insights.", img: "/projects/analytics.jpg" }
            ].map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={project.img} alt={project.name} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{project.name}</h4>
                  <p className="text-gray-600 mt-2">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
