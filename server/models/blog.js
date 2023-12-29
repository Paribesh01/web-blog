const mongoose = require("mongoose");



const blogSchema = new  mongoose.Schema({
    title:String,
    text:String,
    img:String
})
const Blog = mongoose.model('Blog',blogSchema);


module.exports = Blog;