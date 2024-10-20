import React, { useState } from "react";
// styling
import {
  FaLaptop,
  FaWrench,
  FaTruck,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// layout
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-4 font-poppins">
                Selling Refurbished HP, Lenovo, Dell, MacBook Laptops, and Cybersecurity Gadgets!
              </h1>
              <p className="mb-6 text-lg">
                Customer satisfaction is our top priority! Please don't hesitate
                to contact us if you have any questions!
              </p>
              <div className="space-x-4">
                <button className="bg-white text-blue-700 px-6 py-2 rounded hover:bg-gray-100 transition">
                  Contact Us
                </button>
                <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-primary transition">
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
        <section className="py-20">
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
                  <FaWrench size={100} className="mx-auto text-primary" />
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
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Click to start!
                  </button>
                </div>
              </div>
              <div className="flex items-center flex-row-reverse">
                <div className="w-1/3">
                  <FaTruck size={150} className="mx-auto text-primary" />
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
                  <FaCheckCircle size={100} className="mx-auto text-primary" />
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

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 font-poppins">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
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
      </div>
    </MainLayout>
  );
}
