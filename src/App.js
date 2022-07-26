import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/header";
import Carousel from "./Components/Carousel/carousel";
import Video from "./Components/Video/video";
import Footer from "./Components/Footer/footer"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Carousel />
      <Video />
      <Footer/>
    </div>
  );
}

export default App;
