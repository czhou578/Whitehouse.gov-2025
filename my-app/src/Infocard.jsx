import React from 'react';
import './Infocard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    maxHeight: 275,
    backgroundColor: 'lightGrey',
    padding: '5px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 10,
  },
});


export default function Infocard(props) {
  const classes = useStyles();
  let title = props.title
  let paragraphs;

  if (props.msg === "first-par") {
    return paragraphs = 
    <Card id="card-1">
      <CardContent>
        <h1 className="headers">Big Tech</h1>
        <p className="description"> See our actions against the Big Tech monopoly and how we are making
          them pay their fair share for the benefit of all.</p>
        </CardContent>
    </Card>
    
    
  } else if (props.msg === "second-par") {
    return paragraphs = 
    <Card id="card-2">
      <CardContent>
        <h1 className="headers">Privacy</h1>
        <p className="description">Privacy is paramount in the digital world. We are pouring in 
          resources to ensure the safety of online data for millions of Americans.</p>
      </CardContent>
    </Card>

  } else if (props.msg === "third-par") {
    return paragraphs = 
    <Card>
      <CardContent>
        <h1 className="headers">Cybersecurity</h1>
        <p className="description">Cybersecurity is a threat to millions of online users. Se how we are 
          working with the private sector to coordinate and defend this country's cyberspace. </p>      
      </CardContent>
    </Card>

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