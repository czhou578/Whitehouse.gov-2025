import { useEffect, useState } from "react";
import Papa from "papaparse"
import './covidTable.css'

const extractHeaders = (obj) => {
  return Object.keys(obj)
}

export default function CoronavirusDataTable(props) {
  const [data, setData] = useState([])
  const [headers, setHeaders] = useState([])

  useEffect(() => {
    Papa.parse('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv', {
      download: true,
      dynamicTyping: true,
      header: true,
      complete: function(results) {
        setHeaders(extractHeaders(results.data[0]))
        setData(results.data)
      }
    })
  }, [])

  return (
    <div>
      <table>
        <thead>
          {headers.length != 0 ? headers.map((element, idx) => {
            return <th key={idx}>{element}</th>
          }) : null}
        </thead>
        <tbody>
            {data.length != 0 ? data.map((element, idx) => {
              return <tr key={idx}>
                {Object.values(element).map((value, idx) => {
                  return <td key={idx}>{value}</td>
                })}
              </tr>
            }) : null}
        </tbody>
      </table>
    </div>
  )
}