import React from 'react';
import './Infocard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Healthcare.css'
import HorizonTab from './HorizontalTab'

const styles = {
  // backgroundColor: '#2836a1',
  display: 'inline-block'
}

export default function Healthcare() {

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