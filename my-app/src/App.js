import './App.css';
import './Taskbar.css'
import './Infocard.css'
import Taskbar from './Taskbar'
import InfoCard from './Infocard'
import Environment from './Environment'
import FPolicy from './FPolicy'
import React, { Component } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function App() {
  return (
    <div id="body">
      <Taskbar />
      <section className="cover-splash">
        <div className="head-title">
          Welcome to the <br></br> 2027 American Scorecard
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
          <h1 class="title">Internet Controls</h1>
        </div>
        <div className="display-cards">
          <div className="info-wrap">
            <div className="info">
              <InfoCard title="Big Tech" msg="first-par" className="card"/>
            </div>
          </div>
          <div className="info-wrap">
            <InfoCard title="Privacy Concerns" msg="second-par" className="card"/>
          </div>
          <div className="info-wrap">
            <InfoCard title="Cybersecurity" msg="third-par" className="card"/>
          </div>
        </div>
      </section>
      <section className="economy"> 
        <div>
          <h1 class="title">Economy And Finance</h1>
          <div className="line"></div>
            <h1>See How Americans Are Navigating The New Economy</h1>
        </div>
        <div>
          <h5>People's Bank</h5> <br></br>
          <h5>Automation Progress </h5> <br></br>
          <h5>Important Statistics</h5> <br></br>
          <h5>Cryptocurrencies</h5>
        </div>
      </section>
      <section className="healthcare">
        <h1 class="title">Health and Fitness</h1>
        <div className="line"></div>
        <div>
          <div className="cross-wrap">
            <svg width="170" height="131" viewBox="0 0 270 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 2">
            <path id="Vector 2" d="M181 38.5H88V117.5H26V194.5H88V276H181V194.5H239V117.5H232H181V38.5Z" stroke="black" stroke-width="6"/>
            <circle id="Ellipse 5" cx="212.5" cy="117.5" r="8.5" fill="#1D1111"/>
            </g>
            </svg>
          </div>
        </div>

      </section>
      <section className="environment">
        <h1 class="title">Environment Costs</h1>
        <div className="line"></div>
        <Environment />
      </section>
      <section className="foreign-policy">
        <h1 class="title">Foreign Policy / Cooperation</h1>
        <div className="line"></div>
        <FPolicy />
      </section>
  
    </div>
  );
}

export default App;
