import Main from "./component/Main";
import Footer from "./component/Landingpage/Pages/Footer";
import Navbar from "./component/Landingpage/Bar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./component/Landingpage/Pages/About";
import Homepage from "./component/Landingpage/Pages/Homepage";
// import Services from "./component/Landingpage/Services";
import Team from "./component/Landingpage/Pages/Team";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="about" element={<About />} />
        {/* <Route path="service" element={<Services />} /> */}
        <Route path="main" element={<Main />} />
        <Route path="team" element={<Team />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
