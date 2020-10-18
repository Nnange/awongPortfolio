import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
            <Header resumeData={resumeData} />
            <About resumeData={resumeData} />
            <Resume resumeData={resumeData} />
            <Portfolio resumeData={resumeData} />
            {/* <Testimonials resumeData={resumeData} /> */}
            <ContactUs resumeData={resumeData} />
            <Footer resumeData={resumeData} />
            </Route>
          </Switch>
       </div>
      </Router>
      
    );
  }
}

export default App;
