import React from 'react';
import { ResponsivePie } from '@nivo/pie'

const PieChart = ({ cases, active, deaths, recovered }) => {

	const stringToInt = variable => {
		if (typeof(variable) === "string") {
			return parseInt(variable.split(',').join(''));
		}
		return variable;
	}

	const [ casesInt, activeInt, deathsInt, recoveredInt ] = [
		stringToInt(cases),
		stringToInt(active),
		stringToInt(deaths),
		stringToInt(recovered)
	];

	const NumberToPercentage = number => Math.round(number/casesInt * 100);

	return(
		<ResponsivePie
			data={
				[
					{
						"id": `Active (${NumberToPercentage(activeInt)}%)`,
						"label": "Active",
						"value": activeInt,
						"color": "hsl(0, 59%, 45%)"
					},
					{
						"id": `Deaths (${NumberToPercentage(deathsInt)}%)`,
						"label": "Deaths",
						"value": deathsInt,
						"color": "hsl(0, 0%, 0%)"
					},
					{
						"id": `Recovered (${NumberToPercentage(recoveredInt)}%)`,
						"label": "Recovered",
						"value": recoveredInt,
						"color": "hsl(123, 69%, 30%)"
					}
				]
			}
			margin={{ top: 80, right: 125, bottom: 80, left: 125 }}
			innerRadius={0}
			padAngle={0.7}
			cornerRadius={3}
			colors={{ scheme: 'blues' }}
			borderWidth={1}
			borderColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
			radialLabelsSkipAngle={20}
			radialLabelsTextXOffset={6}
			radialLabelsTextColor="#333333"
			radialLabelsLinkOffset={0}
			radialLabelsLinkDiagonalLength={16}
			radialLabelsLinkHorizontalLength={24}
			radialLabelsLinkStrokeWidth={1}
			radialLabelsLinkColor={{ from: 'color' }}
			slicesLabelsSkipAngle={20}
			slicesLabelsTextColor="#333333"
			animate={true}
			motionStiffness={90}
			motionDamping={15}
		/>
	);
};

export default PieChart;