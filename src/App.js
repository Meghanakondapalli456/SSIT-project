import "./App.css";
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


function App() {
  

  return (
    <div className="App">
      {/*<Main />
      <AboutUs />
      <Whatwe />
      <Webinar />
      <News />
      <Keyword />
       <Iphone />
      <Whatulearn /> 
      <Service />*/}
      <Budget />
    
      
    </div>
  );
}

export default App;
