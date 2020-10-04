import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutScreen from "./views/About/About";
import EducationScreen from "./views/Education/Education";
import ExperienceScreen from "./views/Experience/Experience";
import ProjectsScreen from "./views/Projects/Projects";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: 800,
        alignItems: "center",
      }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/education" component={EducationScreen} />
          <Route path="/experience" component={ExperienceScreen} />
          <Route path="/projects" component={ProjectsScreen} />
          <Route path={["/about", "/"]} component={AboutScreen} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
