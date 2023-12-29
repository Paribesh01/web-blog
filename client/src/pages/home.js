// import react from "react";
import axios from 'axios';
import Box from "../components/Box";
import {Link} from "react-router-dom"
import React, { useState, useEffect } from 'react';

const Home = ()=>{

  function truncateAfter20Words(str) {
    if (str.length <= 20) {
      return str;
  }
  
  return str.substring(0, 20) + "..";
}

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
      <div >

      <Link to='/add/blog' className='text-white'>Add Blog</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {data.map(da=>(
        <Box id={da._id}  title = {da.title} text = {truncateAfter20Words(da.text)} />
        ))}

        </div>
          </div>
    )
}
export default Home