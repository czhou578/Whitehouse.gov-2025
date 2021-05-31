import './App.css';
import './Taskbar.css'
import './Infocard.css'
import Taskbar from './Taskbar'
import InfoCard from './Infocard'
import Environment from './Environment'
import FPolicy from './FPolicy'
import React, { Component, useEffect, useRef, useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Healthcare from './Healthcare';


function App() {

  function test() {
    const econTopics = document.querySelectorAll('.econ-topics')
    const econPanelDetail = document.querySelectorAll('.econ-panel-detail')
    let firstClick = false;
    for (let i = 0; i < econTopics.length; i++) {
      firstClick = true;
      console.log('hello')
      econTopics[i].addEventListener('click', function() {
      econPanelDetail[i].removeAttribute("hidden")
      for (let j = 0; j < econTopics.length; j++) {
        if (j != i) {
          econPanelDetail[j].setAttribute("hidden", "true");
        }
      }
    })

    }
  }

  useEffect(() => {
    test();
  })

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
          <h1 class="title" id="internet">Internet Controls</h1>
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
            <h1 id="econ-descrip">Americans are navigating this new world of finance. See how <br></br>
            the administration is boosting economic growth.</h1>
        </div>
        <div className="vertical-econList">
          <div className="econ-panel">
            <div id="panel-1" className="econ-panel-detail" >
              <div className="econ-descript">
                <p>This is demo text</p>
              </div>
            </div>
            <div id="panel-2" className="econ-panel-detail" hidden >
              <div className="econ-descript">
                <p>This is demo text2</p>
              </div>
            </div>
            <div id="panel-3" className="econ-panel-detail" hidden >
              <div className="econ-descript">
                <p>This is demo text3</p>
              </div>
            </div>
            <div id="panel-4" className="econ-panel-detail" hidden >
              <div className="econ-descript">
                <p>This is demo text4</p>
              </div>
            </div>

          </div>
          <h5 className="econ-topics">People's Bank</h5> <br></br>
          <h5 className="econ-topics">Automation Progress </h5> <br></br>
          <h5 className="econ-topics">Important Statistics</h5> <br></br>
          <h5 className="econ-topics">Cryptocurrencies</h5>
        </div>
      </section>
      <section className="healthcare">
        <h1 class="title">Health and Fitness</h1>
        <div className="line"></div>
        <Healthcare className="health"/>
        <div className="cross-wrap-outer">
          <div className="cross-wrap">
            <svg width="170" height="131" viewBox="0 0 270 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="right">
                <stop offset="0" stop-color="#36f59f">
                  <animate dur="5s" attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>
                <stop offset="0" stop-color="#fff">
                  <animate dur="5s" attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>          
              </linearGradient>
            </defs>
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
        {/* <Environment /> */}
      </section>
      <section className="foreign-policy">
        <h1 class="title">Foreign Policy / Cooperation</h1>
        <div className="line"></div>
        {/* <FPolicy /> */}
      </section>
  
    </div>
  );
}

export default App;
