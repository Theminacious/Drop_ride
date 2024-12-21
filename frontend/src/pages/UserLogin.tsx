import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserDataContext);
  const [user, setUser ] = userContext || [null, () => {}]; // Default to a no-op function
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginUser  = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, loginUser );

      if (response.status === 200) {
        const data = response.data;
        setUser (data.user);
        localStorage.setItem('token',data.token)
        navigate('/home');
      }

      // Clear input fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally, set an error state to display a message to the user
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <img
        className="w-16 mb-10"
        src="https://links.papareact.com/6do"
        alt=""
      />

      <div>
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Enter your email"
          />
          <h3 className="text-lg font-medium mb-2">What's your password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="bg-[#111] text-white font-semibold mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Login
          </button>

          <p className="text-left">
            New here?
            <Link className="text-slate-600" to={"/signup"}>
              Create new Account?
            </Link>
          </p>
        </form>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/captain-login"
          className="bg-[#f4f4f4] text-gray-800 font-light rounded-lg px-6 py-3 w-full max-w-sm text-center border border-gray-300 shadow-sm hover:shadow-md hover:bg-gray-100 transition-all"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;