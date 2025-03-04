import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>TechElevate - IT Solutions</title>
      </Head>

      {/* Navbar */}
    <Header/>

      {/* Hero Section */}
      <section className="relative text-center text-white bg-blue-900 py-24"
  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
  <div className="container mx-auto relative">
    <h2 className="text-4xl font-bold">Creative & Innovative Digital Solution</h2>
    <p className="mt-4 text-lg">Empowering businesses with cutting-edge IT solutions</p>
    <div className="mt-6 flex justify-center space-x-4">
      <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">Free Quote</button>
      <button className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-900">Learn More</button>
    </div>
  </div>
</section>




      {/* About Us */}
      <section className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">The Best IT Solution With 7+ Years of Experience Developers</h3>
        <div className="mt-8 flex flex-col md:flex-row items-center">
          <img src="/images/about.jpg" alt="About Us" className="w-full md:w-1/3 rounded-lg shadow-lg"/>
          <div className="md:ml-10 mt-6 md:mt-0">
            <p className="text-gray-700">
              We provide top-tier IT services, including web development, cloud computing, and security solutions. 
              Our experienced team ensures your business stays ahead in the digital world.
            </p>
            <div className="mt-4">
              <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Trusted Worldwide</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> 24/7 Support</p>
            </div>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Request a Quote</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Custom IT Solutions for Your Business</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    { title: "Website Development", desc: "Custom websites built for performance, security, and scalability." },
    { title: "UI/UX Design", desc: "Beautiful, user-friendly designs that enhance user experience." },
    { title: "Digital Marketing", desc: "SEO, social media marketing, and paid ads to grow your business." },
    { title: "App Development", desc: "Native and hybrid mobile apps for Android and iOS platforms." },
    { title: "Serverless Integrations", desc: "Native and hybrid mobile apps for Android and iOS platforms." },
    { title: "3D Modeling Blender", desc: "Native and hybrid mobile apps for Android and iOS platforms." },
    { title: "Clean Code Re-Factoring", desc: "Native and hybrid mobile apps for Android and iOS platforms." },
    { title: "Content Creation", desc: "Native and hybrid mobile apps for Android and iOS platforms." },
    
  ].map((service, index) => (
    <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
      <h4 className="text-xl font-semibold ">{service.title}</h4>
      <p className="text-gray-600 mt-2">{service.desc}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 container mx-auto">
        <h3 className="text-3xl font-bold text-center">Competitive Pricing Plans</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Startup Plan", price: "$49/month" },
            { name: "Growth Plan", price: "$99/month" },
            { name: "Enterprise Plan", price: "$199/month" }
          ].map((plan, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-semibold">{plan.name}</h4>
              <p className="text-2xl font-bold text-blue-600 mt-2">{plan.price}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-16 text-center">
        <h3 className="text-3xl font-bold">Need A Free Quote? Contact Us</h3>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg"/>
          <textarea placeholder="Message" className="w-full p-3 border rounded-lg"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">Submit</button>
        </form>
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
