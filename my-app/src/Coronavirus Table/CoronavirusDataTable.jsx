import { useEffect, useState } from "react";
import Papa from "papaparse"
import './covidTable.css'
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

const extractHeaders = (obj) => {
  return Object.keys(obj)
}

const state = {
  labels: ['Jan 2020', 'Feb 2020', 'Mar 2020', 'April 2020', 'June 2020', 'July 2020', 'Aug 2020', 'Sept 2020', 'Oct 2020', 'Nov 2020',
          'Dec 2020', 'Jan 2021', 'Feb 2021', 'Mar 2021', 'April 2021', 'May 2021', 'June 2021', 'July 2021', 'Aug 2021', 'Sept 2021'],
  datasets: [
    {
      label: 'TestGraph',
      fill: false,
            lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
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
      <div>
        <Line 
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <table>
          {headers.length != 0 ? headers.map((element, idx) => {
            return <th key={idx}><div> {element} </div></th>
          }) : null}

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