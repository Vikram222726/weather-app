import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  FillDate,
  SetDate1,
  SetDate2,
  SetDate3,
  SetDate4,
  SetDate5,
} from "./dates/getDates";
import {
  setLocation,
  setPresentTemp,
  setMausam,
  setClassName,
  setDay1,
  setDay2,
  setDay3,
  setDay4,
  setDay5,
  setClassImg1,
  setClassImg2,
  setClassImg3,
  setClassImg4,
  setClassImg5,
} from "./dates/setDay";

function App() {
  const [Queries, setQueries] = useState("");
  const [weather, setWeather] = useState({});

  const fetchData = async (q) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=b539f504ed29ff36eb0a092685f95d6f`
    );
    setWeather(data);
  };

  return (
    <div className={setClassName(weather)}>
      <div className="navbar  bg-img">
        <span className="navText">Weather ForeCast</span>
      </div>
      <form className="form-inline setform">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control search-bar"
            id="inputtext"
            placeholder="Enter city name"
            value={Queries}
            onChange={(e) => setQueries(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => fetchData(Queries)}
          className="btn btn-primary mb-2"
        >
          Search
        </button>
      </form>
      {weather.city !== undefined ? (
        <div>
          <div className="containers">
            <div className="location-box">
              <div className="location">{setLocation(weather)}</div>
              <div className="date">{FillDate()}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{setPresentTemp(weather)}&#176;c</div>
              <div className="weather">{setMausam(weather)}</div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col colm1">
                <div className="nxttemp">{setDay1(weather)}&#176;c</div>
                <div className={setClassImg1(weather)} />
                <div className="nxtdate">{SetDate1()}</div>
              </div>
              <div className="col colm2">
                <div className="nxttemp">{setDay2(weather)}&#176;c</div>
                <div className={setClassImg2(weather)} />
                <div className="nxtdate">{SetDate2()}</div>
              </div>
              <div className="col colm3">
                <div className="nxttemp">{setDay3(weather)}&#176;c</div>
                <div className={setClassImg3(weather)} />
                <div className="nxtdate">{SetDate3()}</div>
              </div>
              <div className="col colm4">
                <div className="nxttemp">{setDay4(weather)}&#176;c</div>
                <div className={setClassImg4(weather)} />
                <div className="nxtdate">{SetDate4()}</div>
              </div>
              <div className="col colm5">
                <div className="nxttemp">{setDay5(weather)}&#176;c</div>
                <div className={setClassImg5(weather)} />
                <div className="nxtdate">{SetDate5()}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

// https://vikram222726.github.io/five-day-weather-forecast-app/
