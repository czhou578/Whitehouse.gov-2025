import React from "react";
import { useGetCandidatesQuery } from "../services/fec";

const CandidateDisplay = (props) => {
  const { dataToQuery } = props;
  const { data, error, isLoading, isSuccess, isError } =
    useGetCandidatesQuery(dataToQuery);
  console.log(JSON.stringify(data, null, 2));
  return (
    <div>
      {isSuccess && data
        ? data.results.map((element, key) => {
            return (
              <div key={key} className="clink">
                <p>{element.name}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CandidateDisplay;
