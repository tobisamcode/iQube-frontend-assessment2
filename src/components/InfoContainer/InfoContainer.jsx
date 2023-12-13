import React, { useEffect } from "react";
import "./InfoContainerStyles.css";
import worldSVG from "../../assets/world-svg.svg";

import ReactCountryFlag from "react-country-flag";
import { countries } from "country-flags-svg";
import { InfoCard } from "../infoCard/InfoCard";
import { fetchCovidData } from "../../redux/actions/covidActions";
import { connect } from "react-redux";
import DoughnutChart from "../Doughnut/DoughnutChart";

const mapStateToProps = ({ covid }) => ({
  covidData: covid.covidData,
  loading: covid.loading,
  error: covid.error,
});

function InfoContainer({
  loading,
  covidData,
  selectedCountry,
  selectedISO,
  fetchCovidData,
}) {
  const countryFlag = countries.filter((item) => item.name === selectedCountry);

  const formatDateTime = (input) => {
    const inputDate = new Date(input);

    // Format the date using Intl.DateTimeFormat
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(inputDate);
  };

  useEffect(() => {
    if (selectedISO) {
      fetchCovidData(selectedISO);
    }
  }, [selectedISO, fetchCovidData]);

  if (covidData) {
    console.log(covidData.data);
  }

  return (
    <div className="info_container">
      <div className="header">
        {countryFlag?.map(({ iso2 }) => (
          <div key={iso2}>
            {selectedCountry && (
              <ReactCountryFlag
                className="emojiFlag"
                countryCode={iso2}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
              />
            )}
          </div>
        ))}
        {!selectedCountry && <img width="30rem" src={worldSVG} />}
        <h3 className="selected_con">
          {selectedCountry ? selectedCountry : "World Wide"}
        </h3>
        <p className="last_update">
          lastly updated on{" "}
          {covidData ? formatDateTime(covidData.data.last_update) : "N/A"}
        </p>
      </div>

      {!loading && selectedISO && covidData ? (
        <InfoCard covidData={covidData.data} />
      ) : !covidData && !selectedISO ? (
        <div className="loading">SELECT A REGION</div>
      ) : loading ? (
        <div className="loading"> LOADING DATA ... </div>
      ) : (
        ""
      )}

      {!loading && (
        <div className="indicator_container">
          <div className="indicator_card">
            <p>Total Cases</p>
            <span className="indicator_1"></span>
          </div>
          <div className="indicator_card">
            <p>Active Cases</p>
            <span className="indicator_2"></span>
          </div>
          <div className="indicator_card">
            <p>Deaths</p>
            <span className="indicator_3"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default connect(mapStateToProps, { fetchCovidData })(InfoContainer);
