import Papa from "papaparse";
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "./covidTable.css";

const extractHeaders = (obj) => {
  return Object.keys(obj);
};

export default function CoronavirusDataTable(props) {
  const [data, setData] = useState([]);
  const [dataDeaths, setDataDeaths] = useState([]);
  const [dataCases, setDataCases] = useState([]); //contains api cases objects fetched
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    Papa.parse(
      "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv",
      {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function (results) {
          setHeaders(extractHeaders(results.data[0]));
          setData(results.data);
          setDataCases({
            labels: results.data.map((element) => element.date),
            datasets: [
              {
                label: "Covid Cases",
                data: results.data.map((element) => element.cases),
                backgroundColor: ["#ffbb11"],
              },
            ],
          });
          setDataDeaths({
            labels: results.data.map((element) => element.date),
            datasets: [
              {
                label: "Covid Deaths",
                data: results.data.map((element) => element.deaths),
                backgroundColor: ["#ff0000"],
              },
            ],
          });
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="graph">
        <Line
          height={50}
          width={120}
          data={dataCases}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 10,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div className="barGraph">
        <Bar height={50} width={90} data={dataDeaths} />
      </div>
      <div className="tableCovid">
        <table className="tableCovidData">
          {headers.length != 0
            ? headers.map((element, idx) => {
                return (
                  <th key={idx} className="covidTableTH">
                    <div> {element} </div>
                  </th>
                );
              })
            : null}

          <tbody>
            {data.length != 0
              ? data.map((element, idx) => {
                  return (
                    <tr key={idx}>
                      {Object.values(element).map((value, idx) => {
                        return <td key={idx}>{value}</td>;
                      })}
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
