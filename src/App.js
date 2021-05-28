import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Certifications from "./Certifications";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Education from "./Education";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Education" component={Education} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path="/Certifications" component={Certifications} />
      </Switch>
      <Footer />
    </>
  );
}
