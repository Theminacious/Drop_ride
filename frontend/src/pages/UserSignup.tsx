import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle sign-up logic here
    console.log({ firstName, lastName, email, password });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-teal-100 to-blue-50">
      <header className="flex justify-center items-center h-16 bg-white shadow-md rounded-b-2xl">
        <img className="w-16" src="https://links.papareact.com/6do" alt="Logo" />
      </header>

      <div className="flex flex-col flex-grow justify-center px-6 space-y-6">
        <h1 className="text-center text-3xl font-semibold text-gray-800">Join Us, User!</h1>

        <form onSubmit={submitHandler} className="space-y-5 bg-white p-8 rounded-xl shadow-lg">
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-[#eeeeee] border rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-300 focus:outline-none"
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
                className="mt-2 w-full px-4 py-3 bg-[#eeeeee] border rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-300 focus:outline-none"
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
              className="mt-2 w-full px-4 py-3 bg-[#eeeeee] border rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-300 focus:outline-none"
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
              className="mt-2 w-full px-4 py-3 bg-[#eeeeee] border rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-300 focus:outline-none"
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
              className="mt-2 w-full px-4 py-3 bg-[#eeeeee] border rounded-lg text-gray-800 focus:ring-2 focus:ring-teal-300 focus:outline-none"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#111] text-white font-medium rounded-lg hover:bg-gray-700 transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-800 text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-teal-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      <footer className="p-6 bg-gradient-to-t from-teal-100 to-blue-50">
        <Link
          to="/login"
          className="block w-full py-3 text-center bg-[#f4f4f4] text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-all"
        >
          Sign in as User
        </Link>
      </footer>
    </div>
  );
};

export default UserSignup;
