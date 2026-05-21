import React, { useState } from 'react';

function LoginModal({ onLoginSuccess }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim() !== '') {
      onLoginSuccess({ name: inputName });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-teal-200  rounded-2xl shadow-2xl p-8 max-w-sm w-full border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-950 mb-2">Welcome!</h2>
        <p className="text-sm text-center text-gray-950 mb-6">Please enter your name to log in</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Enter your name here..." 
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 transition"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/30 transition duration-200 cursor-pointer text-center"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;