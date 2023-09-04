// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';

// const ComedyMovie = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(ComedyMovies).then((res) => {setData(res.data.results);})
//     }, []);
//     console.log(data);
//   return (
//     <div>
//         <h1 style={{fontWeight:'Bold',textAlign:'center',color:'#3d1f1b',fontSize:'50px',paddingTop:'20px'}}>Comedy Movies</h1>
//       {data.map((item) => (
//         <div key={item.id} style={{display:"inline-block",height:'100%',marginLeft:"40px",alignItems:"center",marginTop:"40px"}}>
//         <Card style={{ width: '350px',height:'auto' ,borderRadius:'20px',backgroundColor:'#ebdcc1'}}>
//         <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/01/37/97/24/360_F_137972421_G8aNpVM7PXA2Y0FFJeBPdRVdjX3jYVFf.jpg" 
//         style={{width:'300px',height:'auto',margin:'auto',paddingTop:'10px'}}/>
//         <Card.Body>
//         <Card.Title>{item.original_name}</Card.Title>
//         <Card.Text>
//         {item.overview}
//         </Card.Text>
//         <Button style={{backgroundColor:'#3d1f1b',border:'1px solid #3d1f1b'}}>{item.vote_count}</Button>
//         </Card.Body>
//         </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ComedyMovie;
