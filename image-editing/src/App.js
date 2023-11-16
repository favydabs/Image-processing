// Route-related components from the react-router-dom library
import { Route, Routes } from "react-router-dom";

// All pages and sections
import Footer from "./component/Landingpage/Pages/Footer";
import Navbar from "./component/Landingpage/Bar/Navbar";
import About from "./component/Landingpage/Pages/About";
import Team from "./component/Landingpage/Pages/Team";
import Main from "./component/Main";

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
          path="/"
          element={
            <div>
              {/* Content specific to the Home page */}
              <header className="masthead">
                <div className="container">
                  <div className="masthead-subheading">Welcome To Our Studio!</div>
                  <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                  <div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="/about">
                      Tell Me More
                    </a>
                    <a className="btn btn-primary btn-xl text-uppercase" href="/main">
                      Edit A Photo
                    </a>
                  </div>
                </div>
              </header>
            </div>
          }
        />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Team page */}
        <Route path="/team" element={<Team />} />

        {/* Photo Edit page */}
        <Route path="/main" element={<Main />} />
      </Routes>

      {/* Footer is displayed on all pages */}
      <Footer />
    </div>
  );
}

export default App;
