import React, { PureComponent } from 'react';
import { VictoryPie } from 'victory';


export default class PieChart extends React.Component {
  render() {
    return (
      <VictoryPie
      height={400}
      width={400}
      standlone={false}
      padding={{ top: -200, bottom: -90 }}
      style={{
          data: {
            fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
          },
          labels: {
            fontSize: 25, fill: "#c43a31"
          }
        }}
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={[
          { x: "Cats", y: 35 },
          { x: "Dogs", y: 40 },
          { x: "Birds", y: 55 }
        ]}
      />

    )
  }
}