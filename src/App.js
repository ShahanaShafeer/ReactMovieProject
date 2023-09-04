// App.js
import React, { useEffect, useState, useContext } from 'react';
import { Container, Nav, Navbar, FormControl } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { PopularMovies, imageUrl } from './Url';
import axios from 'axios';
import { samplecontext } from './RouterPage';

const App = () => {
  const [data, setdata] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const isAboutMoviesRoute = location.pathname === '/AboutMovies';
  const { setSearchQuery } = useContext(samplecontext);

  useEffect(() => {
    axios.get(PopularMovies).then((res) => {
      setdata(res.data.results);
      setCurrentIndex(Math.floor(Math.random() * res.data.results.length));
    });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: '#233147' }}>
        <Container>
          <img style={{ width: '40px' }} src="https://i.pinimg.com/originals/99/c0/b4/99c0b4a811a08cca583f7e6701e969b9.png" alt="" />
          <Navbar.Brand style={{ color: "#2485ab", fontWeight: 'bold', fontSize: '30px' }}>MOVIES</Navbar.Brand>
          <Nav className="ms-auto fs-5">
            
            <Link to={"/PopularMovie"} style={{ textDecoration: "none", color: "#2485ab" }}>Popular movie</Link>
            <Link className={'ms-4'} to={"/LatestMovie"} style={{ textDecoration: "none", color: "#2485ab" }}>Latest movie</Link>
            <Link className={'ms-4'} to={"/ComedyMovie"} style={{ textDecoration: "none", color: "#2485ab" }}>Comedy movie</Link>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 w-75"
              onChange={handleSearch}
            />
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default App;
