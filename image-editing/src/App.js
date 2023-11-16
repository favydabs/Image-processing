// Route-related components from the react-router-dom library
import { Route, Routes } from "react-router-dom";

// All pages and sections
import Footer from "./component/Landingpage/Pages/Footer";
import Navbar from "./component/Landingpage/Bar/Navbar";
import About from "./component/Landingpage/Pages/About";
import Team from "./component/Landingpage/Pages/Team";
import Main from "./component/Main";
import Homepage from "./component/Landingpage/Pages/Homepage";

// Navigation Bar
function App() {
  return (
    <div>
      {/* Navbar is displayed on all pages */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        {/* Home page */}
        <Route
          path="/" element={<Homepage/>} />
           
        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Team page */}
        <Route path="/team" element={<Team />} />

        {/* Photo Edit page */}
        <Route path="/main" element={<Main />} />
      </Routes>

      {/* Footer is displayed on all pages  */}

      <Footer />
    </div>
  );
}

export default App;
