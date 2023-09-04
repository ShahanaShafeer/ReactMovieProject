import React, { useContext, useEffect} from 'react'
import { samplecontext } from './RouterPage';
import { imageUrl } from './Url';
import { useParams } from 'react-router-dom';

const AboutMovies = () => {
    const { movie } = useContext(samplecontext);
    const {id}=useParams();
    console.log(id);
  // useEffect(() => {
  //   console.log(id);
  //   console.log(movie);
  // }, [id]);
  const [filteredMovies] = movie.filter((item) => item.id == id);
    console.log(filteredMovies);
  return (
    <div style={{backgroundColor:"#e9ecef"}}>
       <h1 style={{color:'#9d7e21',textAlign:'center',fontWeight:'bold',
       paddingTop:'30px',textDecoration:'underline'}}>
        {filteredMovies.title || filteredMovies.name}</h1>
       <img src={imageUrl+filteredMovies.backdrop_path} 
       style={{
        display: 'block',
        margin: '30px auto',
        height: '400px'
        }} alt="" />
        <h2 style={{textAlign:"center",color:"#9d7e21"}}>Release date:{filteredMovies.release_date|| filteredMovies.first_air_date}</h2>
        <h6 style={{textAlign:"center",color:"#9d7e21"}}>Vote average:{filteredMovies.vote_average}</h6>
        <h6 style={{textAlign:"center",color:"#9d7e21"}}>Vote count:{filteredMovies.vote_count}</h6>
    <div style={{display:'flex',marginLeft:'25%',alignItems:'center'}}>
    <p style={{textAlign:'center',width:'30%',margin:'30px',fontSize:'20px'
    ,fontStyle:'italic'}}><h1>Overview</h1>
            {filteredMovies.overview}</p>
    <img src={imageUrl+filteredMovies.poster_path} 
       style={{
        display: 'block',
        margin: '30px',
        height: '400px',
        borderRadius:'15px'
        }} alt=""/>
    </div>
    </div>
  )
}

export default AboutMovies