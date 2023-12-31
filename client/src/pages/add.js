import { useState } from "react";
import "./add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, settext] = useState("");
  const [img, setimg] = useState("");

  const handeltextChange = (e) => {
    settext(e.target.value);
  };
  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelPhoto = (e) => {
    setimg(e.target.files[0]);
  };

  const onSumbit = async (e) => {
    e.preventDefault();
    console.log(img);
    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("text", text);
    formdata.append("img", img);
    const data = await axios.post("http://localhost:4000/blog/post", formdata);
    // console.log(data);
    Navigate("/");
  };

  return (
    <section className="py-6  dark:text-gray-50 w-full flex justify-center  ">
      <div className=" w-2/3 bg-slate-100 drop-shadow-xl">
        <form
          onSubmit={onSumbit}
          novalidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 w-full"
        >
          <label className="block">
            <span className=" text-black">Image</span>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handelPhoto}
              className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-slate-100 text-black"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-black">Title</span>
            <input
              type="text"
              onChange={handelTitleChange}
              placeholder="Title"
              className="block  w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-slate-100 text-black"
              data-temp-mail-org="0"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-black">Blog</span>
            <textarea
              rows="3"
              onChange={handeltextChange}
              className="block w-full rounded-md focus:ring focus:ri focus:ri bg-slate-100 text-black"
              placeholder="Blog text"
            ></textarea>
          </label>
          <button
            type="sumbit"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"
          >
            Submit
          </button>
        </form>
      </div>
    </section>

    // <form onSubmit={onSumbit}>
    //   <h1>Add Blog</h1>
    //   <input
    //     type="file"
    //     accept=".png, .jpg, .jpeg"
    //     onChange={handelPhoto}
    //   ></input>

    //   <input
    //     placeholder="Title"
    //     onChange={handelTitleChange}
    //     className="title"
    //     type="text"
    //   ></input>
    //   <br></br>
    //   <textarea
    //     placeholder="text"
    //     onChange={handeltextChange}
    //     className="blog"
    //     rows="4"
    //     cols="50"
    //   ></textarea>
    //   <button type="sumbit">Post</button>
    // </form>
  );
};

export default Add;
