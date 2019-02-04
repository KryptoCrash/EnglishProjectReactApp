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
          <h2 className="appTitle2Conclusion"><b>TOPIC</b>: Why do people procrastinate and how can we better manage our
            time to prevent procrastination?</h2>
          <p className="App-paraConclusion">
             After a multitude of late
            assignments and talks with my parents, it was time for a new
            project, called Nerd Fest. For this assignment, I decided to
            research procrastination and time management. I wanted to do this
            not only as a project, but hopefully as a way to fix this issue that
            stuck with me since elementary school. Something needed to change,
            so I started my quest to find sources.</p><p className="App-paraConclusion"> During my research process, I
            investigated several websites. Unfortunately, most of them were
            untrustworthy blogs. After some more investigation, I decided I
            would focus my question on the science behind procrastination. I
            looked at scholarly articles and scientific journals which had way
            more information than I had originally thought. I also created a
            survey and sent it to my peers, asking that they respond. I realized
            that this would be a better representation of my work, as it would
            be relevant to the classroom.</p><p className="App-paraConclusion"> I received more than 200 responses to
            my survey, which was way more than I expected. One interesting fact
            was that almost a majority of students said that they were most
            likely to procrastinate in English. The responses also indicated
            that a majority of students would procrastinate more often than not.
            </p><p className="App-paraConclusion">One scholarly article that I came across described the genetic
            correlation between procrastination and impulsivity. This was
            interesting to me because I originally thought that my
            procrastination stemmed from laziness. However, after looking
            through this study I came to the conclusion that it may actually
            stem from my lack of goal management abilities and my impulsivity.
            For my presentation, I decided to set goals so that I could finish
            the project on time. Going through the research process actually
            helped me think of ways to prevent procrastination on this project.
            </p><p className="App-paraConclusion">I also came across some professional blogs that gave tips on ways to
            prevent procrastination and improve time management skills. These
            tips applied to me and helped me endure the research process.</p><p className="App-paraConclusion"> One
            element I learned about research is that it is hard. Organizing and
            finding reputable sources is a pain. One way that I determined how
            to find reputable sources was looking at the author and their
            profession. Most reputable sources came from an author with a degree
            in psychology. Another way I determined whether a scientific journal
            was reputable was by checking the number of articles that cited it.
            Overall, I learned ways to help improve my issue with
            procrastination through my research process.<br/><br/></p><p className="App-paraConclusion"> After looking through
            my research I have come to the conclusion that some people
            procrastinate because of the lack of a genetic trait responsible for
            goal management. Another reason for procrastination is that people
            become distracted and do something that is more fun and
            unproductive. In answer to my original question, I found several
            useful time management tips. We can better manage our time by
            simplifying how we work, doing work faster, and relieving stress. In
            order to reduce my procrastination and improve my time management
            skills, I needed to become more aware of time spent using the
            internet/gaming/watching media. I also needed to stay organized and
            finish the bulk of a project complete and then revise later. These
            are examples of tips that would be relevant to me in my journey to
            better manage my time and prevent procrastination.
          </p>
        </header>
      </div>
    );
  }
}
export default Conclusion;
