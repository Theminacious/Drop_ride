import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


const CaptainLogin =  () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [captainData, setCaptainData] = useState({});

  const context = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const [captain, setCaptain] = context;

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const captainLoginData={
      email: email,
      password: password,
    }

    try {
      // console.log('Sending Data:', JSON.stringify(captainData, null, 2));

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainLoginData
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up. Please try again.');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="flex justify-center items-center h-16 bg-white shadow-md">
        <img className="w-12" src="https://links.papareact.com/6do" alt="Logo" />
      </header>

      <div className="flex flex-col flex-grow justify-center px-6">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Welcome, Captain!
        </h1>
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 bg-[#eeeeee] border rounded-lg text-gray-800 focus:ring-2 focus:ring-gray-400 focus:outline-none"
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
              className="mt-1 w-full px-4 py-3 bg-[#eeeeee] border rounded-lg text-gray-800 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#111] text-white font-medium rounded-lg hover:bg-gray-900 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          New here?{' '}
          <Link to="/captain-signup" className="text-gray-800 font-medium hover:underline">
            Create an account
          </Link>
        </p>
      </div>

      <footer className="p-6 bg-white shadow-inner">
        <Link
          to="/login"
          className="block w-full py-3 text-center bg-[#f4f4f4] text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-all"
        >
          Sign in as User
        </Link>
      </footer>
    </div>
  );
};

export default CaptainLogin;
