import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Register.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Routes>
            <Route path="/signup" element={<Register/>}></Route>

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
