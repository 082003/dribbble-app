import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Basketball Logo */}
      <div className="mb-12">
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-[#EA4C89]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6"/>
          <path d="M50 5 A45 45 0 0 1 50 95" fill="none" stroke="currentColor" strokeWidth="6"/>
          <path d="M5 50 A45 45 0 0 1 95 50" fill="none" stroke="currentColor" strokeWidth="6"/>
        </svg>
      </div>

      <h1 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">Welcome back</h1>

      <div className="w-full max-w-[400px] space-y-4">
        {/* Placeholder Google Button */}
        <button className="w-full py-4 bg-[#F3F3F4] rounded-full text-sm font-bold text-gray-800 hover:bg-gray-200 transition-colors">
          Continue with Google
        </button>

        <div className="relative py-4 flex items-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Input Field */}
        <div className="space-y-2">
          <label className="text-sm font-black text-gray-900 ml-1">Enter email or username</label>
          <input 
            type="text" 
            className="w-full px-6 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-pink-200 focus:outline-none transition-all font-medium"
            placeholder="Email address"
          />
        </div>

        <button className="w-full py-4 bg-[#0D0C22] text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity mt-4">
          Continue
        </button>
      </div>

      <p className="mt-8 text-xs text-gray-400 text-center max-w-[300px]">
        By continuing, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default Login;