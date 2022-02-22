import React, { useEffect, useState } from "react";
import { Card, Icon, Form } from "semantic-ui-react";
import "./elections.css";

const Elections = () => {
  const [elections, setElections] = useState([]);
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [stateInitial, setStateInitial] = useState("")
  const [zipCode, setZipCode] = useState("")


  // useEffect(() => {
  //   async function fetchElection () {
  //     let data = await fetch(
  //       "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyA9Ffz_6qbDL4H4o8peICHb1MsG3r0YbZk"
  //     );
    
  //     let elections = await data.json();
    
  //     setElections(elections.elections);
  //   }

  //   fetchElection()
  // }, []);

  const sendRepData = () => {
    
  }

  return (
    <div className="electionWrap">
      <Card.Group itemsPerRow={2} className="cardGroup">
        {elections.map((element, key) => {
          return (
            <Card key={key}>
              <Card.Content header={element.name} />
              <Card.Content description={element.electionDay} />
              <Card.Content extra>
                <Icon name="user" />4 Friends Registered
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
      <div className="inputGroup">
        <h2>Find Your Local Representative</h2>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Address" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
            <Form.Input fluid label="City" placeholder="City"  onChange={(e) => setCity(e.target.value)}/>
            <Form.Input
              fluid
              label="State Initial"
              placeholder="State Initial"
              onChange={(e) => setStateInitial(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input fluid label="ZIP Code" placeholder="ZIP Code" className="zip" onChange={(e) => setZipCode(e.target.value)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    </div>
  );
};

export default Elections;
