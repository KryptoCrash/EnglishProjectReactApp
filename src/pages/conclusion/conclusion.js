import React, { Component } from "react";
import "./conclusion.css";
import NavBar from "../../components/appbar";
import Intro from "../../components/intro";
import procrastination from "../../assets/procrastination.png";

class Conclusion extends Component {
  render() {
    return (
      <div className="AppConclusion">
        <header className="App-headerConclusion">
          <NavBar />
          <h1 className="App-titleConclusion">
            <Intro message="CONCLUSION" />
          </h1>
          <h4 className="App-subtitleConclusion">The End Is Nigh.</h4>
          <p className="sourceConclusion">
            This presentation was coded with the React.js and Material-UI
            Frameworks
          </p>
        </header>
        <header className="App-header2Conclusion">
          <h2 className="appTitle2Conclusion">Conclusion to my project!</h2>
          <p className="App-paraConclusion">
            For my Nerd Fest Project, I decided to research Procrastination and
            Time Management. I have come across many intresting sources that
            will help enlighten your perspective on procrastination and how it
            affects not only your school work, but your daily life aswell. I
            hope you enjoy my presentation!
          </p>
          <h4 className="appPara2Conclusion">
            Did you know that 40% of people in this school said that they almost
            always procrastinate?
          </h4>
          <img className="image1Conclusion" alt="sorry failed" src={procrastination} />
        </header>
        <header className="App-headerConclusion">
          <h1>My Research Question</h1>
          <h2>
            Why do people procrastinate and how can better manage our time to
            prevent procrastination?
          </h2>
        </header>
      </div>
    );
  }
}
export default Conclusion;
