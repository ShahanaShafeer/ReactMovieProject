// RouterPage.js
import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Movie from './Movie';
import { ComedyMovies, LatestMovies, PopularMovies } from './Url';
import AboutMovies from './AboutMovies';

const samplecontext = createContext();

const RouterPage = () => {
  const [movie, setmovie] = useState([]);
  const [id, setid] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <samplecontext.Provider
        value={{ movie, setmovie, id, setid, searchQuery, setSearchQuery }}
      >
        <BrowserRouter>
          <App />
          <Routes>
            <Route path="/PopularMovie" element={<Movie Api={PopularMovies} />} />
            <Route path="/LatestMovie" element={<Movie Api={LatestMovies} />} />
            <Route path="/ComedyMovie" element={<Movie Api={ComedyMovies} />} />
            <Route path="/AboutMovies/:id" element={<AboutMovies />} />
          </Routes>
        </BrowserRouter>
      </samplecontext.Provider>
    </div>
  );
};

export default RouterPage;
export { samplecontext };
