import React from "react";
import "./InfoCardStyles.css";

import diff from "../../assets/diff.svg";
import DoughnutChart from "../Doughnut/DoughnutChart";

export const InfoCard = ({ covidData }) => {
  function formatNumberWithCommas(number) {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(number);
  }

  return (
    <div className="card_container">
      <div className="card">
        <div className="top-bar"></div>
        <h1 className="card_title">Total Cases</h1>
        <div className="data">
          <div className="">
            <p className="num active">
              {formatNumberWithCommas(covidData.confirmed)}
            </p>
            <span className="diff">
              Diff:{" "}
              <span className="diff_color">+{covidData.confirmed_diff}</span>
            </span>
          </div>
          <img src={diff} alt="diff" width="50px" />
        </div>
      </div>

      <div className="card">
        <div className="top-bar"></div>
        <h1 className="card_title">Deaths</h1>
        <div className="data">
          <div className="">
            <p className="num active">
              {formatNumberWithCommas(covidData.deaths)}
            </p>
            <span className="diff">
              Diff: <span className="diff_color">+{covidData.deaths_diff}</span>
            </span>
          </div>
          <img src={diff} alt="diff" width="50px" />
        </div>
      </div>

      <div className="card">
        <div className="top-bar"></div>
        <h1 className="card_title">Active Cases</h1>
        <div className="data">
          <div className="">
            <p className="num active">
              {formatNumberWithCommas(covidData.active)}
            </p>
            <span className="diff">
              Diff: <span className="diff_color">+{covidData.active_diff}</span>
            </span>
          </div>
          <img src={diff} alt="diff" width="50px" />
        </div>
      </div>

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
