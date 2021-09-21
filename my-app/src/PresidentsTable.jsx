import React, { useEffect, useState } from "react";

const getData = () => {
  return fetch('https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json').then((data) => data.json()).then((data) => {
    return data
  })
}

export default function PresidentsTable(props) {
  const [presidentData, setPresidentData] = useState([])
  const [tableHeaders, setTableHeaders] = useState([])

  useEffect(() => {
    getData().then((data) => {
      console.log(data)
      setTableHeaders(Object.keys(data[0]))
    })
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders.length != 0 ? tableHeaders.map((header, idx) => {
              return <th key={idx}>{header}</th>
            }) : null}
          </tr>
        </thead>
      </table>
    </div>
  )
}