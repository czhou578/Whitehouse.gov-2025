


export default function Infocard(props) {
  let paragraphs;

  if (props.msg === "first-par") {
    paragraphs = <p className="description"> See our actions against the Big Tech monopoly and how we are making
      them pay their fair share for the benefit of all.</p>
    
  } else if (props.msg === "second-par") {
    paragraphs = <p className="description">Privacy is paramount in the digital world. We are pouring in 
      resources to ensure the safety of online data for millions of Americans.</p>
  } else if (props.msg === "third-par") {
    paragraphs = <p className="description"></p>
  }
  return (

    <div>
      <div>
        <h1 className="header">{props.title}</h1>
        <div>
         {paragraphs}
        </div>
      </div>
    </div>
  )
}