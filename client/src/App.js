// import react from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/home"
import Add from "./pages/add"
import Blog from "./pages/blog"
import Nav from "./components/Nav";

function App() {


// console.log(data); 
 return <Router>
  <div >

  <Nav />
  <Routes>

  <Route path='/' exact element = {<Home/>} />
  <Route path='/add/blog'   element = {<Add/>} />
  <Route path='/blog/:id'  element = {<Blog/>} />
  </Routes>
  </div>
  </Router>
}

export default App;
