import "./App.css";
import Destination from "./Components/Destination";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <h1 style={{ textAlign: "center" }}>Those are our destination</h1>
      <Destination />
      <Footer />
    </div>
  );
}

export default App;
