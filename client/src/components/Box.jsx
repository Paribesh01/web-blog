import React from "react";
// import './Box.css';
import {Link} from 'react-router-dom'


const Box = (props)=>{
    return(

                <div key={props.id} className=" w-64 mx-auto my-8 p-6 shadow-md rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  ">
        <div className="text-center mb-4">
            <h2 className="font-bold text-2xl uppercase ">{props.title}</h2>
        </div>
        <div className="text-center mb-8 ">
            <p>{props.text}</p>
        </div>
        <div className="flex justify-center ">
        <Link to={'blog/'+props.id}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read More
            </button>
            </Link>
        </div>
        </div>



        // <div key={props.id} className="">
        // <h1 className="font-bold uppercase">{props.title}</h1>
        // <p className="blogtext">{props.text}</p>
        // <Link to={'blog/'+props.id}>
        // <button >Read More</button>
        // </Link>
        // </div>
    ) 
};

export default Box;