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

function App() {
  const newContent = [
    {
    head: "Build something new in our Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat tristique vitae nibh. Etiam suscipit sed ultricies tortor a,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat tristique vitae nibh. Etiam suscipit sed ultricies tortor a, .... ",
  },
];

  return (
    <div className="App">
      {/*<Main />
      <AboutUs />
      <Whatwe />
      <Webinar />
      <News />
      <Keyword />
      <Iphone />*/}
      <Whatulearn /> 
      <Workshop 
       content={newContent}  />
    </div>
  );
}

export default App;
