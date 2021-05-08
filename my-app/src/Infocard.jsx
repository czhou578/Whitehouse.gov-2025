import Paragraphs from './Paragraphs'

export default function Infocard(props) {
  return (
    <div>
      <div>
        <h1 className="header">{props.title}</h1>
        <div>
          <Paragraphs msg="first-par"/>
          <Paragraphs msg="second-par"/>

        </div>
      </div>
    </div>
  )
}