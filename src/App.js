import "./App.css";
import { Home, Navbar } from "./components";
import { useState } from "react";


function App() {
  const [hostelsInCity, sethostelsInCity] = useState([]);
  const [avalible, setAvalible] = useState(false);
  return (
    <div className="App">
      <Navbar
        hostelsInCity={hostelsInCity}
        sethostelsInCity={sethostelsInCity}
        setAvalible={setAvalible}
      />
      <Home hostelsInCity={hostelsInCity} avalible={avalible}/>
    </div>
  );
}

export default App;
