import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./landing-page";
import MapView from "./search/mapView/mapView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<MapView position={[51.505, -0.09]}/>} />
      </Routes>
    </Router>
  )
}

export default App
