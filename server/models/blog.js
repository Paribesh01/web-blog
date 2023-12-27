const mongoose = require("mongoose");



const blogSchema = new  mongoose.Schema({
    title:String,
    text:String
})
const Blog = mongoose.model('Blog',blogSchema);


module.exports = Blog;