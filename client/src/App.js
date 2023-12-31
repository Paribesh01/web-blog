// import react from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Add from "./pages/add";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  // console.log(data);
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add/blog" element={<Add />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
