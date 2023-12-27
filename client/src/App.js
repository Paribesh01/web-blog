// import react from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/home"
import Add from "./pages/add"
import Blog from "./pages/blog"

function App() {


// console.log(data); 
 return <Router>
  <h1>Paribesh Blog</h1>
  <Routes>

  <Route path='/' exact element = {<Home/>} />
  <Route path='/add/blog'   element = {<Add/>} />
  <Route path='/blog/:id'  element = {<Blog/>} />
  </Routes>
  </Router>
}

export default App;
