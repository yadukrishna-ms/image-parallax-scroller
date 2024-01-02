import "./App.css";
import MainContainer from "./components/MainContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import { scrollSpeeds } from "./constants/constants";
function App() {
  const [scrollSpeed, setScrollSpeed] = useState(0.5);

  const handleSpeedChange = (event) => {
    const selectedSpeed = parseFloat(event.target.value);
    setScrollSpeed(selectedSpeed);
  };
  return (
    <div className="App ">
      <NavBar />
      <div className="text-red z-50">
        Select scroll speed:
        <select value={scrollSpeed} onChange={handleSpeedChange}>
          {scrollSpeeds &&
            scrollSpeeds.map((data) => (
              <option value={data.value}>{data.name}</option>
            ))}
        </select>
      </div>
      <MainContainer scrollSpeed={scrollSpeed} />
      <Footer />
    </div>
  );
}

export default App;
