import React, { Component } from "react";
import "./research.css";
import NavBar from "../../components/appbar";
import image2 from "../../assets/TwainQuote.jpg";
import procrastination from "../../assets/procrastination.png";
import procrastination2 from "../../assets/procrastination2.png";
import subject from "../../assets/subject.png";
import organized from "../../assets/organized.png";
import attitude from "../../assets/attitude.png";
class Research extends Component {
  render() {
    return (
      <div className="AppResearch">
        <header className="App-headerResearch">
          <NavBar />
          <h1 className="App-titleResearch">RESEARCH</h1>
          <h4 className="App-subtitleResearch">My quest to find sources!</h4>
        </header>
        <header className="App-header2Research">
          <h2 className="appTitle2Research">
            <img className="imageResearch" src={image2} alt="Failed to Load" />
          </h2>
          <h2 className="appTitle3Research">
            Do the hardest things first, so the rest feels easy!
          </h2>
        </header>
        <header className="App-headerResearch">
          <h1 className="appTitle2Research">
            I wanted to search and use a diverse variety of sources. So I used
            the following forms of citations:
          </h1>
          <ul className="listResearch">
            <li className="listItemResearch">Blogs</li>
            <li className="listItemResearch">Surveys</li>
            <li className="listItemResearch">Scientific Journals</li>
          </ul>
        </header>
        <header className="App-header2Research">
          <h2 className="appTitle3Research">
            Procrastination/Time Managment Survey
          </h2>
          <p className="App-para2Research">
            I needed to find a way to show how the school was affected by
            procrastination, so I decided to create a survey in order to get
            relevant data that would apply to this school. After sending the
            survey out to the grade Google Classroom, I got many surprising and
            unsurprising responses. After looking at the summary of the
            responses I found out that the school leaned more towards often
            procrastinating on assignments. I also found out that students were
            more likely to procrastinate on a long term assignment like a
            project instead of a short term assignment. A very surprising piece
            of data was that English almost took up a majority in terms of the
            most likely subject to procrastinate in. Another surprising piece of
            evidence was that the students as a whole were more organized, with
            93% of students saying they sometimes to always stay organized.
            Students were also more likely to start working on assignments worth
            more points than the others.
          </p>
          <img className="image1Research" src={procrastination} />
          <img className="image1Research" src={procrastination2} />
          <img className="image1Research" src={subject} />
          <img className="image1Research" src={organized} />
          <img className="image1Research" src={attitude} />
        </header>
        <header className="App-header3Research">
          <h2 className="appTitle3Research">
            Genetic Relations Among Procrastination, Impulsivity, and
            Goal-Management Ability: Implications for the Evolutionary Origin of
            Procrastination
          </h2>
          <p className="App-para3Research">
            On my quest to search for a scientific journal that studied the
            origins of procrastination I came across a multitude of scholarly
            articles. After looking through these, I decided to include this
            one. One reason for this was the fact that this source was cited by
            86 according to google. This meant it was a reputable source.
            Another reason was it delved into the science underlying the origin
            of procrastination. This is important because it relates to the
            portion of my question, “Why do we procrastinate?”
          </p>
          <p className="appPara2Research">
            Procrastination and Impulsivity are both linked to the genetic trait
            responsible for the ability to manage your goals. If your
            impulsivity stems from this trait, there is 100% chance that you
            will be a procrastinator. This experiment shows that helping people
            better manage their goals will reduce procrastination and
            impulsivity. For me this meant that setting up an organizational
            system will reduce procrastination and help me manage my academic
            life.
          </p>
        </header>
        <header className="App-header2Research">
          <h2 className="appTitle3Research">
            Work Smarter, Not Harder: 21 Time Management Tips to Hack
            Productivity
          </h2>
          <p className="App-para2Research">
            <b>
              According to the blog, in order to better manage your time, you
              should simplify how you work, doing things faster, and relieving
              stress instead of being hyper-productive.
            </b>
            <br />
            <br /> The most important way to manage your time is to do the most
            important tasks first.
            <br />
            <br /> You should only commit to things that you will have time for.
            <br />
            <br /> There is also a correlation between sleep and success. It is
            recommended to sleep for at least 7-8 hours. This is necessary in
            order to keep your mind and body functioning optimally.
            <br />
            <br /> Immerse yourself in the task at hand.
            <br />
            <br /> Become more aware of time spent using the
            internet/gaming/watching media.
            <br />
            <br /> Don’t think of the totality of your to-do list.
            <br />
            <br /> Staying organized saves a lot of time, create a system to
            help organize your work and commit to using it.
            <br />
            <br /> Get the bulk of a project completed, revise later.
          </p>
        </header>
      </div>
    );
  }
}
export default Research;
