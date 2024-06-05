import logo from "./logo.svg";
import HomePage from "./components/homepage/homePage";
import NavBar from "./components/navbar/navbar";
import OurService from "./components/services/ourService";

import AboutUs from "./components/aboutUs/aboutUs";
import Expert from "./components/weRExpertAt/expert";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutUs />
      <OurService />
      <Expert />
    </div>
  );
}

export default App;
