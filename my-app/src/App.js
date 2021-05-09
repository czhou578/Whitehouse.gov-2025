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
          <div>
            <h1>Big Tech</h1>
            <InfoCard title="Big Tech" msg="first-par"/>
          </div>
          <div>
            <h1>Privacy Concerns </h1>
            <InfoCard title="Privacy Concerns" msg="second-par"/>
          </div>
          <div>
            <h1>Cybersecurity</h1>
            <InfoCard title="Cybersecurity" msg="third-par"/>
          </div>
        </div>
      </section>
  
    </div>
  );
}

export default App;
