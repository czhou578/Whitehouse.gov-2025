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
import PieChart from './PieChart'


function App() {

  function cycleEconPanels() {
    const econTopics = document.querySelectorAll('.econ-topics')
    const econPanelDetail = document.querySelectorAll('.econ-panel-detail')
    let firstClick = false;
    for (let i = 0; i < econTopics.length; i++) {
      firstClick = true;

      econTopics[i].addEventListener('click', function() {
      econPanelDetail[i].removeAttribute("hidden")
      econTopics[i].style.color = 'blue'
      for (let j = 0; j < econTopics.length; j++) {
        if (j != i) {
          econTopics[j].style.color = 'black'
          econPanelDetail[j].setAttribute("hidden", "true");
        }
      }
    })

    }
  }



  useEffect(() => {
    cycleEconPanels();
  })

  return (
    <div id="body">
      <Taskbar />
      <section className="cover-splash">
        <div className="cover-img">
          <img src="https://i2.wp.com/media.nbcboston.com/2019/09/tlmd-efe-andrew-yang-matematics.jpg?fit=900%2C506&quality=85&resize=1200%2C675&strip=all&ssl=1"></img>
        </div>
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
      <section className="speeches">
        <h1 className="title">The President's Speeches</h1>
      </section>
      <section className="internet-controls">
        <div>
          <h1 class="title" id="internet">Internet Controls and Cyberspace</h1>
          <div className="line"></div>
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
          <div className="info-wrap">
            <InfoCard title="Tech Ethics" msg="fourth-par" className="card"/>
          </div>
        </div>
        <div className="img-container">
          <img src="https://innovationorigins.com/app/uploads/2021/04/technology-4256272_1920-1004x670.jpg"></img>
          <div className="ai-link">
            <a>Read the 2027 AI Commission Newsletter</a>
          </div>
        </div>
      </section>
      <section className="economy"> 
        <div>
          <h1 class="title">Economy And Finance</h1>
          <div className="line"></div>
            <h2 id="econ-descrip">Americans are navigating this new world of finance. See how <br></br>
            the administration is boosting economic growth.</h2>
        </div>
        <div className="vertical-econList">
          <div className="econ-panel">
            <div id="panel-1" className="econ-panel-detail" >
              <div className="econ-descript">
                <p>We have set up a People's Bank, in order to make money more accessible for others. This allows for <br></br>
                  easy transfer of money through federal stimulus, and makes sure that even in impoverished areas, money <br></br>
                  can be easily transferred and accessed.
                </p>
              </div>
              <div>
                <img src="https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2021/03/printing-money.jpg?quality=80&strip=all&ssl=1"></img>
              </div>
            </div>
            <div id="panel-2" className="econ-panel-detail" hidden >
              <div className="econ-descript">
                <p>Automation is a new challenge that is facing America. It will unleash a wave of displacement that
                  has been unseen for hundreds of years. The administration is actively finding ways to support workers
                  that would otherwise suffer during this massive increase in productivity. We need to reap the rewards
                  of our progress.
                </p>
              </div>
              <div>
                <img src="https://youmatter.world/app/uploads/sites/2/2019/11/robot-automation-jobs.jpg"></img>
              </div>
            </div>
            <div id="panel-3" className="econ-panel-detail" hidden >
              <div className="econ-descript">
                <p>Economic statistics are inportant for this administration's policies. We are actively cooperating
                  with the Bureau of Labor Statistics to put together a weekly report of this country's economic state. 
                  This will allow us to make better decisions. 
                </p>
              </div>
            </div>
            <div id="panel-4" className="econ-panel-detail" hidden >
              <div className="econ-descript">
                <p>Cryptocurrencies have become more ubiquitous in our society, which ends up posing its own
                  unique challenges. Look at how we are utilizing blockchain across this country to speed up transactions
                  and applications, while carefully monitoring the crypto space for any violations and theft.
                </p>
              </div>
              <div>
                <img src="https://wall-street.com/wp-content/uploads/2018/08/aug-1-header-pic.jpg"></img>
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
      <section className="budget">
        <h1 class="title">Budget Overview</h1>
        <div className="line"></div>
        <div className="chart">
          <PieChart />
        </div>

      </section>
  
    </div>
  );
}

export default App;
