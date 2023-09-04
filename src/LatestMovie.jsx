// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';

// const LatestMovie = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(LatestMovies).then((res) => {setData(res.data.results);})
//     }, []);
//     console.log(data)
//   return (
//     <div>
//           <h1 style={{fontWeight:'Bold',textAlign:'center',color:'#9f620f',fontSize:'50px',paddingTop:'20px'}}>Latest Movies</h1>
//       {data.map((item) => (
//         <div key={item.id} style={{display:"inline-block",marginLeft:"40px",alignItems:"center",marginTop:"40px"}}>
//         <Card style={{ width: '350px',height:'auto' ,borderRadius:'20px',backgroundColor:'#8d6906'}}>
//         <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S8CsvezISSSLd7LBM6Eh9yJZBZmMKmjEDjToPtB4E5YqTKulM2l7RyawJyIpAgJFkWU&usqp=CAU" 
//         style={{width:'300px',height:'auto',margin:'auto',paddingTop:'10px'}}/>
//         <Card.Body>
//         <Card.Title style={{fontWeight:'bold',color:'#f5b443',textAlign:'center'}}>{item.title}</Card.Title>
//         <Card.Text>
//         {item.overview}
//         </Card.Text>
//         <Button  style={{backgroundColor:'#f5b443',border:'1px solid #f5b443'}}>{item.original_title}</Button>
//         </Card.Body>
//         </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LatestMovie;
