import whiteHouse from '../../src/imgs/whiteHouse.svg'
import {BrowserRouter as Router, Link } from 'react-router-dom'
// import FPolicy from "./Foreign Policy/FPolicy";


export default function Taskbar() {

  const style = {
    color: 'darkGreen'
  }
  return (
    <div className="container">
      <div id="logo">
        <Link to="/" exact> 
          <img src={whiteHouse} alt=""/>
        </Link>
      </div>
      <ul>
        <li><a href="#" style={style}>Economy</a></li>
        <li><a href="#" style={style}>National Security</a></li>
        <li><a href="#" style={style}>Budget</a></li>
        <li><a href="#" style={style}>Immigration</a></li>
          <Link to="/coronavirus">
            <li><a href="#" style={style}>Coronavirus.gov</a></li>
          </Link>
      </ul>
    </div>
  )
}

