import whiteHouse from './imgs/whiteHouse.svg'

export default function Taskbar() {

  const style = {
    color: 'darkGreen'
  }
  return (
    <div className="container">
      <div id="logo">
        <img src={whiteHouse} alt=""/>
      </div>
      <ul>
        <li><a href="#" style={style}>Economy</a></li>
        <li><a href="#" style={style}>National Security</a></li>
        <li><a href="#" style={style}>Budget</a></li>
        <li><a href="#" style={style}>Immigration</a></li>
        <li><a href="#" style={style}>Coronavirus.gov</a></li>
      </ul>
    </div>
  )
}

