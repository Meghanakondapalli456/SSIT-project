import "./App.css";
import { Link } from 'react-router-dom';
import { AboutUs } from "./Components/AboutUs/AboutUs";
import Keyword from "./Keyword/Keyword";
import News from "./News/News";
import Webinar from "./Webinars/Webinar";
import Whatwe from "./What-we-do/Whatwe";
import Main from "./Main/Main";
import Iphone from "./Iphone/Iphone";
import Whatulearn from "./Whatulearn/Whatulearn";
import Uxdesign from "./Ux-design/Uxdesign";
import Workshop from "./Workshop/Workshop";
import Service from "./Service/Service";
import Budget from "./Budget-tracker/Budget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log("budget component rendered");
  return (
    <Router>
      <div className="App">
      <nav>
          <Link to="/budget-tracker"/>
          
        </nav>
        <Routes>
          {/*<Main />
      <AboutUs />
      <Whatwe />
      <Webinar />
      <News />
      <Keyword />
       <Iphone />
      <Whatulearn /> 
      <Service />*/}
          <Route path="/budget-tracker" element={<Budget />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
