import React, { PureComponent } from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from 'victory';

export default function HLineChart(props) {
  return (

  <VictoryChart
    theme={VictoryTheme.material}
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}
  >
    <VictoryLine
      style={{
        data: { stroke: "#c43a31" },
        parent: { border: "1px solid #ccc"}
      }}
      data={[
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 7 }
      ]}
    />
  </VictoryChart>
  )
}

