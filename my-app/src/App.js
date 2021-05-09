import './App.css';
import './Taskbar.css'
import './Infocard.css'
import Taskbar from './Taskbar'
import InfoCard from './Infocard'
import React, { Component } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function App() {
  return (
    <div id="body">
      <Taskbar />
      <section className="cover-splash">
        <div className="head-title">
          Welcome to the <br></br> 2027 American ScoreCard
          <div className="title-descript">
            Check out our annual report below
            <div className="down-arrow">
              <ArrowDownwardIcon />
            </div>
          </div>
        </div>
      </section>
      <section className="internet-controls">
        <div>
          <h1>Internet Controls</h1>
        </div>
        <div className="display-cards">
          <InfoCard category="tech" title="Big Tech" msg="first-par"/>
          <InfoCard category="tech" title="Privacy Concerns" msg="second-par"/>
          <InfoCard category="tech" title="Cybersecurity" msg="third-par"/>
        </div>
      </section>
      <section className="economy-controls">
        <div>
          <h1>Economy</h1>
        </div>
        {/* <div className="display-cards">
          <InfoCard category="economy" title="The Year of $1000" msg="first-par"/>
          <InfoCard category="economy" title="Unemployment" msg="second-par"/>
          <InfoCard category="economy" title="Food Security" msg="third-par"/>
        </div> */}
      </section>
    </div>
  );
}

export default App;
