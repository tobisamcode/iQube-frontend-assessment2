import React from "react";
import diff from "../../assets/diff.svg";

import "../infoCard/InfoCardStyles.css";
import DoughnutChart from "../Doughnut/DoughnutChart";

function TotalData({ totalCovidData }) {
  const Cards = [
    {
      title: "Confirmed Cases",
      value: totalCovidData.confirmed,
      dif: totalCovidData.confirmed_diff,
    },
    {
      title: "Active Cases",
      value: totalCovidData.active,
      dif: totalCovidData.active_diff,
    },
    {
      title: "Deaths",
      value: totalCovidData.deaths,
      dif: totalCovidData.deaths_diff,
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
        {totalCovidData ? (
          <DoughnutChart covidData={totalCovidData} />
        ) : (
          <div className="">NO DATA</div>
        )}
      </div>
    </div>
  );
}

export default TotalData;
