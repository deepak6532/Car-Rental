import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
 
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const [phone,setPhone] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8082/contact",{name,email,message})
    .then(result =>{
      alert(`📨 Thank you ${name}, we’ll get back to you soon!`);
     setName("");
     setPhone("")
     setEmail("");
     setMessage("");
     })
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4">Get in Touch</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Have a question, feedback, or want to collaborate? We’d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Collaboration Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaborate with Us</h3>
            <p className="text-gray-600 mb-4">
              Are you a travel agency, hotel, or business looking to partner with a reliable car rental service?
              Let’s work together and offer the best travel solutions to your customers.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Custom Rental Solutions for Partners</li>
              <li>Flexible Commission Plans</li>
              <li>Dedicated Account Support</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) =>setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
