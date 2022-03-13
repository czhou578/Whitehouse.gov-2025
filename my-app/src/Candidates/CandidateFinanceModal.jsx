import { Button, Header, Modal, Dropdown, Input } from "semantic-ui-react";
import React from "react";
import { useFinancesQuery } from "../services/fec";
import './finance.css'

const CandidateFinanceModal = (props) => {
  const { setOpen, open, name, candidate_id } = props;
  console.log(candidate_id);
  const { data, isLoading, isSuccess, error, isError } =
    useFinancesQuery(candidate_id);
  console.log(data);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Finances</Button>}
      >
        <Modal.Content>
          <Modal.Description className="Fdescription">
            <Header className="header">Candidate Finances for: {name}</Header>
            {isSuccess && data.results.length > 0 ? (
              <div>
                <div className="contributions">
                  <h2>Operating Expenditures</h2>
                  <p>${data.results[0].operating_expenditures}</p>
                </div>
                <div className="contributions">
                  <h2>PAC contributions</h2>
                  <p>
                    ${data.results[0].political_party_committee_contributions}
                  </p>
                </div>
                <div className="contributions">
                  <h2>Individual Contributions</h2>
                  <p>${data.results[0].individual_contributions}</p>
                </div>
              </div>
            ) : null}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Close"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CandidateFinanceModal;
