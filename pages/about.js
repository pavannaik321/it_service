import Header from "@/components/Header";
import Head from "next/head";

export default function About() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>About Us - TechElevate</title>
      </Head>

      {/* Header */}
<Header />

      {/* Hero Section */}
      <section className="relative text-center text-white bg-blue-900 py-32 mt-16">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-2">Home &nbsp; ● &nbsp; About Us</p>
      </section>

      {/* About Us Section */}
      <section className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">The Best IT Solution With 10+ Years of Experience Developers</h3>
        <div className="mt-8 flex justify-between flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <p className="text-gray-700">
              We have been providing IT solutions for over a decade, offering web development, cloud computing, cybersecurity, and more.
              Our team of experts is dedicated to ensuring your business stays ahead in the digital world.
            </p>
            <div className="mt-4">
              <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Award-Winning</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Professional Staff</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> 24/7 Support</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Fair Pricing</p>
            </div>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Request a Quote</button>
          </div>
          <img src="/images/about.jpg" alt="About Us" className="w-full md:w-1/3 rounded-lg shadow-lg"/>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Meet Our Expert Team</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Pavan Naik", role: "Engineer", img: "/images/pavan.jpg" },
              { name: "Shashwat Rane", role: "Developer", img: "/images/shashwat.png" },
              { name: "Suprit Joshi", role: "Digital Marketing", img: "/images/suprit.png" }
            ].map((member, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
                <img src={member.img} alt={member.name} className="mx-auto rounded-full w-20 h-20 mb-4"/>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 text-center">
        <h3 className="text-xl font-semibold">Our Trusted Partners</h3>
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          {["Hairwayon", "Cradel Wing", "Konkan Specials"].map((partner, index) => (
            // <img key={index} src={`/${partner}.png`} alt={partner} className="h-10 grayscale hover:grayscale-0 transition"/>
            // Add P tag
            <p  className="h-10 grayscale hover:grayscale-0 transition">
                {partner}
            </p>
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
