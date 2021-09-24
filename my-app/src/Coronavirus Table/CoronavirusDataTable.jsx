import { useEffect } from "react";
import Papa from "papaparse"

const readInData = () => {
  Papa.parse('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv', {
    download: true,
    dynamicTyping: true,
    header: true,
    complete: function(results) {
      console.log(results.data);
      return results.data
    }
  })
}

export default function CoronavirusDataTable(props) {
  useEffect(() => {
    readInData()
  }, [])

  return (
    <div>
      <table>
        <thead>

        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}