import Footer from "@/components/Footer";
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
    <button 
  className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
  onClick={() => window.location.href = '/pricing'}
>
  Free Quote
</button>

<button 
  className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-900"
  onClick={() => window.location.href = '/about'}
>
  Learn More
</button>

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
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => window.location.href = '/contact'}>Request a Quote</button>
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
   { title: "Serverless Integrations", desc: "Seamless integration of cloud-based services for scalability and efficiency." },
   { title: "3D Modeling Blender", desc: "High-quality 3D models and animations using Blender for various applications." },
   { title: "Clean Code Re-Factoring", desc: "Optimizing and restructuring code to improve maintainability and efficiency." },
   { title: "Content Creation", desc: "Engaging and high-quality content for websites, blogs, and social media." }




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
      <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <h3 className="text-4xl font-bold text-center text-gray-900">
      Competitive Pricing Plans
    </h3>

    {/* Pricing Cards */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: "Startup Plan", price: "₹8,000", features: ["Basic Website", "1-Month Support", "SEO Optimization"] },
        { name: "Growth Plan", price: "₹16,000", features: ["E-commerce Support", "Custom Design", "3-Month Support"] },
        { name: "Enterprise Plan", price: "₹28,000", features: ["Full Customization", "Mobile App", "6-Month Support"] }
      ].map((plan, index) => (
        <div 
          key={index} 
          className="p-8 bg-white shadow-xl rounded-xl border border-gray-200 text-center transition-transform duration-300 hover:scale-105"
        >
          {/* Plan Name */}
          <h4 className="text-2xl font-semibold text-gray-900">{plan.name}</h4>

          {/* Plan Price */}
          <p className="text-4xl font-extrabold text-blue-600 mt-4">{plan.price}</p>

          {/* Features */}
          <ul className="mt-6 space-y-3 text-gray-600">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center justify-center">
                <span className="text-green-600 mr-2">✔</span> {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button 
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            onClick={() => window.location.href = '/pricing'}
          >
            Choose Plan
          </button>
        </div>
      ))}
    </div>
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
<Footer/>
    </div>
  );
}
