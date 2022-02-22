import React, { useEffect, useState } from "react";

const Elections = () => {

  const [elections, setElections] = useState([]);

  useEffect(async () => {
    let data = await fetch(
      "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyA9Ffz_6qbDL4H4o8peICHb1MsG3r0YbZk"
    );
    
    let elections = await data.json()
    console.log(elections);

    setElections(elections.elections)
  }, [])

  return (
    <div>
      {elections.map((element, key) => {
        return (
          <div key={key}>
            <h4>{element.name}</h4>
            <h4>{element.electionDay}</h4>
          </div>
        )
      })}
    </div>
  );
};

export default Elections;
