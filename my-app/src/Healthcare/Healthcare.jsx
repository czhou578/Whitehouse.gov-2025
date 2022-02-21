import "./Infocard.scss";
import HorizonTab from "./HorizontalTab";

const styles = {
  display: "inline-block",
};

const cardStyle = {
  backgroundColor: "lightTan",
  height: "200px",
  width: "200px",
  borderRadius: "10px",
  color: "white",
  marginLeft: "50px",
};

const flex = {
  display: "flex",
  marginLeft: "500px",
};

const top = {
  position: "relative",
  top: "100px",
};

const cardDescript = {
  firstDescript:
    "Access to healthcare boomed in the past year. We were able to give access to around 60% of all people with no previous coverage",
  secondDescript:
    "Drug price negotiation has begun in Congress, with a comprehensive legislation expected to pass within a few months.",
};

const Card = ({ title, children }) => {
  return (
    <div className="health-card" style={cardStyle}>
      <h1>{title}</h1>
      <div className="descrip-container">{children}</div>
    </div>
  );
};

export default function Healthcare() {
  return (
    <div className="wrapper" style={styles}>
      <div className="displaycards" style={flex}>
        <Card
          title="Healthcare Access"
          children={cardDescript.firstDescript}
          style={cardStyle}
        ></Card>
        <Card
          title="Drug Pricing"
          children={cardDescript.secondDescript}
          style={cardStyle}
        ></Card>
      </div>
      <div className="list-wrap" style={top}>
        <HorizonTab />
      </div>
    </div>
  );
}
