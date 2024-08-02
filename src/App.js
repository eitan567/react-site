import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import StrategyPage from './pages/StrategyPage';
import ReturnsPage from './pages/ReturnsPage';
import ContactPage from './pages/ContactPage';
import Layout from './pages/Layout';
import { UserProvider } from './UserContext';
import ProtectedRoute from './pages/ProtectedRoute';
import './App.css';

const App = () => (
  <UserProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/returns" element={
                <ProtectedRoute>
                  <ReturnsPage />
                </ProtectedRoute>
              } />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  </UserProvider> 
);

export default App;
