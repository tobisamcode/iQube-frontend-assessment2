import { connect } from "react-redux";
import "./App.css";
import { fetchRegionData } from "./redux/actions/regionAction";
import { useEffect } from "react";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import InfoContainer from "./components/InfoContainer/InfoContainer";

const mapDispatchProps = (dispatch) => ({
  fetchRegionData: () => dispatch(fetchRegionData()),
});

const mapStateProps = ({ region }) => ({
  regionData: region.regionData,
  loading: region.loading,
  error: region.error,
});

function App({ fetchRegionData, regionData, loading, error }) {
  // update Redux store at App initial render
  useEffect(() => {
    fetchRegionData();
  }, [fetchRegionData]);

  const [country, setCountry] = useState({
    selectedCountry: "",
    iso: "",
  });

  const handleChange = (e) => {
    const country = e.target.value || "";
    const iso = regionData?.data.filter((item) => item.name === country);
    setCountry({ selectedCountry: country, iso: iso[0]?.iso });
  };

  return (
    <div className="App">
      <Navigation />
      <div className="all">
        <div className="main-container main">
          {!loading && regionData ? (
            <div className="container">
              <div className="select-div">
                <label className="label">View By Country: </label>
                <select className="custom-select" onChange={handleChange}>
                  <option value="">Select</option>
                  {regionData.data.map(({ iso, name }) => (
                    <option className="option" key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <InfoContainer
                selectedISO={country.iso}
                selectedCountry={country.selectedCountry}
              />
            </div>
          ) : (
            <h3 className="isloading"> LOADING DATA... PLEASE WAIT </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateProps, mapDispatchProps)(App);
