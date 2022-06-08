import { Link } from "react-router-dom";
import whiteHouse from "../../src/imgs/whiteHouse.svg";

export default function Taskbar() {
  const style = {
    color: "darkGreen",
  };
  return (
    <div className="container">
      <div id="logo">
        <Link to="/" exact>
          <img src={whiteHouse} alt="" />
        </Link>
      </div>
      <ul>
        <Link to="/elections">
          <li>
            <a href="#" style={style}>
              Current Elections
            </a>
          </li>
        </Link>
        <li>
          <a href="#economy" style={style}>
            Economy
          </a>
        </li>
        <li>
          <a href="#fp" style={style}>
            National Security
          </a>
        </li>
        <li>
          <a href="#budget" style={style}>
            Budget
          </a>
        </li>
        <li>
          <a href="#healthcare" style={style}>
            Healthcare
          </a>
        </li>
        <Link to="/coronavirus">
          <li>
            <a href="#" style={style}>
              Coronavirus.gov
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
}
