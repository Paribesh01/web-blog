
import { useState } from "react"
import "./add.css"
import axios from "axios"
import {  useNavigate } from 'react-router-dom';


const Add = ()=>{
    const Navigate =  useNavigate();
    const [title,setTitle] = useState('')
    const [text,settext] = useState('')
    const [img,setimg] = useState('');

    const handeltextChange = (e)=>{
        settext(e.target.value);
    }
    const handelTitleChange = (e)=>{
        setTitle(e.target.value);
    }
    const handelPhoto = (e)=>{
        setimg(e.target.files[0])
    }

    const onSumbit =async(e)=> {
        e.preventDefault();
        console.log(img);
        const formdata = new FormData()

        formdata.append('title',title)
        formdata.append('text',text)
        formdata.append('img',img)
        const data = await axios.post("http://localhost:4000/blog/post",formdata)
        console.log(data);
        Navigate('/')
    }

    return (
        <form onSubmit={onSumbit}>

        <h1>Add Blog</h1>
        <input type="file" accept=".png, .jpg, .jpeg" onChange={handelPhoto} ></input>


        <input placeholder="Title" onChange={handelTitleChange} className="title" type = "text"></input>
        <br></br>
        <textarea placeholder="text" onChange={handeltextChange} className="blog" rows="4" cols="50">
       </textarea>
       <button type="sumbit">Post</button>
        </form>
    )


}

export default Add;