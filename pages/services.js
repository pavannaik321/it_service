import Footer from "@/components/Footer";
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
      <section className="relative text-center text-white bg-blue-900 py-24"
  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
  <div className="container mx-auto">
    <h2 className="text-5xl font-extrabold tracking-wide animate-fade-in">Our Services</h2>
    <p className="mt-4 text-lg text-gray-200">Explore our expertise in Website Development, UI/UX, Digital Marketing, and App Development</p>
  </div>
</section>




      {/* Services Section */}
      <section className="py-16 container mx-auto px-6">
      {/* Section Heading */}
      <h3 className="text-4xl font-bold text-center text-gray-900">Custom IT Solutions for Your Business</h3>
      <p className="text-gray-600 text-lg text-center mt-3">Innovative solutions tailored to your needs.</p>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: "🌐", title: "Website Development", desc: "Custom websites built for performance, security, and scalability." },
          { icon: "🎨", title: "UI/UX Design", desc: "Beautiful, user-friendly designs that enhance user experience." },
          { icon: "📈", title: "Digital Marketing", desc: "SEO, social media marketing, and paid ads to grow your business." },
          { icon: "📱", title: "App Development", desc: "Native and hybrid mobile apps for Android and iOS platforms." },
          { icon: "☁️", title: "Serverless Integrations", desc: "Efficient cloud-based solutions for seamless integrations." },
          { icon: "🖥️", title: "3D Modeling (Blender)", desc: "High-quality 3D models for games, animation, and visualization." },
          { icon: "🔧", title: "Clean Code Refactoring", desc: "Optimized, maintainable, and scalable code for better performance." },
          { icon: "✍️", title: "Content Creation", desc: "Engaging content, blogs, and social media strategies for branding." },
        ].map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center border border-gray-200 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-4xl">{service.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 mt-4">{service.title}</h4>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}

        {/* Call Us For Quote Box */}
        <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-lg text-center">
          <div className="text-5xl">📞</div>
          <h4 className="text-2xl font-semibold mt-4">Call Us for a Quote</h4>
          <p className="mt-2 text-lg">Get a tailored IT solution for your business. Speak with our experts now!</p>
          <p className="text-3xl font-bold mt-4">+91 9113909285</p>
        </div>
      </div>
    </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 text-center">
        <h3 className="text-3xl font-bold">What Our Clients Say About Our Digital Services</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {[
            { name: "Michael Anderson", role: "Student", feedback: "The IT solutions provided helped my institution stay secure and efficient." },
            { name: "Emily Davis", role: "Hairwayon CEO", feedback: "The web development team created a fantastic e-commerce platform for my business!" },
            { name: "James Wilson", role: "Student", feedback: "Their cybersecurity solutions are top-notch and reliable." },
            { name: "James Wilson", role: "CradelWing CTO", feedback: "Their cybersecurity solutions are top-notch and reliable." },
            { name: "James Wilson", role: "Konkan Specials CTO", feedback: "Their cybersecurity solutions are top-notch and reliable." },
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
      <Footer/>
    </div>
  );
}
