import "./App.css";
//import Profile from "./Profile/Profile";
//import Serv from "./Serv/Serv";
//import { Link } from 'react-router-dom';
//import Head from "./Header/Head";
//import { AboutUs } from "./Components/AboutUs/AboutUs";
//import Keyword from "./Keyword/Keyword";
//import News from "./News/News";
//import Webinar from "./Webinars/Webinar";
//import Whatwe from "./What-we-do/Whatwe";
//import Main from "./Main/Main";
//import Iphone from "./Iphone/Iphone";
//import Whatulearn from "./Whatulearn/Whatulearn";
//import Uxdesign from "./Ux-design/Uxdesign";
//import Workshop from "./Workshop/Workshop";
//import Service from "./Service/Service";
//import Budget from "./Budget-tracker/Budget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Header/Home';
import Aboutus from './Header/Aboutus';  
import Services from './Header/Services';
import News from './Header/News';     
//import ABoutus from "./ABoutus/ABoutus";
import COntactus from "./COntactus/COntactus";
//import Newsupdate from "./Newsupdate/Newsupdate";
//import Latestnews from "./Latestnews/Latestnews";

function App() {
  //console.log("budget component rendered");
  return (
  <Router>
      <div className="App">
         {/* <Head />
     <nav>
      <Link to="/budget-tracker">Budget Tracker</Link>

          
        </nav>*/}
         <Routes>
         {/*<Main />
      <AboutUs />
      <Whatwe />
      <Webinar />
      <News />
      <Keyword />
       <Iphone />
      <Whatulearn />
      <Service />
        </div> <Route path="/budget-tracker" element={<Budget />} />*/}
          
        </Routes>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
      </Routes>
       {/* <Serv />
      <Profile />
      <Latestnews />
      <Newsupdate />
      <ABoutus />*/}
      <COntactus />
      </div>
    </Router>
  );
}

export default App;
