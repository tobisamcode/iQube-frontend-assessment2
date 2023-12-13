import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = ({ covidData }) => {
  const { confirmed, active, deaths } = covidData;
  const data = {
    labels: ["Confirmed", "Active", "Deaths"],
    datasets: [
      {
        data: [confirmed, active, deaths],
        backgroundColor: ["#FFCE56", "#36a2eb", , "#000"],
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
