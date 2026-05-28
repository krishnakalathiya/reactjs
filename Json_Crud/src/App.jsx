import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import ViewUser from "./pages/ViewUser";
import EditUser from "./pages/EditUser";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";  

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/view" element={<ViewUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;