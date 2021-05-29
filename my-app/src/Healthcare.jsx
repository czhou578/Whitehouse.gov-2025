import React from 'react';
import './Infocard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Healthcare() {

  const labels = ["Insurance", "Medicare For All", "Lowering Drug Prices", "Stopping Addiction"]

  const listItems = labels.map((label) => {
    <li key={label.toString()}>
      {labels}
    </li>
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}