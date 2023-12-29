import {Link, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import "./blog.css"


const Blog = ()=>{
    const {id} = useParams(); // for taking id from the link blog/:id
    const [data,setData] = useState([])

   

    useEffect(()=>{
        axios.get(`http://localhost:4000/blog/${id}`)
        .then((responce)=>{
          setData(responce.data);
          // console.log(responce.data)
          // console.log(data);
        })
        .catch((e)=>{
          console.log("Error while getting data from the server"+e)
        })
    },[id]);
    
    return(<div>

        <h1>Blog Post</h1>
        <div className="box">
        <h1 className="blogtitle">{data.title}</h1>
        <p className="blogtext">{data.text}</p>
        </div>
        <Link to="/">Go Back</Link>

        </div>
    )

}

export default Blog