import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// styling
import {
  FaLaptop,
  FaWrench,
  FaTruck,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
} from "react-icons/fa";

// layout
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRepairLoading, setIsRepairLoading] = useState(false);

  const handleRepairSubmit = (e) => {
    e.preventDefault();
    setIsRepairLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsRepairLoading(false);
      // Handle the next step or show a confirmation message
    }, 2000);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const testimonials = [
    {
      profile: "https://randomuser.me/api/portraits/men/35.jpg",
      text: "I had a great experience with their warranty coverage!",
      name: "John Doe",
      title: "Happy Customer",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The repair service was quick and efficient. Highly recommended!",
      name: "Jane Smith",
      title: "Satisfied Client",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/26.jpg",
      text: "Their customer support is top-notch. They resolved my issue promptly.",
      name: "Mike Johnson",
      title: "Loyal Customer",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowConfirmation(true);
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="bg-gradient-to-r from-secondary to-tertiary text-white py-20"
          id="hero-section"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-4 font-poppins">
                Selling Refurbished HP, Lenovo, Dell, MacBook Laptops, and
                Cybersecurity Gadgets!
              </h1>
              <p className="mb-6 text-lg">
                Customer satisfaction is our top priority! Please don't hesitate
                to contact us if you have any questions!
              </p>
              <div className="space-x-4">
                <button className="bg-white text-blue-700 px-6 py-2 rounded hover:bg-gray-100 transition">
                  Contact Us
                </button>
                <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-secondary transition">
                  Repairs
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <FaLaptop size={200} />
            </div>
          </div>
        </section>

        {/* Repair Ticket Section */}
        <section className="py-20" id="repair-section">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-4 font-poppins">
              Start a Repair Ticket Here
            </h2>
            <p className="text-center mb-10 text-gray-700">
              Please provide us with some information so we can better assist
              you!
            </p>
            <div className="space-y-16">
              <div className="flex items-center">
                <div className="w-1/3">
                  <FaWrench size={100} className="mx-auto " />
                </div>
                <div className="w-2/3">
                  <h3 className="text-xl font-semibold mb-2 font-poppins">
                    Step 1: Fill Out the Form
                  </h3>
                  <p className="mb-4 text-gray-700">
                    In order for us to process your repair, we need to assign
                    you a ticket number. Please click the button below to be
                    taken to the repair ticket form.
                  </p>
                  <button className="bg-gradient-to-r from-secondary to-tertiary text-white px-4 py-2 rounded hover:bg-tertiary transition">
                    Click to start!
                  </button>
                </div>
              </div>
              <div className="flex items-center flex-row-reverse">
                <div className="w-1/3">
                  <FaTruck size={150} className="mx-auto " />
                </div>
                <div className="w-2/3 text-start max-w-sm">
                  <h3 className="text-xl font-semibold mb-2 font-poppins">
                    Step 2: Ship Computer to Us!
                  </h3>
                  <p className="text-gray-700">
                    RMA & Return Address will be sent to you through the ticket
                    portal.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/3">
                  <FaCheckCircle
                    size={100}
                    className="mx-auto "
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-xl font-semibold mb-2 font-poppins">
                    Step 3: Monitor Your Repair Status Online!
                  </h3>
                  <p className="text-gray-700">
                    Wondering how it's going? Check the status online using the
                    button below!
                  </p>
                  <p className="mt-4 text-gray-700">
                    You also are able to contact us directly through this portal
                    with any questions or updates you have on your repair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 font-poppins">
              What People Say About Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="text-center">
                  <p className="text-xl italic mb-4 text-gray-700">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <img
                      src={testimonials[currentTestimonial].profile}
                      alt="User"
                      className="rounded-full mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-semibold text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentTestimonial].title}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={prevTestimonial}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contact-section"
          className="py-20 "
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 font-poppins">
              Contact Us
            </h2>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What would you like to tell us?"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-secondary to-tertiary text-white px-6 py-2 rounded hover:bg-tertiary transition flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Confirmation Popup */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
              <button
                onClick={() => setShowConfirmation(false)}
                className="mt-4 bg-gradient-to-r from-secondary to-tertiary text-white px-4 py-2 rounded hover:bg-tertiary transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Repair Form */}
        <section
          id="repair-form-section"
          className="py-20 "
        >
          <div className={"p-10 pb-0 shadow-lg bg-[#f7f7f7] container px-0 mx-auto  rounded-md" }>
          <div className="container mx-auto px-4 shadow-lg pb-10 bg-white max-w-4xl rounded-md">
            <h2 className="text-3xl font-bold text-center mb-10 pt-10 font-poppins ">
              Contact Information
            </h2>
            <form className="max-w-lg mx-auto" onSubmit={handleRepairSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block mb-2 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block mb-2 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="businessName"
                  className="block mb-2 font-medium"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  placeholder="Enter your business name"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="repairEmail" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="repairEmail"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block mb-2 font-medium">
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="repairPhone" className="block mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="repairPhone"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"

                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-2 font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block mb-2 font-medium">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block mb-2 font-medium">
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Enter your state/province"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block mb-2 font-medium">
                  Zip/Postal
                </label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Enter your zip/postal code"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-secondary border-gray-400"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-secondary to-tertiary text-white px-6 py-2 rounded hover:bg-tertiary transition flex items-center justify-center w-full"
                disabled={isRepairLoading}
              >
                {isRepairLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Next"
                )}
              </button>
            </form>
        
          </div>
          <section className="mt-20 !w-full py-4 bg-gradient-to-r from-secondary to-tertiary text-white">
              <div className="text-center">
                <p>
                  CyberNexus LLC – 5010 Breckenridge Drive, Houston, Texas 77066
                </p>
                <p>Phone: 346-440‑6838</p>
              </div>
            </section>
          </div>

          {/* Address Section */}
        </section>
      </div>
    </MainLayout>
  );
}
