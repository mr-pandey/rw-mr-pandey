import React from "react";

const Forecast=props=>(
    <p>
        {props.time&&<p>{props.time}</p>}
        {props.icon&&<img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather-icon"/>}
        {props.description&&<div>{props.description}</div>}
        {props.max_temperature&&<div>Max Temp : {props.max_temperature}°C</div>}
        {props.min_temperature&&<div>Min Temp : {props.min_temperature}°C</div>}
        {props.humidity&&<div>Humidity : {props.humidity}%</div>}
    </p>
);

export default Forecast;