import Main from "./component/Main";
import Navbar from "./component/Landingpage/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./component/Landingpage/About";
import Homepage from "./component/Landingpage/Homepage";
// import Services from "./component/Landingpage/Services";
import Team from "./component/Landingpage/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        {/* <Route path="service" element={<Services />} /> */}
        <Route path="main" element={<Main />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
