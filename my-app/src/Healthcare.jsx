import React from 'react';
import './Infocard.css'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import './Healthcare.css'
import HorizonTab from './HorizontalTab'

const styles = {
  // backgroundColor: '#2836a1',
  display: 'inline-block',
}

const cardStyle = {
  backgroundColor: 'lightTan',
  height: '200px',
  width: '200px',
  borderRadius: '10px'

}

const cardDescript = {
  firstDescript: "Access to healthcare boomed in the past year. We were able to give access to around 60% of all people with no previous coverage",
  secondDescript: "Drug price negotiation has begun in Congress, with a comprehensive legislation expected to pass within a few months."
}

const Card = ({title, children}) => {
  return (
    <div className="health-card" style={cardStyle}>
      <h1>{title}</h1>
      <div className="descrip-container">
        {children}
      </div>
    </div>
  )
}



export default function Healthcare() {

  return (
    <div className="wrapper" style={styles}>
      <div className="displaycards">
        <Card title="Healthcare Access" children={cardDescript.firstDescript}></Card>
        <Card title="Drug Pricing" children={cardDescript.secondDescript}></Card>
      </div>
      <div className="list-wrap">
        <HorizonTab />
        {/* <ul>
          {listItems}
        </ul> */}

      </div>

    </div>
  )
}