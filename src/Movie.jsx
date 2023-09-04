import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { imageUrl } from './Url';
import { Button, Card } from 'react-bootstrap';
import { samplecontext } from './RouterPage';
import { Link } from 'react-router-dom';

const Movie = ({ Api }) => {
  const [data, setData] = useState([]);
  const { movie, setmovie, id, setid, searchQuery } = useContext(samplecontext);

  useEffect(() => {
    axios.get(Api).then((res) => {
      setData(res.data.results);
      setmovie(res.data.results);
    });
  }, [Api]);

  const filteredMovies = searchQuery
    ? movie.filter((item) =>
        (item.title || item.name).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movie;

  return (
    <div>
      <h1 style={{ fontWeight: 'Bold', textAlign: 'center', color: '#594756', fontSize: '50px', paddingTop: '20px' }}>Movies</h1>
      {filteredMovies.map((item) => (
        <div key={item.id} style={{ display: "inline-block", marginLeft: "40px", alignItems: "center", marginTop: "40px" }}>
          <Card style={{ width: '350px', height: 'auto', borderRadius: '20px', backgroundColor: '#ebdcc1' }}>
            <Card.Img variant="top" src={imageUrl + item.backdrop_path}
              style={{ width: '300px', height: 'auto', margin: 'auto', paddingTop: '10px' }} />
            <Card.Body>
              <Card.Title>{item.title || item.name}</Card.Title>
              <Card.Text>
                <h6>Release Date: {item.first_air_date}</h6>
              </Card.Text>
              <Link to={`/AboutMovies/${item.id}`}>
                <Button style={{ backgroundColor: '#594756', border: '1px solid #594756' }} onClick={() => setid(item.id)}>
                  Know More
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Movie;
