import React from "react";
import "./InfoCardStyles.css";

import diff from "../../assets/diff.svg";
import DoughnutChart from "../Doughnut/DoughnutChart";

export const InfoCard = ({ covidData }) => {
  const Cards = [
    {
      title: "Confirmed Cases",
      value: covidData.confirmed,
      dif: covidData.confirmed_diff,
    },
    {
      title: "Active Cases",
      value: covidData.active,
      dif: covidData.active_diff,
    },
    {
      title: "Deaths",
      value: covidData.deaths,
      dif: covidData.deaths_diff,
    },
  ];

  function formatNumberWithCommas(number) {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(number);
  }

  return (
    <div className="card_container">
      {Cards.map(({ title, value, dif }, index) => (
        <div key={index} className="card">
          <div className="top-bar"></div>
          <h1 className="card_title">{title}</h1>
          <div className="data">
            <div className="">
              <p className="num active">{formatNumberWithCommas(value)}</p>
              <span className="diff">
                Diff:
                <span className="diff_color">+{dif}</span>
              </span>
            </div>
            <img src={diff} alt="diff" width="50px" />
          </div>
        </div>
      ))}

      <div className="chart-container">
        {covidData ? (
          <DoughnutChart covidData={covidData} />
        ) : (
          <div className="">NO DATA</div>
        )}
      </div>
    </div>
  );
};
