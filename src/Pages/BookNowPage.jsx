import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookNowPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email) {
      alert('Please fill in all fields.');
      return;
    }

    // Show popup and redirect after a delay
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/');
    }, 3000); // 3 seconds delay before redirecting
  };

  return (
    <div className="min-h-screen bg-slate-900 text-black flex items-center justify-center p-4 sm:p-6">
      <div className="bg-gray-700 shadow-lg rounded-lg w-full max-w-4xl p-6 sm:p-8">
        <h1 className="text-4xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-b from-gray-300 to-cyan-600 bg-clip-text text-transparent">
          Book Your Appointment
        </h1>
        <p className="text-center text-gray-300 mb-6 sm:mb-8">
          Please fill out the form below to book your appointment.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-900 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border text-gray-200 bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-900 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mt-4 sm:mt-6">
            <label htmlFor="message" className="block text-xl text-gray-900 font-bold mb-2">
              Do you have any questions for us? If yes, ask:
            </label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 sm:mt-8 w-full bg-cyan-800 text-white font-bold py-3 rounded-md hover:bg-cyan-900 transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-center p-6 rounded-md shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4 text-cyan-800">
              Congratulations!
            </h2>
            <p className="text-gray-700">
              Your membership plan has been booked successfully!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNowPage;
