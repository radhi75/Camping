import React from "react";
import vid from "./video-1.mp4";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <video src={vid} autoPlay loop muted></video>
      <div className="content">
        <h1>Hello to our page</h1>
        <p>this is a camping platform for all people that love adventure</p>
        <span className="btns">
          <button
            className="button-17"
            style={{ backgroundColor: "lightblue", color: "white" }}
          >
            SignIn
          </button>
          <button className="button-17">+216 00 000 000</button>
        </span>
      </div>
    </div>
  );
};

export default Home;
