import React from "react";
import { Container } from "semantic-ui-react";
import { VictoryPie } from "victory";
import { PieChart, Pie } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
];

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: -15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: -8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: -2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

export default class BudgetPieChart extends React.Component {
  render() {
    return (
      <>
        <Container>
          <VictoryPie
            height={50}
            width={700}
            standlone={false}
            padding={{ top: -100, bottom: -90 }}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#c43a31",
                strokeWidth: 3,
              },
              labels: {
                fontSize: 16,
                fill: "#fffff",
              },
            }}
            colorScale={[
              "tomato",
              "orange",
              "gold",
              "navy",
              "red",
              "blue",
              "green",
            ]}
            data={[
              { x: "Military Spending", y: 35 },
              { x: "UBI", y: 40 },
              { x: "Social Security", y: 10 },
              { x: "Transit", y: 10 },
              { x: "Disposable", y: 5 },
              { x: "Infrastructure", y: 55 },
              { x: "Education", y: 45 },
              { x: "Healthcare", y: 45 },
            ]}
          />

          <Container>
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </Container>
        </Container>
        <Container>
          <RadialBarChart
            width={730}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              background
              clockWise={true}
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <Tooltip />
          </RadialBarChart>
        </Container>
      </>
    );
  }
}
