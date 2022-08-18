import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
