import logo from "./logo.svg";
import HomePage from "./components/homepage/homePage";
import NavBar from "./components/navbar/navbar";
import OurService from "./components/services/ourService";

import AboutUs from "./components/aboutUs/aboutUs";
import Expert from "./components/weRExpertAt/expert";
import DeriveingProperty from "./components/derivingProperty/deriveingProperty";
import Enquery from "./components/enqiery/inquiry";
import Review from "./components/review/review";
import ContactForm from "./components/contact/contact";
import LastPage from "./components/lastPage/lastPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutUs />
      <OurService />
      <Expert />
      <DeriveingProperty />
      <Enquery />
      <Review />
      <ContactForm />
      <LastPage />
    </div>
  );
}

export default App;
