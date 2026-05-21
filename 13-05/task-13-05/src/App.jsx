import React, { useState } from "react";
import LoginModal from "./pages/login";
import Layout from "./pages/Layout";

function App() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsModalOpen(false); 
  };

  const handleLogout = () => {
    setUser(null);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && !user && (
        <LoginModal onLoginSuccess={handleLoginSuccess} />
      )}
      <Layout user={user} onLogout={handleLogout} />
    </>
  );
}

export default App;