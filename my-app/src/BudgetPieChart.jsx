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
            fontSize: 16, fill: "#c43a31"
          }
        }}
        colorScale={["tomato", "orange", "gold", "cyan", "navy", "red", "blue", "green" ]}
        data={[
          { x: "Underweight", y: 35 },
          { x: "Overweight", y: 40 },
          { x: "Normal", y: 10 },
          { x: "Normal2", y: 10 },
          { x: "Normal3", y: 5 },
          { x: "Normal4", y: 55 },
          { x: "Normal5", y: 45 },
          { x: "Normal6", y: 45 }

        ]}
      />

    )
  }
}