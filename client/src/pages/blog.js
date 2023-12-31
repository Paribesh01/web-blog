import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./blog.css";

const Blog = () => {
  const { id } = useParams(); // for taking id from the link blog/:id
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/blog/${id}`)
      .then((responce) => {
        setData(responce.data);
        // console.log(responce.data)
        // console.log(data);
      })
      .catch((e) => {
        console.log("Error while getting data from the server" + e);
      });
  }, [id]);

  return (
    <div className=" w-full ">
      <div className="flex justify-center flex-col items-center w-full  ">
        <div className=" w-7/12 h-screen">
          <img
            className="w-full h-4/6 object-cover "
            src={"http://localhost:4000/uploads/" + data.img}
          ></img>
          <div className=" w-full">
            <h1 className=" mt-4 text-4xl font-bold uppercase ">
              {data.title}
            </h1>
            <p className=" mt-5 text-xl">{data.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
