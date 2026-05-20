import React, { useState } from "react";

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert("Please enter username");
      return;
    }

    onLogin(username);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default LoginModal;