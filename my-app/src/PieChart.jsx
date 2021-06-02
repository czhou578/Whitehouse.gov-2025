import React, { Component } from 'react';
import CanvasJSReact from './react-canvasjs-chart-samples/src/assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "National Budget 2027"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Infrastructure" },
					{ y: 29, label: "Education" },
					{ y: 9, label: "Healthcare" },
					{ y: 25, label: "Military" },
					{ y: 19, label: "STEM R&D" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;