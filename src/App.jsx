import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./landing-page";
import MapView from "./lib/components/mapView/mapView";
import Search from "./search";
import Header from "./header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App
