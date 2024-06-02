import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import TutorialList from './components/TutorialList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <TutorialList />
            </>
          } />
          <Route path="/tutorials" element={<TutorialList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
