import Head from "next/head";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const partners = [
  { name: "Hairwayon", image: "/partner/Hairwayon.png" },
  { name: "Cradel Wing", image: "/partner/cradel-wing.png" },
  // { name: "Konkan Specials", image: "/partner/konkan_specials.png" }
];


export default function Contact() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Contact Us - TechElevate</title>
      </Head>

      {/* Header */}
<Header/>

      {/* Hero Section */}
      <section className="relative text-center text-white bg-blue-900 py-24"
  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
  <div className="container mx-auto">
    <h2 className="text-5xl font-extrabold tracking-wide animate-fade-in">Contact Us</h2>
    <p className="mt-4 text-lg text-gray-200">Have any questions? Feel free to reach out to us</p>
  </div>
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
            <p className="text-blue-600 font-semibold mt-2">+91 9113909285</p>
          </div>

          {/* Email */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="bg-blue-600 p-4 rounded-full inline-block text-white">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold mt-4">Email to get free quote</h4>
            <p className="text-blue-600 font-semibold mt-2">pavanpnaik321@gmail.com</p>
          </div>

          {/* Address */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="bg-blue-600 p-4 rounded-full inline-block text-white">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold mt-4">Visit Our Office</h4>
            <p className="text-blue-600 font-semibold mt-2">VIT Incubator, Vellore, Tamil Nadu</p>
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
  style={{ minHeight: "300px", border: "0" }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0410799818246!2d79.15335867546062!3d12.969223187345916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1741261673376!5m2!1sen!2sin">
</iframe>

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
