import React from "react";
import './Box.css';
import {Link} from 'react-router-dom'


const Box = (props)=>{
    return(
        <div key={props.id} className="box">
        <h1 className="blogtitle">{props.title}</h1>
        <p className="blogtext">{props.text}</p>
        <Link to={'blog/'+props.id}>
        <button >Read More</button>
        </Link>
        </div>
    ) 
};

export default Box;