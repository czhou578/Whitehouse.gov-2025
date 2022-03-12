import { useState } from "react";
import { Button, Header, Modal, Dropdown, Input } from "semantic-ui-react";
import { useGetCandidatesQuery } from "../services/fec";
import CandidateDisplay from "./CandidateDisplay";

const activeOptions = [
  {
    key: "false",
    text: "false",
    value: "false",
  },
  {
    key: "true",
    text: "true",
    value: "true",
  },
];

export default function Candidates(props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [nullVal, setNullVal] = useState(null);
  const [stateAbbv, setStateAbbv] = useState(null);

  return (
    <div>
      <h2>Find Candidate Filings</h2>
      <p>
        This section allows you to search for candidates who are <br />
        running for a national position and examine their campaign finance{" "}
        <br />
        filings.
      </p>
      {active && nullVal && stateAbbv && !open ? (
        <CandidateDisplay
          dataToQuery={{
            active: active,
            nullVal: nullVal,
            stateAbbv: stateAbbv,
          }}
        />
      ) : null}
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Search Candidate</Button>}
      >
        <Modal.Header>Search Candidate</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Is Active Candidate</Header>
            <Dropdown
              placeholder="Select"
              fluid
              selection
              options={activeOptions}
              onChange={(e, value) => setActive(value.value)}
            />
            <Header>State Abbreviation</Header>
            <Input
              focus
              placeholder="Abbrev."
              onChange={(e) => setStateAbbv(e.target.value)}
            />
            <Header>Hide Null Values</Header>
            <Dropdown
              placeholder="Select"
              fluid
              selection
              options={activeOptions}
              onChange={(e, value) => setNullVal(value.value)}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button> */}
          <Button
            content="Search"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
