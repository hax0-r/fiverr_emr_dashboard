import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/logo.svg"
import { Link, useNavigate } from "react-router";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const naviagte = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please fill in all fields");
            return
        }
        naviagte("/dashboard")
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-[#edeef2] p-5">
            <div className="w-full max-w-[600px] px-5 md:py-12 py-10 bg-white rounded-2xl">
                <div className="max-w-[400px] mx-auto">
                    {/* Logo and Title */}
                    <div className="text-center mb-6">
                        <Link>
                            <img src={logo} alt="" className="md:h-[60px] h-[50px] mx-auto" />
                        </Link>
                        <h2 className="text-center font-semibold md:text-[28px] text-2xl my-9">Log in to your Account</h2>
                    </div>

                    {/* Form */}
                    <form onSubmit={submitHandler}>
                        {/* Email Field */}
                        <div className="mb-8">
                            <label htmlFor="email" className="block mb-2 font-medium text-[#1D1D1D]">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-[#CFD1D4] rounded-md focus:ring-primary  focus:border-primary  sm:text-sm"
                                placeholder="Enter your email"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="md:mb-8 mb-6 relative">
                            <div className="flex items-center justify-between mb-2 ">
                                <label htmlFor="password" className="block font-medium text-[#1D1D1D]">
                                    Password
                                </label>
                                <div className="flex justify-between items-center ">
                                    <span className="font-medium text-primary cursor-pointer hover:opacity-80 transition-all duration-500">Forgot Password?</span>
                                </div>
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="mt-1 block w-full px-4 py-3 border border-[#CFD1D4] rounded-md focus:ring-primary  focus:border-primary  sm:text-sm"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {
                                password && (
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute fastFadeIn top-[45px] right-0 px-2 flex items-center"
                                    >
                                        {showPassword ? (
                                            <AiOutlineEyeInvisible className="text-[#6E6E6E]" size={20} />
                                        ) : (
                                            <AiOutlineEye className="text-[#6E6E6E]" size={20} />
                                        )}
                                    </button>
                                )
                            }
                        </div>


                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-[14px] font-medium text-lg px-4 transition-all duration-500 rounded-full hover:bg-green-700 "
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
