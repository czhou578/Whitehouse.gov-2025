import './Infocard.css'


export default function Infocard(props) {

  let title = props.title
  let paragraphs;

  if (props.msg === "first-par") {
    return paragraphs = <p className="description"> See our actions against the Big Tech monopoly and how we are making
      them pay their fair share for the benefit of all.</p>
    
  } else if (props.msg === "second-par") {
    return paragraphs = <p className="description">Privacy is paramount in the digital world. We are pouring in 
      resources to ensure the safety of online data for millions of Americans.</p>

  } else if (props.msg === "third-par") {
    return paragraphs = <p className="description">Cybersecurity is a threat to millions of online users. Se how we are 
      working with the private sector to coordinate and defend this country's cyberspace. </p>
  }

  return (
    <div>
      <div className="card-contain">
        <div>
         {paragraphs}
        </div>
      </div>
    </div>
  )
}