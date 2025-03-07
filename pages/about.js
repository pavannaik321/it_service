import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
const partners = [
  { name: "Hairwayon", image: "/partner/Hairwayon.png" },
  { name: "Cradel Wing", image: "/partner/cradel-wing.png" },
  // { name: "Konkan Specials", image: "/partner/konkan_specials.png" }
];

export default function About() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>About Us - TechElevate</title>
      </Head>

      {/* Header */}
<Header />

      {/* Hero Section */}
      <section className="relative text-center text-white bg-blue-900 py-24"
  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
  <div className="container mx-auto">
    <h2 className="text-5xl font-extrabold tracking-wide animate-fade-in">Who We Are</h2>
    <p className="mt-4 text-lg text-gray-200">Discover our journey, values, and mission</p>
  </div>
</section>


{/* About Us Section */}
<section className="py-16 container mx-auto px-6">
  <h3 className="text-3xl font-bold text-center">
    Your Trusted IT Partner for College Projects & Business Solutions
  </h3>
  <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
    {/* Left Content */}
    <div className="md:w-1/2">
      <p className="text-gray-700">
        We specialize in assisting college students with their IT projects and helping small businesses build their online presence. 
        Whether you need a <strong>website, mobile app, or custom software solution</strong>, we are here to make it happen.
      </p>
      <div className="mt-4">
        <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> College IT Project Assistance</p>
        <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Website & App Development</p>
        <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Affordable Solutions for Startups</p>
        <p className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Dedicated Support & Guidance</p>
      </div>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
    
    {/* Right Image */}
    <img src="/images/about.jpg" alt="About Us" className="w-full md:w-1/3 rounded-lg shadow-lg mt-6 md:mt-0"/>
  </div>
</section>

{/* Our Values & Mission Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    {/* Section Title */}
    <h3 className="text-4xl font-bold text-center text-gray-900">
      Our Values & Mission
    </h3>
    
    {/* Content Grid */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Values Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center md:text-left">
        <h4 className="text-2xl font-semibold text-blue-600">Our Values</h4>
        <p className="text-gray-700 mt-4">
          We believe in <strong>innovation, accessibility, and affordability.</strong> 
          Our goal is to make technology solutions available to students and startups at a fair price.
        </p>
        <ul className="mt-6 space-y-3">
          <li className="flex items-center justify-center md:justify-start">
            <span className="text-blue-600 mr-3 text-xl">✔</span> Integrity & Transparency
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="text-blue-600 mr-3 text-xl">✔</span> Innovation & Creativity
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="text-blue-600 mr-3 text-xl">✔</span> Customer-Centric Approach
          </li>
        </ul>
      </div>

      {/* Mission Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center md:text-left">
        <h4 className="text-2xl font-semibold text-blue-600">Our Mission</h4>
        <p className="text-gray-700 mt-4">
          Our mission is to <strong>empower students and small businesses</strong> 
          with cutting-edge IT solutions. We strive to provide quality services that 
          help you succeed in the digital era.
        </p>
        <ul className="mt-6 space-y-3">
          <li className="flex items-center justify-center md:justify-start">
            <span className="text-blue-600 mr-3 text-xl">✔</span> Supporting Future Innovators
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="text-blue-600 mr-3 text-xl">✔</span> Bridging the Gap Between Tech & Business
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="text-blue-600 mr-3 text-xl">✔</span> Providing Affordable IT Solutions
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>



      {/* Team Members */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Meet Our Team.</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Addhitya S", role: "MERN Developer", img: "/images/aditya.jpeg" },
              { name: "Pavan Naik", role: "Application Developer", img: "/images/pavan.jpg" },
              { name: "Shashwat", role: "Spring Boot Developer", img: "/images/shashwat.png" },
              { name: "Suprit Joshi", role: "Digital Marketing", img: "/images/suprit.png" }
            ].map((member, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
                <img 
  src={member.img} 
  alt={member.name} 
  className="mx-auto rounded-full w-20 h-20 mb-4 object-cover aspect-square"
/>

                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
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



      {/* Footer */}
   <Footer/>
    </div>
  );
}
