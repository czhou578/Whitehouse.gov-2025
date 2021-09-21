import "./App.css";
import "./Taskbar.css";
import "./Infocard.scss";
import Taskbar from "./Taskbar";
import InfoCard from "./Infocard";
import FPolicy from "./FPolicy";
import {useEffect} from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Speech from "./Speeches";
import BarChart from "./HBarChart";
import LineChart from "./HLineChart";
import ChartDescription from "./ChartDescription";
import PieChart from "./PieChart";
import BudgetPieChart from "./BudgetPieChart";
import CustomTheme from "./CustomTheme";
import { Grid, Rail, Segment} from 'semantic-ui-react'
import FPTable from "./FPTable";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PresidentsTable from "./PresidentsTable";
import video from "../src/videoYang.mp4"
// import video from './'

const fetchData = () => {
  return fetch('https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json').then((data) => data.json()).then((data) => {
    return data
  })
}

function App() {

  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
    })
  })

  function cycleEconPanels() {
    const econTopics = document.querySelectorAll(".econ-topics");
    const econPanelDetail = document.querySelectorAll(".econ-panel-detail");
    let firstClick;
    for (let i = 0; i < econTopics.length; i++) {
      firstClick = true;

      econTopics[i].addEventListener("click", function () {
        econPanelDetail[i].removeAttribute("hidden");
        econTopics[i].style.color = "blue";
        for (let j = 0; j < econTopics.length; j++) {
          if (j != i) {
            econTopics[j].style.color = "black";
            econPanelDetail[j].setAttribute("hidden", "true");
          }
        }
      });
    }
  }

  const inflationData = [
    {
      name: "2021",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2022",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2023",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2024",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "2025",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "2026",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "2027",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  useEffect(() => {
    cycleEconPanels();
  });

  return (
    <Router>
      <Switch>
        <Route path="/" exact> 
          <div id="body">
            <Taskbar />
            <section className="cover-splash">
              <div className="cover-img">
                <img src="https://i2.wp.com/media.nbcboston.com/2019/09/tlmd-efe-andrew-yang-matematics.jpg?fit=900%2C506&quality=85&resize=1200%2C675&strip=all&ssl=1"></img>
              </div>
              <div className="head-title">
                Welcome to the <br></br> <br></br> 2027 American Scorecard
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
                <h1 className="title" id="internet">
                  Internet Controls and Cyberspace
                </h1>
                <div className="line"></div>
              </div>
              <div className="display-cards">
                <div className="info-wrap">
                  <div className="info">
                    <InfoCard title="Big Tech" msg="first-par" className="card" />
                  </div>
                </div>
                <div className="info-wrap">
                  <InfoCard
                    title="Privacy Concerns"
                    msg="second-par"
                    className="card"
                  />
                </div>
                <div className="info-wrap">
                  <InfoCard title="Cybersecurity" msg="third-par" className="card" />
                </div>
                <div className="info-wrap">
                  <InfoCard title="Tech Ethics" msg="fourth-par" className="card" />
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
              <div className="econ-wrap">
                <div>
                  <h1 className="title">Economy And Finance</h1>
                  <div className="line"></div>
                </div>
                <div className="chart-wrapper">
                  <div className="barChart">
                    <BarChart />
                    <ChartDescription
                      title={"Healthy Growth"}
                      description={`Our economy is growing and producing new
                      jobs year by year`}
                      className="chart-descrip"
                    />
                  </div>
                  <div className="lineChart">
                    <LineChart />
                    <ChartDescription
                      title={"Inflation Chart"}
                      description={`We have met our annual inflation goals thanks to
                      effective cooperation with the Federal Reserve`}
                      id="line-descrip"
                    />
                  </div>
                  <div className="customChart">
                    <CustomTheme />
                    <ChartDescription
                      title={"Stock Market"}
                      description={`The stock markets are at record highs, thanks to
                      our sustainable and circular flow of money`}
                      id="line-descrip"
                    />
                  </div>
                </div>
                <div className="vertical-econList">
                  <div className="econ-panel">
                    <div id="panel-1" className="econ-panel-detail">
                      <div className="econ-descript">
                        <div>
                          <img src="https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2021/03/printing-money.jpg?quality=80&strip=all&ssl=1"></img>
                        </div>
                        <p>
                          We have set up a People's Bank, in order to make money more
                          accessible for others. This allows for <br></br>
                          easy transfer of money through federal stimulus, and makes
                          sure that even in impoverished areas, money <br></br>
                          can be easily transferred and accessed.
                        </p>
                      </div>
                    </div>
                    <div id="panel-2" className="econ-panel-detail" hidden>
                      <div className="econ-descript">
                        <div>
                          <img src="https://youmatter.world/app/uploads/sites/2/2019/11/robot-automation-jobs.jpg"></img>
                        </div>
                        <p>
                          Automation is a new challenge that is facing America. It
                          will unleash a wave of displacement that has been unseen for
                          hundreds of years. The administration is actively finding
                          ways to support workers that would otherwise suffer during
                          this massive increase in productivity. We need to reap the
                          rewards of our progress.
                        </p>
                      </div>
                    </div>
                    <div id="panel-3" className="econ-panel-detail" hidden>
                      <div className="econ-descript">
                        <p>
                          Economic statistics are inportant for this administration's
                          policies. We are actively cooperating with the Bureau of
                          Labor Statistics to put together a weekly report of this
                          country's economic state. This will allow us to make better
                          decisions.
                        </p>
                      </div>
                    </div>
                    <div id="panel-4" className="econ-panel-detail" hidden>
                      <div className="econ-descript">
                        <div>
                          <img src="https://wall-street.com/wp-content/uploads/2018/08/aug-1-header-pic.jpg"></img>
                        </div>
                        <p>
                          Cryptocurrencies have become more ubiquitous in our society,
                          which ends up posing its own unique challenges. Look at how
                          we are utilizing blockchain across this country to speed up
                          transactions and applications, while carefully monitoring
                          the crypto space for any violations and theft.
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
              <h1 className="title">Health and Fitness</h1>
              <div className="line"></div>
              <div id="three-column">
                <Grid centered columns={3}>
                  <Grid.Column>
                    <Segment>
                    Eight years ago, I had just sold my education company and married my wife, Evelyn. The country was struggling through the aftermath of the financial crisis, so I made it my mission to bring jobs back to the communities that were hit hardest. I saw firsthand how many of our children didn’t see economic opportunity at home and were moving away to the same cities. That’s why I founded Venture for America (VFA), an organization dedicated to rejuvenating local economies. By helping entrepreneurs create jobs in cities like Baltimore, Detroit, Pittsburgh, and Cleveland, we could create strong economies throughout the country and give children a reason to stay.

      In its first year, VFA trained 40 Fellows; by 2017, more than 500 VFA Fellows and alumni had launched dozens of companies and helped create thousands of jobs across the country. The Obama White House even named me a Champion of Change in 2012 and a Presidential Ambassador for Global Entrepreneurship in 2015.

      Despite the success I saw with VFA, as I worked in these cities, I came to a terrible realization: automation is destroying jobs, and entire regions are being left behind. For years, I believed new business formation was the answer—if we could train a new generation of entrepreneurs and create the right jobs in the right places, we could stop the downward spiral of growing income inequality, poverty, unemployment, and hopelessness.
                      <Rail dividing position="left">
                        <Segment>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          
                        </Segment>
                      </Rail>

                      <Rail dividing position="right">
                        <Segment>
                        Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
                        </Segment>
                      </Rail>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </div>
              <div className="cross-wrap-outer">
                <div className="cross-wrap">
                  <span> National Weight Chart </span>
                  <PieChart msg="weight-chart"/>
                </div>
                <div className="cross-wrap">
                  <span> National Height Chart </span>
                  <PieChart msg="height-chart"/>
                </div>
                <div className="cross-wrap">
                  <span> Calorie Intake Chart </span>
                  <PieChart msg="calorie-chart"/>
                </div>
              </div>
            </section>
            <section className="foreign-policy">
                <h1 className="title">Foreign Policy / Cooperation</h1>
                <div className="line"></div>
                <div className="fop-pic">
                  <img src="https://uscpublicdiplomacy.org/sites/default/files/styles/blog-785x482/public/uploads/iStock-1265704329.jpeg.jpg?itok=04LhN-8w"></img>
                </div>
                <div className="card-grid">
                  <FPolicy />
                  <FPolicy />
                </div>
                <div className="ftable">
                  <FPTable />
                </div>
                <div className="livestream">
                  <video height="240" width="320" controls autoPlay>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
            </section>
            <section className="budget">
              <div>
                <h1 className="title">Budget Overview</h1>
                <div className="line"></div>
              </div>
              <div className="chart">
                <BudgetPieChart />
              </div>
            </section>
            <section>
              <div className="linkToPresidents">
                <Link to="/presTable"> 
                  <a className="link-1">Check out All Previous Presidents</a>
                </Link>
              </div>
            </section>
          </div>
        </Route>
        <Route path="/presTable">
          <div> 
            <Taskbar />
          </div>
            <section className="dataTable">
              <h2 className="presHeader"> List of Presidents </h2>
              <div>
                <Route path="/presTable" component={PresidentsTable} />
              </div>
            </section>
              <div className="back">
                <Link to="/">
                <a className="link-1">Back to Main Page</a>
                </Link>
              </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
