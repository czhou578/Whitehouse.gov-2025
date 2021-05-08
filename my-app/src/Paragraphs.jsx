


// const paragraph1 = () => <p>This is a very small paragraph</p>

export default function Paragraphs(props) {
  if (props.msg === "first-par") {
    console.log('true')
    return (
      <p>This is passed </p>
    )
  } else if (props.msg === "second-par") {
    console.log('true22')
    return (
      <p>This is passed twice</p>
    )
  }

}