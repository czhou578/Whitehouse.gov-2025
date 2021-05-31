import React, { useState } from 'react';
import './Infocard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';


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

  shadow: {
    boxShadow: '15px'
  }
});

export default function Infocard(props) {
  const classes = useStyles();
  let title = props.title
  let paragraphs;

  const [level, setLevel] = useState(0)


  if (props.msg === "first-par") {
    return paragraphs = 
    <Card id="card-1" onMouseOver={() => {setLevel(level + 9)}} onMouseOut={() => {setLevel(level - 9)}} zDepth={level}>
      <CardContent>
        <h1 className="headers">Big Tech</h1>
        <p className="description"> See our actions against the Big Tech monopoly and how we are making
          them pay their fair share for the benefit of all.</p>
        </CardContent>
    </Card>
    
    
  } else if (props.msg === "second-par") {
    return paragraphs = 
    <Box onMouseOver={classes.shadow}>
      <Card id="card-2" onMouseOver={() => {setLevel(level + 19)}} onMouseOut={() => {setLevel(level - 7)}}>
        <CardContent>
          <h1 className="headers">Privacy</h1>
          <p className="description">Privacy is paramount in the digital world. We are pouring in 
            resources to ensure the safety of online data for millions of Americans.</p>
        </CardContent>
      </Card>
    </Box>

  } else if (props.msg === "third-par") {
    return paragraphs = 
    <Card id="card-3" onMouseOver={() => {setLevel(level + 19)}} onMouseOut={() => {setLevel(level - 7)}}>
      <CardContent>
        <h1 className="headers">Cybersecurity</h1>
        <p className="description">Cybersecurity is a threat to millions of online users. Se how we are 
          working with the private sector to coordinate and defend this country's cyberspace. </p>      
      </CardContent>
    </Card>

  } else if (props.msg === "fourth-par") {
    return paragraphs = 
    <Card id="card-3" onMouseOver={() => {setLevel(level + 19)}} onMouseOut={() => {setLevel(level - 7)}}>
      <CardContent>
        <h1 className="headers">Tech Ethics</h1>
        <p className="description"> Ethical issues is paramount to building a fair and free cyberspace.
          This administration has put together a special council to judge ethics in the tech world. </p>      
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