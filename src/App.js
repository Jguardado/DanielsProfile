import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "../src/Landing";
import About from "../src/About";
import Footer from "../src/components/footer";
import ContactUs from "../src/ContactUs";
import Navigation from "../src/Navigation";
import Projects from "../src/Projects";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Route exact path="/" component={Landing}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/projects" component={Projects} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
