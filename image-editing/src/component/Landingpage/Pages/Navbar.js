// React library for building user interfaces
import React from 'react'

// Route-related components from the react-router-dom library
import { Route, Routes } from "react-router-dom";

// Footer Content
function Navbar() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="about" element={<About />} />
      {/* <Route path="service" element={<Services />} /> */}
      <Route path="main" element={<Main />} />
      <Route path="team" element={<Team />} />
    </Routes>
    <Footer/>
  </div>
  )
}

export default Footer