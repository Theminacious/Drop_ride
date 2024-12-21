import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fullName: { firstName, lastName },
      email,
      password,
      vehicle: { vehicleColor, vehiclePlate, vehicleCapacity, vehicleType },
    });

    // Reset form values after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-teal-50 to-blue-100 p-6">
      <header className="flex justify-center items-center h-12 mb-8">
        <img className="w-16" src="https://links.papareact.com/6do" alt="Logo" />
      </header>

      <div className="flex flex-col items-center mx-auto w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Sign Up to Become a Captain
        </h1>

        <form onSubmit={submitHandler} className="space-y-6 bg-white p-8 rounded-lg shadow-xl w-full">
          {/* First Name & Last Name */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Vehicle Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Color</label>
              <input
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                type="text"
                placeholder="Enter vehicle color"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Plate</label>
              <input
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                type="text"
                placeholder="Enter vehicle plate number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Capacity</label>
              <input
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                type="text"
                placeholder="Enter vehicle capacity"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
              <input
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                type="text"
                placeholder="Enter vehicle type"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-teal-400 transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-teal-500 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-8">
        © 2024 DropRide. All rights reserved.
      </footer>
    </div>
  );
};

export default CaptainSignup;
