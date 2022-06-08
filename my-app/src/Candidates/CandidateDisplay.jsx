import React from "react";
import { useGetCandidatesQuery } from "../services/fec";
import CandidateFinanceModal from "./CandidateFinanceModal";
import "./display.css";

const CandidateDisplay = (props) => {
  const { dataToQuery } = props;
  const { data, error, isLoading, isSuccess, isError } =
    useGetCandidatesQuery(dataToQuery);
  const [open, setOpen] = React.useState(false);

  console.log(JSON.stringify(data, null, 2));

  return (
    <div className="cdisplayWrapper">
      {isLoading && <h3>...Loading</h3>}
      {isSuccess && data
        ? data.results.map((element, key) => {
            return (
              <div key={key} className="clink">
                <a onClick={() => setOpen(true)}> {element.name}</a>
                <CandidateFinanceModal
                  name={element.name}
                  candidate_id={element.candidate_id}
                  setOpen={setOpen}
                  open={open}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CandidateDisplay;
