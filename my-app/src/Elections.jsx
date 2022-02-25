import React, { useEffect, useState } from "react";
import { Card, Icon, Form } from "semantic-ui-react";
import "./elections.css";

const Elections = () => {
  const [elections, setElections] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateInitial, setStateInitial] = useState("");
  const [repData, setRepData] = useState();

  useEffect(() => {
    async function fetchElection() {
      let data = await fetch(
        "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyA9Ffz_6qbDL4H4o8peICHb1MsG3r0YbZk"
      );

      let elections = await data.json();

      setElections(elections.elections);
    }

    fetchElection();
  }, [elections.length === 0]);

  const sendRepData = async () => {
    let resultString = [];
    let urlSubString = ``;
    let addressSplitString = address.split(" ");
    let citySplitString = city.split(" ");

    resultString.push(...addressSplitString, ...citySplitString, stateInitial);

    for (let i = 0; i < resultString.length; i++) {
      if (i === resultString.length - 1) {
        urlSubString += `${resultString[i]}`;
        break;
      }

      urlSubString += `${resultString[i]}%20`;
    }

    // console.log(urlSubString);

    let url = `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA9Ffz_6qbDL4H4o8peICHb1MsG3r0YbZk&address=${urlSubString}`;

    const result = await fetch(url);
    const answer = await result.json();

    setRepData([...answer.officials[2], ...answer.officials[3]]);

    console.log(answer);
  };

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
            <Form.Input
              fluid
              label="Address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Form.Input
              fluid
              label="City"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <Form.Input
              fluid
              label="State Initial"
              placeholder="State Initial"
              onChange={(e) => setStateInitial(e.target.value)}
            />
          </Form.Group>
          <Form.Button onClick={() => sendRepData()}>Submit</Form.Button>
        </Form>
      </div>
    </div>
  );
};

export default Elections;
