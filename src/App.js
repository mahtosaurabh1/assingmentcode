import "./App.css";
import Areacompo from "./components/areacompo";
import Barcompo from "./components/barcompo";
import Navbar from "./components/navbar";
import Histogram from "./components/histogramcompo";
import Piecompo from "./components/piecompo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import About from "./components/about";

function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route path="/piecompo">
            <Piecompo />
          </Route>
          <Route path="/barcompo">
            <Barcompo />
          </Route>
          <Route path="/histogram">
            <Histogram />
          </Route>
          <Route path="/areacompo">
            <Areacompo />
          </Route>
          <Route path="/" >
            <About />
          </Route>
        </Switch>
        <Footer />
    </>
  );
}

export default App;
