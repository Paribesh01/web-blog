// import react from "react";
import axios from 'axios';
import Box from "../components/Box";
import {Link} from "react-router-dom"
import React, { useState, useEffect } from 'react';

const Home = ()=>{

    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/blog/get')
        .then((responce)=>{
          setData(responce.data);
          // console.log(responce.data)
          // console.log(data);
        })
        .catch((e)=>{
          console.log("Error while getting data from the server"+e)
        })
    },[])

    return(
        <div>
      <Link to='/add/blog'>Add Blog</Link>
      {data.map(da=>(
          <Box id={da._id}  title = {da.title} text = {da.text} />
          ))}

          </div>
    )
}
export default Home