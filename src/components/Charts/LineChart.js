import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
	const data = {
		labels: ['Jan', 'Feb', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Sales for 2020(M)',
				data: [3, 2, 4, 5, 1],
				borderColor: ['rgba(255,206,86,0.5)'],
				backgroundColor: ['rgba(255,206,86,0.5)'],
				pointBackgroundColor: ['rgba(255,206,86,0.5)'],
				pointBorderColor: ['rgba(255,206,86,0.5)'],
			},
			{
				label: 'Sales for 2019(M)',
				data: [2, 1, 2, 3, 4],
				borderColor: ['rgba(54,162,235,0.6)'],
				backgroundColor: ['rgba(54,162,235,0.6)'],
				pointBackgroundColor: ['rgba(54,162,235,0.6)'],
				pointBorderColor: ['rgba(54,162,235,0.6)'],
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'Line Chart',
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 6,
						stepSize: 1,
					},
				},
			],
		},
	};
	return <Line data={data} options={options} />;
};

export default LineChart;
