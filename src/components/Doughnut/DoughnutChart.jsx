import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = ({ covidData }) => {
  const { active, deaths } = covidData;
  const data = {
    labels: ["Active", "Deaths"],
    datasets: [
      {
        data: [active, deaths],
        backgroundColor: ["#FFCE56", "#000"],
      },
    ],
  };
  const chartOptions = {
    title: {
      display: true,
      text: "COVID-19 Tracker",
      fontSize: 5,
    },
    responsive: true,
  };

  return (
    <div>
      <h2 className="doughnut_header">Doughnut Chart</h2>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
};

export default DoughnutChart;
