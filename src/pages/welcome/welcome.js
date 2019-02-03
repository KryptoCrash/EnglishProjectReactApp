import React, { Component } from "react";
import "./welcome.css";
import NavBar from "../../components/appbar";
import Intro from "../../components/intro";
import procrastination from "../../assets/procrastination.png";

class Welcome extends Component {
  render() {
    return (
      <div className="AppWelcome">
        <header className="App-headerWelcome">
          <NavBar />
          <h1 className="App-titleWelcome">
            <Intro message="PROCRASTINATION AND TIME MANAGEMENT" />
          </h1>
          <h4 className="App-subtitleWelcome">A Presentation by Eric Yachbes</h4>
          <p className="sourceWelcome">
            This presentation was coded with the React.js and Material-UI
            Frameworks
          </p>
        </header>
        <header className="App-header2Welcome">
          <h2 className="appTitle2Welcome">Welcome to my project!</h2>
          <p className="App-paraWelcome">
            For my Nerd Fest Project, I decided to research Procrastination and
            Time Management. I have come across many interesting sources that
            will help enlighten your perspective on procrastination and how it
            affects not only your schoolwork but your daily life as well. I
            hope you enjoy my presentation!
          </p>
          <h4 className="appPara2Welcome">
            Did you know that 40% of people in this school said that they almost
            always procrastinate?
          </h4>
          <img className="image1Welcome" alt="sorry failed" src={procrastination} />
        </header>
        <header className="App-headerWelcome">
          <h1>My Research Question</h1>
          <h2 className='appQuestionWelcome'>
            Why do people procrastinate and how can we better manage our time to
            prevent procrastination?
          </h2>
        </header>
      </div>
    );
  }
}
export default Welcome;
