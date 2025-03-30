import React, { useState } from 'react';
import { FaApple, FaGoogle, FaXing, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: 'eli_trekker',
    email: 'elitrekkerg@gmail.com',
    password: '********',
    rememberMe: false,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-700">Travel Voyanix</h1>
          <p className="text-lg text-gray-700">Explore More. Experience Life.</p>
        </div>
        <div className="flex space-x-4 mb-8">
          <button className="px-6 py-2 bg-purple-700 text-white rounded">Sign Up</button>
          <button className="px-6 py-2 border border-purple-700 text-purple-700 rounded">Log In</button>
        </div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Begin Your Adventure</h2>
        <p className="mb-4 text-gray-600">Sign Up with Open account</p>
        <div className="flex space-x-4 mb-4">
          <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded">
            <FaApple className="text-gray-700" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded">
            <FaGoogle className="text-gray-700" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded">
            <FaXing className="text-gray-700" />
          </button>
        </div>
        <p className="mb-4 text-gray-600">or</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type={passwordVisible ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                className="form-checkbox text-purple-600"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Let's Start
            </button>
          </div>
        </form>
      </div>
      {/* Right Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://storage.googleapis.com/a1aa/image/xx1PhULc2pMha14tosoD5x21LupAIPMKEZ61GZs7jlE.jpg"
          alt="Aerial view of a tropical island with palm trees, beach, and a seaplane"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-purple-700">Travel the World, Your Way!</h3>
          <p className="text-sm text-gray-600">
            Explore destinations at your pace, with personalized journeys & unforgettable experiences.
          </p>
        </div>
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-purple-700">Explore the World, Beyond Boundaries!</h3>
          <p className="text-sm text-gray-600">Start your adventure today!</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
