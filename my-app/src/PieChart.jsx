import React from 'react';
import { VictoryPie } from 'victory';

export default class PieChart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const msg = this.props.msg
    let chart;

    if (msg === "weight-chart") {
      chart = <VictoryPie
      height={400}
      width={600}
      standlone={false}
      style={{
          data: {
            fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
          },
          labels: {
            fontSize: 25, fill: "#c43a31"
          }
        }}
        colorScale={["tomato", "purple", "gold", "cyan", "navy" ]}
        data={[
          { x: "Underweight", y: 35 },
          { x: "Overweight", y: 40 },
          { x: "Normal", y: 55 }
        ]}
        // innerRadius={40}
      />

    } else if (msg === "height-chart") {
      chart = <VictoryPie
      height={400}
      width={600}
      standlone={false}
      style={{
          data: {
            fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
          },
          labels: {
            fontSize: 25, fill: "#c43a31"
          }
        }}
        colorScale={["tomato", "blue", "gold", "cyan", "navy" ]}
        data={[
          { x: "Below-Average", y: 15 },
          { x: "Average", y: 55 },
          { x: "Special", y: 30 }
        ]}
      />

    } else if (msg === "calorie-chart") {
      chart = <VictoryPie
      height={400}
      width={600}
      standlone={false}
      style={{
          data: {
            fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
          },
          labels: {
            fontSize: 20, fill: "#c43a31"
          }
        }}
        colorScale={["tomato", "green", "gold", "cyan", "navy" ]}
        data={[
          { x: "Malnourished", y: 10 },
          { x: "Normal", y: 70 },
          { x: "Dangerous", y: 45 }
        ]}
      />
    }

    return (
      <div>
        {chart}
      </div>
    )
  }
}