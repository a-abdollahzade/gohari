import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/header";
import Carousel from "./Components/Carousel/carousel";
import Video from "./Components/Video/video";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Carousel />
      <Video />
    </div>
  );
}

export default App;
