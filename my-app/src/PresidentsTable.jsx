import React, { useEffect, useState } from "react";
import './PresidentsTable.css'
import Button from '@mui/material/Button';

const getData = () => {
  return fetch('https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json').then((data) => data.json()).then((data) => {
    return data
  })
}

export default function PresidentsTable(props) {
  const [presidentData, setPresidentData] = useState([])
  const [tableHeaders, setTableHeaders] = useState([])
  const [inputFieldValue, setinputFieldValue] = useState('')

  useEffect(() => {
    getData().then((data) => {
      console.log(data)
      setTableHeaders(Object.keys(data[0]))
      setPresidentData(data)
    })
  }, [])

  const returnFilteredRows = (row, filterKey) => {
    return row.filter((row) => {
      return Object.values(row).some(s => ("" + s).toLowerCase().includes(filterKey))
    })
  }

  return (
    <div className="containerBox">
      <div className="inputContain"> 
        <input type="text" placeholder="Search Names...." onChange={(e) => {
          setinputFieldValue(e.target.value)
        }} />
        {/* <Button variant="contained" onClick={(e) => setinputFieldValue(e.target.value)}>Search</Button> */}
      </div>
    <div className="containerTable">
      <table>
        <thead>
          <tr>
            {tableHeaders.length != 0 ? tableHeaders.map((header, idx) => {
              return <th key={idx}>{header}</th>
            }) : null}
          </tr>
        </thead>
        <tbody>
          {presidentData.length != 0 ? returnFilteredRows(presidentData, inputFieldValue).map((element, idx) => {
            return <tr key={idx}>
              {Object.values(element).map((element, idx) => {
                if (element == null) {
                  return <td key={idx}>-</td>
                }
                return <td key={idx}>{element}</td>
              })}
            </tr>
          }) : null}
        </tbody>
      </table>
    </div>

    </div>
  )
}