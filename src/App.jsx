// src/App.jsx
// THIS CODE IS CORRECT - the blank screen issue is likely NOT here
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Chatbot from './components/Chatbot/Chatbot';
import './styles/index.css'; // Ensure global styles are imported

function App() {
  return (
    <Router>
      {/* Persistent background */}
      <ParticlesBackground />

      {/* Persistent Header */}
      <Header />

      {/* Main content area where Routes swap pages */}
      <main> {/* Added padding-top via global CSS to offset fixed header */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Other routes would go here */}
        </Routes>
      </main>

      {/* Persistent Chatbot */}
       <Chatbot />

       {/* Persistent Footer */}
      <Footer />
    </Router>
  );
}

export default App;