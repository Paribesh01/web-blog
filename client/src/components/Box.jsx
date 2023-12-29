import React from "react";
import './Box.css';
import {Link} from 'react-router-dom'


const Box = (props)=>{
    return(

        // <div key={props.id} className="box bg-black">
        // <div className="image  ">
        //     <img  src="https://images6.alphacoders.com/133/1338694.png" alt="imageee" className="w-full h-full" />
        // </div>
        // <div className="texts" >
        //     <h1 className=" font-bold uppercase text-xl  ">{props.title} </h1>
        // </div>
        // </div>

        
            <div key={props.id} className="table drop-shadow-xl rounded-lg ">
                <div className="image  ">
                    <img  className="rounded-t-lg" src={'http://localhost:4000/uploads/'+props.img} alt={props.img} />
                </div>
                <div className="texts flex justify-center" >
                    <div className=" w-4/5 mt-8 ">

                 <h1 className=" font-bold uppercase text-xl  text-customBlue ">{props.title} </h1>
                    <p>{props.text}</p>
                </div>
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