import React, { PureComponent } from 'react';
import { VictoryPie } from 'victory';


export default class BudgetPieChart extends React.Component {
  render() {
    return (
      <VictoryPie
      height={50}
      width={700}
      standlone={false}
      padding={{ top: -100, bottom: -90 }}
      style={{
          data: {
            fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
          },
          labels: {
            fontSize: 16, fill: "#fffff"
          }
        }}
        colorScale={["tomato", "orange", "gold", "navy", "red", "blue", "green" ]}
        data={[
          { x: "Military Spending", y: 35 },
          { x: "UBI", y: 40 },
          { x: "Social Security", y: 10 },
          { x: "Transit", y: 10 },
          { x: "Disposable", y: 5 },
          { x: "Infrastructure", y: 55 },
          { x: "Education", y: 45 },
          { x: "Healthcare", y: 45 }

        ]}
      />

    )
  }
}