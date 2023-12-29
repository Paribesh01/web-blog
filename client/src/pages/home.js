// import react from "react";
import axios from 'axios';
import Box from "../components/Box";
import {Link} from "react-router-dom"
import React, { useState, useEffect } from 'react';

import Hero from '../components/Hero';


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
        
        
         <Hero/>
         <h1 className='uppercase font-bold text-4xl underline ml-14 mb-10 ' >Blogs</h1>
        {/* <Link to='/add/blog' className='text-white'>Add Blog</Link> */}
        <div className=' w-full  flex justify-center '>

        <div className='grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-36'>
      {data.map(da=>(
        <Box id={da._id} img ={da.img} title = {da.title} text = {truncateAfter20Words(da.text)} />
        
        ))}

        </div>
        </div>
          </div>
    )
}
export default Home