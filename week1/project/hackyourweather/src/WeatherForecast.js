import React from 'react';
import ForecastData from './city-weather.json';

let kelvinToCelsius =(value)=> value -273.15;
function WeaterForecast() {
    return (
        <div className="div-container">
            {ForecastData.map(postData => {
                return (
                    <div className="postDataInfo" key={postData.id}>
                        <ul className="infoList" >
                            <li className="postDataName">
                                <h2>{postData.name}, {postData.sys.country}</h2>
                            </li>
                            {postData.weather.map(item => {
                                return (
                                    <li className="weather_info" key={item.id}>
                                        <h3 className="main_weather">
                                            {item.main}
                                        </h3>
                                        <p className="description">
                                            {item.description}
                                        </p>
                                    </li>
                                )
                            })}
                            <li className="min_temp">
                                    Min temp : {kelvinToCelsius(postData.main.temp_min).toFixed(1)}
                            </li>
                            <li className="max_temp">
                                    Max temp : {kelvinToCelsius(postData.main.temp_max).toFixed(1)}
                            </li>
                            <li className="location">
                                Location:  {[postData.coord.lat, postData.coord.lon].join(',')}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default WeaterForecast;
