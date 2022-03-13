import { useGetCandidatesQuery } from "../services/fec";
import { Button, Header, Modal, Dropdown, Input } from "semantic-ui-react";
import "./display.css";

const CandidateDisplay = (props) => {
  const { dataToQuery } = props;
  const { data, error, isLoading, isSuccess, isError } =
    useGetCandidatesQuery(dataToQuery);
  console.log(JSON.stringify(data, null, 2));

  return (
    <div className="cdisplayWrapper">
      {isLoading && <h3>...Loading</h3>}
      {isSuccess && data
        ? data.results.map((element, key) => {
            return (
              <div key={key} className="clink">
                <a> {element.candidate_id} {element.name}</a>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CandidateDisplay;
