const express = require("express");
const dbconn = require("./dbconn")
const Blog = require("./models/blog");
const bodyparser = require("body-parser")
const app = express();
const cors = require('cors')
const multer = require("multer")


app.use(express.static('public'))

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/uploads');  // Save images to the 'uploads' directory
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });


app.use(express.json());
app.use(cors());

app.get("/blog/get",async (req,res)=>{
    const blogs = await Blog.find({});
    // const jsonString = JSON.stringify(blogs, null, 2)
    res.json(blogs);


})

app.get("/blog/:id",async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    try{

        const blog =await Blog.findById(id)
        console.log(blog);
        // res.send("ok")
        res.json(blog);
    }catch(e){
        console.log("Error while finding blog through id"+e);
        res.send("Not Ok")
    }
   
})

app.post("/blog/post",upload.single('img') ,async(req,res)=>{
    const {title,text} = req.body;
    const img = req.file.filename;
    // console.log(img.path)



    const newblog = new Blog({title,text,img});
    await newblog.save().then(()=>{
        console.log("New blog is added");
        console.log(newblog);
        res.send("ok")
    }).catch(()=>{
        console.log("Error while adding the new blog");
        res.send("Not ok")
    });
    
})




app.listen(4000,(req,res)=>{
    dbconn();
    console.log("listining in the port 4000");
})