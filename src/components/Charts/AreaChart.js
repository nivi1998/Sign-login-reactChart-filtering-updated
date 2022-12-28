import React from 'react';

import { Line } from 'react-chartjs-2';

export const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Chart.js Line Chart',
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [12, 2, 19, 5, 1],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function AreaChart() {
  return <Line options={options} data={data} />;
}
