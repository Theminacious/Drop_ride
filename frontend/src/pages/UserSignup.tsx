import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userData, setUserData] = useState({})

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setUserData({
      fullName: {
        firstName: firstName,
      lastName: lastName,
      },
      email: email,
      password: password,
    });

    console.log({ firstName, lastName, email, password });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-teal-50 to-blue-100 p-6">
      <header className="flex justify-center items-center h-12 mb-8">
        <img className="w-12" src="https://links.papareact.com/6do" alt="Logo" />
      </header>

      <div className="flex flex-col items-center mx-auto w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Join Us and Get Started
        </h1>

        <form onSubmit={submitHandler} className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full">
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

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-2 w-full px-4 py-3 bg-gray-100 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-teal-400 transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-500 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-8">
        © 2024 DropRide. All rights reserved.
      </footer>
    </div>
  );
};

export default UserSignup;
