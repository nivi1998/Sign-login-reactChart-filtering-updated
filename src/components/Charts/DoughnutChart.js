import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
	const data = {
		labels: ['Jan', 'Feb', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Sales for 2020(M)',
				data: [3, 2, 4, 5, 1],

				backgroundColor: [
					'rgba(255,99,132,1)',
					'rgba(255,205,86,1)',
					'rgba(55,162,235,1)',
					'rgba(255,159,64,1)',
					'rgba(153,106,255,1)',
				],
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'Doughnut Chart',
		},
	};
	return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
