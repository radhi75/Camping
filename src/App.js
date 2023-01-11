import "./App.css";
import data from "./Assets/data";

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ListCard from "./Components/ListCard";

import Navigation from "./Components/Navigation";

function App() {
  const name = "travel";
  const nav1 = "home";
  const nav2 = "about";
  const nav3 = "contact";
  return (
    <div className="App">
      <Navigation name={name} nav1={nav1} nav2={nav2} nav3={nav3} />
      <Home />
      <ListCard data={data} />
      <Footer />
    </div>
  );
}

export default App;
