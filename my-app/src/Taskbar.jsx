import whiteHouse from './imgs/whiteHouse.svg'

export default function Taskbar() {
  return (
    <div>
      <div id="logo">
        <img src={whiteHouse} alt=""/>
      </div>
      <ul>
        <li><a href="#">Economy</a></li>
        <li><a href="#">National Security</a></li>
        <li><a href="#">Budget</a></li>
        <li><a href="#">Immigration</a></li>
        <li><a href="#">Coronavirus.gov</a></li>
      </ul>
    </div>
  )
}

