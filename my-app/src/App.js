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
import Speech from './Speeches'
import BarChart from './HBarChart'
import LineChart from './HLineChart'
import ChartDescription from './ChartDescription'


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

  const inflationData = [
    {
      name: '2021',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2022',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '2023',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '2024',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '2025',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '2026',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '2027',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const YAxis = [0, 10]



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
        <div>
          <img src="https://media.beam.usnews.com/bd/d9/9daaf73b47b8a7d1e6189550a7e2/andrewyang-002.JPG"></img>
        </div>
        <div className="excerpts">
          <Speech />
        </div>
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
        <div class="econ-wrap">
          <div>
            <h1 class="title">Economy And Finance</h1>
            <div className="line"></div>
          </div>
          <div className="chart-wrapper">
            <div className="barChart">
              <BarChart />
              <ChartDescription title={"Healthy"} description={
                `demo`
              } className="chart-descrip"/>
            </div>
            <div className="lineChart">
              <LineChart data={inflationData} yVal={YAxis}/>
              <ChartDescription title={"Inflation Chart"} description={
                `We have met our annual inflation goals thanks to
                effective cooperation with the Federal Reserve`
              }/>
            </div>
          </div>
          <div className="vertical-econList">
            <div className="econ-panel">
              <div id="panel-1" className="econ-panel-detail" >
                <div className="econ-descript">
                  <div>
                    <img src="https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2021/03/printing-money.jpg?quality=80&strip=all&ssl=1"></img>
                  </div>
                  <p>We have set up a People's Bank, in order to make money more accessible for others. This allows for <br></br>
                    easy transfer of money through federal stimulus, and makes sure that even in impoverished areas, money <br></br>
                    can be easily transferred and accessed.
                  </p>
                </div>
              </div>
              <div id="panel-2" className="econ-panel-detail" hidden >
                <div className="econ-descript">
                  <div>
                    <img src="https://youmatter.world/app/uploads/sites/2/2019/11/robot-automation-jobs.jpg"></img>
                  </div>
                  <p>Automation is a new challenge that is facing America. It will unleash a wave of displacement that
                    has been unseen for hundreds of years. The administration is actively finding ways to support workers
                    that would otherwise suffer during this massive increase in productivity. We need to reap the rewards
                    of our progress.
                  </p>
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
                  <div>
                    <img src="https://wall-street.com/wp-content/uploads/2018/08/aug-1-header-pic.jpg"></img>
                  </div>
                  <p>Cryptocurrencies have become more ubiquitous in our society, which ends up posing its own
                    unique challenges. Look at how we are utilizing blockchain across this country to speed up transactions
                    and applications, while carefully monitoring the crypto space for any violations and theft.
                  </p>
                </div>
              </div>

            </div>
            <h5 className="econ-topics">People's Bank</h5> <br></br>
            <h5 className="econ-topics">Automation Progress </h5> <br></br>
            <h5 className="econ-topics">Important Statistics</h5> <br></br>
            <h5 className="econ-topics">Cryptocurrencies</h5>
          </div>
        </div>
      </section>
      <section className="healthcare">
        <h1 class="title">Health and Fitness</h1>
        <div className="line"></div>

        <InfoCard />

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
        </div>

      </section>
  
    </div>
  );
}

export default App;
