// import react from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/home"
import Add from "./pages/add"
import Blog from "./pages/blog"

function App() {


// console.log(data); 
 return <Router>
  <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-full">

  <h1 className="text-center font-bold text-5xl underline text-white">Paribesh's Blog</h1>
  <Routes>

  <Route path='/' exact element = {<Home/>} />
  <Route path='/add/blog'   element = {<Add/>} />
  <Route path='/blog/:id'  element = {<Blog/>} />
  </Routes>
  </div>
  </Router>
}

export default App;
