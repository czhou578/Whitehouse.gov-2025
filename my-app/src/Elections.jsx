import React, { useEffect, useState } from "react";
import { Card, Icon, Container, Form } from "semantic-ui-react";
import "./elections.css";

const Elections = () => {
  const [elections, setElections] = useState([]);

  useEffect(async () => {
    let data = await fetch(
      "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyA9Ffz_6qbDL4H4o8peICHb1MsG3r0YbZk"
    );

    let elections = await data.json();
    console.log(elections);

    setElections(elections.elections);
  }, []);

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
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
            <Form.Input
              fluid
              label="State Initial"
              placeholder="State Initial"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input fluid label="ZIP Code" placeholder="ZIP Code" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    </div>
  );
};

export default Elections;
