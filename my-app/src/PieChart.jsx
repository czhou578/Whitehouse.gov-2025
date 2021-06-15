import React, { PureComponent } from 'react';
import { VictoryPie } from 'victory';


export default class PieChart extends React.Component {
  render() {
    return (
      <VictoryPie
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