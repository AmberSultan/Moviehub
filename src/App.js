import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Search from './component/Search';
import About from './component/About';
import DisplayMovies from './component/DisplayMovies';
import TopRated from './component/TopRated';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lines from './component/Lines';

function App() {
  return (
    <>
      <Router>
        <Navbar title="MovieHUB" home="Home" top="Top-Rated" about="About" />
        <Lines/>
        <div className="container my-2">
          <Routes>
            <Route path="/" element={ <>
                  <Search />
                  <DisplayMovies />
                </>
                      }
            />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
