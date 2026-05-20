import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();

  const { isLogin, user } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  // LOGIN FUNCTION
  const handleLogin = () => {
    if (!name) {
      toast.error("Please Enter Username");
      return;
    }

    dispatch(loginUser(name));
    toast.success("Login Successfully!!");

    setShowModal(false);
    setName("");
  };

  // LOGOUT FUNCTION
  const handleLogout = () => {
    dispatch(logoutUser());
    toast.error("Logout Successfully!!");
  };

  return (
    <>
      <div className="mt-20 flex justify-center items-center">

        {isLogin ? (
          // AFTER LOGIN
          <div className="flex flex-col items-center gap-4 bg-green-500 p-6 rounded-lg">
            <h2 className="text-white text-2xl font-bold">
              Welcome {user}
            </h2>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          // LOGIN BUTTON
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Login
          </button>
        )}
      </div>

      {/* LOGIN MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-5">
              Login Form
            </h2>

            {/* USERNAME INPUT */}
            <input
              type="text"
              value={name}
              name="username"
              placeholder="Enter Username"
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
            />

            {/* SUBMIT BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
            >
              Submit
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Login;