import React, { Component } from "react";
import "./App.css";
import Intro from "../intro";
import NavBar from "../appbar";
import procrastination from "../../assets/procrastination.png";

class App extends Component {
  state = {
    series: []
  };

  componentDidMount() {
    let series = [4, 4, 4, 5];
    setTimeout(() => {
      this.setState({ series });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <h1 className="App-title">
            <Intro message="PROCASTINATION AND TIME MANAGMENT" />
          </h1>
          <h4 className="App-subtitle">A Presentation by Eric Yachbes</h4>
        </header>
        <header className="App-header2">
          <h2 className="appTitle2">Welcome to my project!</h2>
          <p className="App-para">
            For my Nerd Fest Project, I decided to research Procrastination and
            Time Managment. I Have come across many intresting sources that will
            help enlighten you perspective on procrastination and how it affects
            not only your school work, but your daily life aswell. I hope you
            enjoy my presentation!
          </p>
          <h4 className="appPara2">
            Did you know that 40% of people in this school said that they almost
            always procrastinate?
          </h4>
          <img className="image1" alt="sorry failed" src={procrastination} />
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

export default App;
