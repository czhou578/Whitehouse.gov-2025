import React from 'react';
import './Infocard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Healthcare.css'
import HorizonTab from './HorizontalTab'

const styles = {
  backgroundColor: '#2836a1',
  display: 'inline-block'
}

export default function Healthcare() {

  // const labels = ["Insurance", "Medicare For All", "Lowering Drug Prices", "Stopping Addiction"]

  // const listItems = labels.map((label, index) => {
  //   return <li key={index}>{label}</li>
  // })

  return (
    <div className="wrapper" style={styles}>
      {/* Hello */}
      <div className="list-wrap">
        <HorizonTab />
        {/* <ul>
          {listItems}
        </ul> */}

      </div>

    </div>
  )
}