import React from "react";

// App's homepage welcoming all users
function Homepage() {
  return (
    
      <header class="masthead">
        <div class="container">
          <div class="masthead-subheading">Welcome To Our Studio!</div>
          <div class="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <div>
            <a class="btn btn-primary btn-xl text-uppercase" href="/about">Tell Me More</a>
            <a class="btn btn-primary btn-xl text-uppercase" href="/main">Edit A Photo</a>
          </div>
        </div>
      </header>
  );
}

export default Homepage;
