import "./App.css";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import News from "./News/News";
import Webinar from "./Webinars/Webinar";
import Whatwe from "./What-we-do/Whatwe";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Whatwe />
      <Webinar />
      <News />
    </div>
  );
}

export default App;
