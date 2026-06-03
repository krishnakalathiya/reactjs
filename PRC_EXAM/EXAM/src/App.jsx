import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './componets/navbar';
import PrivateRoute from './redux/privateroute';
import StudentList from './componets/studentlist';
import StudentForm from './componets/studentform';
import Login from './componets/login';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ backgroundColor: '#E2E8F0', minHeight: '100vh' }}>
          <Navbar />
          <div className="container px-2 px-md-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute><StudentList /></PrivateRoute>} />
              <Route path="/add" element={<PrivateRoute><StudentForm /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}