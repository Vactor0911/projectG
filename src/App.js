import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import SubMain1 from './components/SubMain1';
import SubMain2 from './components/SubMain2';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
       {/* HEADER */}
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/sub-main1" element={<SubMain1 />} />
          <Route path="/sub-main2" element={<SubMain2 />} />
        </Routes>
         {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;