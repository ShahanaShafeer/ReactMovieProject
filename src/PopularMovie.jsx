// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { PopularMovies, imageUrl } from './Url';
// import { Button, Card } from 'react-bootstrap';

// const PopularMovie = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(PopularMovies).then((res) => {setData(res.data.results);})
//     }, []);
//     console.log(data);
//   return (
//     <div>
//         <h1 style={{fontWeight:'Bold',textAlign:'center',color:'#594756',fontSize:'50px',paddingTop:'20px'}}>Popular Movies</h1>
//       {data.map((item) => (
//         <div key={item.id} style={{display:"inline-block",marginLeft:"40px",alignItems:"center",marginTop:"40px"}}>
//         <Card style={{ width: '350px',height:'auto' ,borderRadius:'20px',backgroundColor:'#ebdcc1'}}>
//         <Card.Img variant="top" src={imageUrl+item.backdrop_path}
//         style={{width:'300px',height:'auto',margin:'auto',paddingTop:'10px'}}/>
//         <Card.Body>
//         <Card.Title>{item.title}</Card.Title>
//         <Card.Text>
//         {item.overview}
//         </Card.Text>
//         <Button style={{backgroundColor:'#594756',border:'1px solid #594756'}}>{item.original_title}</Button>
//         </Card.Body>
//         </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PopularMovie;
