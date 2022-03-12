import React from "react";
import { useGetCandidatesQuery } from "../services/fec";

const CandidateDisplay = (props) => {
  const { dataToQuery } = props
  const { data, error, isLoading, isSuccess, isError } = useGetCandidatesQuery(dataToQuery);
  console.log(JSON.stringify(data, null, 2));
  return (
    <div>
      
    </div>
  )

}

export default CandidateDisplay