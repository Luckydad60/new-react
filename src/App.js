// import logo from './images/logo192.png.';
// import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState,useEffect } from "react"
import Home from "./components/Home";
import SeedForm from "./components/SeedForm";
import { Route, Routes } from "react-router-dom";
import "./App.css"



function App() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(false);
}, []);
  return (
    <Routes>
      <Route path="/" element={<Home  />}/>
      <Route path="/import" element={<SeedForm modal={modal} setModal={setModal} />} />
    </Routes>
  );
}

export default App;
