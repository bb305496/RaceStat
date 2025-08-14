import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Register.jsx";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <BrowserRouter>
      <div>
          <Header token={token} setToken={setToken}/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/signup" element={<Register/>}></Route>
              <Route path="/signin" element={<Login setToken={setToken}/>}></Route>
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
