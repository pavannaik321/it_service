import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const partners = [
  { name: "Hairwayon", image: "/partner/Hairwayon.png" },
  { name: "Cradel Wing", image: "/partner/cradel-wing.png" },
  // { name: "Konkan Specials", image: "/partner/konkan_specials.png" }
];

const reviews = [
  { name: "Priya Sharma", role: "Student", feedback: "The team delivered my Next.js project on time with a highly responsive UI.", rating: 4.7 },
  { name: "Rahul Verma", role: "Student", feedback: "My machine learning model integration was seamless, and the API worked perfectly.", rating: 4.5 },
  { name: "Tanya Mehta", role: "Student", feedback: "The React Native app was smooth and bug-free, great work!", rating: 4.6 },
  { name: "Abhishek Singh", role: "Student", feedback: "Spring Boot microservices were deployed efficiently with proper monitoring.", rating: 4.8 },
  { name: "Priyanka Joshi", role: "Student", feedback: "Dockerized my Express server for better performance, highly recommend them!", rating: 4.4 },
  { name: "Aditya Patil", role: "Student", feedback: "The Flutter app UI was interactive and well-optimized.", rating: 4.3 },
  { name: "Divya Iyer", role: "Student", feedback: "They helped me deploy a full-stack MERN project before my college deadline.", rating: 4.9 },
  { name: "Amit Yadav", role: "Student", feedback: "Built a secure authentication system using JWT for my React app.", rating: 4.6 },
  { name: "Tanvi Desai", role: "Student", feedback: "Integrated Grafana with Prometheus for real-time monitoring of my website.", rating: 4.7 },
  { name: "Mahesh Reddy", role: "Student", feedback: "The microservices architecture was well-structured and scalable.", rating: 4.8 },
  { name: "Ishita Malhotra", role: "Student", feedback: "Implemented AI chatbot using NLP, exceeded my expectations!", rating: 4.5 },
  { name: "Rohit Kapoor", role: "Student", feedback: "They optimized my Firebase backend, and now it runs much faster!", rating: 4.4 },
  { name: "Vani Chawla", role: "Student", feedback: "Their React app had the best animations and smooth user experience!", rating: 4.6 },
  { name: "Yash Goel", role: "Student", feedback: "They deployed my ML model with Flask, and it works flawlessly!", rating: 4.8 },
  { name: "Anjali Saxena", role: "Student", feedback: "The best UI/UX designs! My e-learning app looks stunning!", rating: 4.7 },
  { name: "Ankit Bhardwaj", role: "Student", feedback: "Helped me scale my backend using AWS Lambda functions.", rating: 4.5 },
  { name: "Shreya Nair", role: "Student", feedback: "The monitoring dashboard built using Grafana is excellent!", rating: 4.7 },
  { name: "Shyam Dubey", role: "Student", feedback: "Implemented real-time database updates in Firebase for my project.", rating: 4.6 },
  { name: "Riya Tandon", role: "Student", feedback: "They made a highly responsive Next.js blog with server-side rendering.", rating: 4.8 },
  { name: "Deepak Pandey", role: "Student", feedback: "Built an amazing AI-powered recommendation system for my app!", rating: 4.9 }
];

const projects = [
  { 
    name: "Haiwayon Website", 
    desc: "A Salon Management application which tells real-time customer traffic inside salons.", 
    images: ["/projects/hairwayon_website.png", "/projects/hairwayon_website1.png","/projects/hairwayon_website2.png","/projects/hairwayon_website3.png","/projects/hairwayon_website4.png","/projects/hairwayon_website5.png","/projects/hairwayon_website6.png"] 
  },
  { 
    name: "Cradle Wing", 
    desc: "Cradle Wing a startup dedicated to supporting expecting mothers at any stage of pregnancy.", 
    images: ["/projects/cradle_wing_ui.png","/projects/cradle_wing_ui1.png","/projects/cradle_wing_ui2.png","/projects/cradle_wing_ui3.png",,"/projects/cradle_wing_ui4.png","/projects/cradle_wing_ui5.png","/projects/cradle_wing_ui6.png"] 
  },
  { 
    name: "Shopzy", 
    desc: "Shopzy – A cross-platform mobile e-commerce app for seamless shopping, offering a wide range of products with a smooth and intuitive user experience.", 
    images: ["/projects/shopzy.png","/projects/shopzy1.png"] 
  },
  { 
    name: "ServerPulse", 
    desc: "ServerPulse – A real-time monitoring system for tracking server performance.", 
    images: ["/projects/monitor.png","/projects/monitor1.png"] 
  },
  { 
    name: "FitTrack UI/UX", 
    desc: "A modern fitness app UI designed for tracking workouts, monitoring progress, and setting fitness goals with an intuitive and engaging user experience.", 
    images: ["/projects/fitness_app.png","/projects/fitness_app1.png"] 
  },
  { 
    name: "IShop", 
    desc: "IShop is an E-commerce website for Apple Products.", 
    images: ["/projects/ishop mockup.png"] 
  },
  { 
    name: "Macro", 
    desc: "Macro – Your trusted source for safe and effective sleep pills.", 
    images: ["/projects/lyma mockup.png"] 
  },
  { 
    name: "TestME", 
    desc: "TestMe – Weekly tests to track and improve student performance.", 
    images: ["/projects/online-assignment.png",] 
  },
  { 
    name: "Event Management System", 
    desc: "An online platform to streamline event planning and management.", 
    images: ["/projects/event_management.png", "/projects/event_management1.png", "/projects/event_management2.png"] 
  },
  { 
    name: "E-Learning Application", 
    desc: "An interactive Mobile Application for seamless online learning.", 
    images: ["/projects/E-learning.png"] 
  },
  { 
    name: "Konkan Specials", 
    desc: "An Web application to manage cloud kitchen.", 
    images: ["/projects/konkan_specials.jpeg", "/projects/konkan_specials1.png", "/projects/konkan_specials2.png"] 
  },

  
  { 
    name: "Haiwayon App UI/UX", 
    desc: "A Salon Management application which tells real-time customer traffic inside salons.", 
    images: ["/projects/hairwayon_app_ui.png", "/projects/hairwayon_app_ui1.png"] 
  },


];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
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
  {reviews.slice(0, showAll ? reviews.length : 6).map((client, index) => (
    <div 
      key={index} 
      className="p-6 bg-white shadow-lg rounded-xl text-left border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
    >
      {/* Top Row - Avatar, Name, Role & Rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
            {client.name.charAt(0)}
          </div>
          {/* Name & Role */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{client.name}</h4>
            <p className="text-blue-600 text-sm">{client.role}</p>
          </div>
        </div>

        {/* Rating */}
        <span className="text-yellow-500 font-bold text-lg">⭐ {client.rating}</span>
      </div>

      {/* Feedback */}
      <p className="text-gray-600 mt-3 italic">{client.feedback}</p>
    </div>
  ))}
</div>




      {/* Show More Button */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Show More
        </button>
      )}
    </section>


      {/* Partner Logos */}
      <section className="py-12 text-center">
  <h3 className="text-3xl font-bold text-gray-900">Our Trusted Partners</h3>
  <div className="flex justify-center flex-wrap gap-8 mt-6">
    {partners.map((partner, index) => (
      <div key={index} className="flex flex-col items-center">
        {/* Partner Logo */}
        <img 
          src={partner.image} 
          alt={partner.name} 
          className="h-8 w-auto max-w-[150px]"
        />
      </div>
      
    ))}
<p 
  className="text-2xl font-extrabold tracking-wide text-gray-700 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 transition duration-300 font-[Caveat]"
>
  Konkan Specials
</p>

  </div>

</section>


            {/* Our Projects */}
            <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-gray-900">Our Recent Projects</h3>
        <p className="text-gray-600 mt-2">Take a look at some of our successfully completed projects.</p>

        {/* Project Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden">
              {/* Swiper Carousel */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="w-full h-56"
              >
                {project.images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img src={img} alt={`${project.name} image`} className="w-full h-56 object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Project Details */}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900">{project.name}</h4>
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
