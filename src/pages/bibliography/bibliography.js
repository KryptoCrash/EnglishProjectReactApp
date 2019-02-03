import React, { Component } from "react";
import "./bibliography.css";
import NavBar from "../../components/appbar";
import Intro from "../../components/intro";

class Bibliography extends Component {
  render() {
    return (
      <div className="AppBibliography">
        <header className="App-headerBibliography">
          <NavBar />
          <h1 className="App-titleBibliography">
            <Intro message="BIBLIOGRAPHY" />
          </h1>
          <h4 className="App-subtitleBibliography">My Citations.</h4>
          <p className="sourceBibliography">
            This presentation was coded with the React.js and Material-UI
            Frameworks
          </p>
        </header>
        <header className="App-header2Bibliography">
          <h2 className="appTitle2Bibliography">Works Cited</h2>
          <p className="App-paraBibliography">
          Bates, Jordan. "Work Smarter, Not Harder: 21 Time Management Tips to Hack Productivity." The Creativity Post, 27 Jan. 2014, www.creativitypost.com/create/work_smarter_not_harder_21_time_management_tips_to_hack_productivity. Accessed 31 Jan. 2019.<br /><br/>According to the blog, in order to better manage your time you should simplify how you work, doing things faster, and relieving stress instead of being hyper-productive. The most important way to manage your time is to do the most important tasks first. You should only commit to things that you will have time for. There is also a correlation between sleep and success. It is recommended to sleep for at least 7-8 hours. This is necessary in order to keep your mind and body functioning optimally. Immerse yourself in the task at hand. Become more aware of time spent using the internet/gaming/watching media. Don’t think of the totality of your to-do list. Staying organized saves a lot of time, create a system to help organize your work and commit to using it. Get the bulk of a project completed, revise later.
          </p>
        </header>
        <header className='App-header3Bibliography'>
        <p className='App-paraBibliography'>Gustavson, Daniel E., et al. "Genetic Relations among Procrastination, Impulsivity, and Goal-Management Ability: Implications for the Evolutionary Origin of Procrastination." Psychol Sci, os, vol. 25, nos. 1178-1188, 2014, doi:10.1177/0956797614526260. Accessed 3 Feb. 2019. <br /><br/>According to the journal, there is a correlation between procrastination and impulsivity. The two traits are linked through genetics, specifically the trait affecting the ability to use high-priority goals effectively to regulate impulse and action. This study showed that procrastination was linked with a genetic contribution. These studies also showed that the genetic correlation between procrastination and impulsivity was 100%. This study provides the first evidence that shared variation between procrastination and impulsivity can be explained by one’s goal-management ability. The study also shows that there may be ways to reduce procrastination in the future by setting goals even in possible distraction. I have chosen this source because it is reputable and provides evidence for the origin of procrastination.</p>
        </header>
        <header className='App-header4Bibliography'>
        <p className='App-paraBibliography'>Sharma, Uma, and Ali Newhard. "What Happens to Your Brain and Body When You Procrastinate Too Much?" The Ladders, Ladders, 22 Nov. 2018, www.theladders.com/career-advice/what-happens-to-your-brain-and-body-when-you-procrastinate-too-much. Accessed 3 Feb. 2019. <br /><br/>According to this professional blog by The Ladders, 1 out of 5 people are compulsive about procrastinating. These people are called chronic procrastinators. This type of procrastination can lead to unwanted health issues. The limbic system is the main source behind this type of procrastination, it is in charge of pleasure and reward. When you procrastinate, your mind would rather do something more interesting and fun. However, studies show that chronic procrastination has led to low self-confidence, tiredness, and depression. One way to help resist the urge to procrastinate is to understand and be aware of the consequences of procrastination. </p>
        </header>
        <header className='App-header5Bibliography'>
        <p className='App-paraBibliography'>South Middle School. "Procrastination/Time Management." Interview by Eric Z. Yachbes. Google Sheets, Google, 23 Jan. 2019, docs.google.com/spreadsheets/d/1UcMStSvI0L9RmsdqSvtzPOvHASVoYY1aqdEPnc8JP_0. Accessed 31 Jan. 2019. <br /><br/> This source shows the data received by a survey with over 200 responses sent out to South Middle School. Some important data from this survey include, how often people procrastinate on their assignments, type of assignment most likely to procrastinate on, school subject most procrastinated on, and whether the said person stays organized. I have chosen this source because it gives a clear representation of procrastination that is relevant to the school. </p>
        </header>
      </div>
    );
  }
}
export default Bibliography;
