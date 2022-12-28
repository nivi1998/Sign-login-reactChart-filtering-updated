import React from 'react';
import LineChart from './LineChart';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import PieChart from './pieChart';
import AreaChart from './AreaChart';
import SpiderChart from './SpiderChart';
import { PlotterChart } from './PlotterChart';

Chart.register(CategoryScale);

const index = () => {
  return (
    <div className="chart mt-2">
      <div className="setPattern">
        <span className="headText">Line Chart</span>
        <div className="sub-container">
          <LineChart />
        </div>
        <span className="headText">Bar Chart</span>
        <div className="sub-container">
          <BarChart />
        </div>
        <span className="headText">Doughnut Chart</span>
        <div className="sub-container">
          <DoughnutChart />
        </div>
        <span className="headText">Pie Chart</span>
        <div className="sub-container">
          <PieChart />
        </div>

        <span className="headText">Area Chart</span>
        <div className="sub-container">
          <AreaChart />
        </div>

        <span className="headText">Spider Chart</span>
        <div className="sub-container">
          <SpiderChart />
        </div>

        <span className="headText">Plotter Chart</span>
        <div className="sub-container">
          <PlotterChart />
        </div>
      </div>
    </div>
  );
};

export default index;
