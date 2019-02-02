import React, { Component } from "react";
import "./research.css";
import NavBar from '../../components/appbar'
class Research extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <h1 className="App-title">
            RESEARCH
          </h1>
          <h4 className="App-subtitle">My quest to find sources!</h4>
        </header>
        <header className="App-header2">
          <h2 className="appTitle2">Welcome to my project!</h2>
          <p className="App-para">
            For my Nerd Fest Project, I decided to research Procrastination and
            Time Management. I have come across many intresting sources that
            will help enlighten your perspective on procrastination and how it
            affects not only your school work, but your daily life aswell. I
            hope you enjoy my presentation!
          </p>
          <h4 className="appPara2">
            Did you know that 40% of people in this school said that they almost
            always procrastinate?
          </h4>
        </header>
        <header className="App-header">
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
export default Research;
