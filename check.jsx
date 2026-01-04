import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm bg-gradient-to-br from-[#401B98]/40 to-[#180027]/50 backdrop-blur border border-indigo-900 rounded-3xl shadow-2xl p-8">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-white text-center mb-2">
          {isLogin ? "Login" : "Sign up"}
        </h1>

        <p className="text-slate-400 text-sm text-center mb-8">
          {isLogin
            ? "Please sign in to contine"
            : "Please sign up to continue"}
        </p>

        {/* Form */}
        <form className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm text-slate-400 mb-1"></label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-3xl bg-slate-900/30 backdrop-blur-md border border-slate-700/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-slate-400 mb-1"></label>
            <input
              type="email"
              placeholder="Email id"
              className="w-full rounded-3xl bg-slate-900/30 backdrop-blur-md border border-slate-700/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1"></label>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-3xl bg-slate-900/30 backdrop-blur-md border border-slate-700/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Main Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-3xl transition"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Forgot Password */}
        {isLogin && (
          <div className="text-center mt-4">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition"
            >
              Forgot your password?
            </Link>
          </div>
        )}

        {/* Toggle Auth */}
        <div className="text-center mt-8 text-sm text-slate-400">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-400 hover:text-indigo-300 font-medium transition"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;