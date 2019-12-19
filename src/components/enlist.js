import React from "react";
import Forecast from "./forecast";

const Enlist=(props)=>{
    const finalForecast=props.forecast.map((daily,i)=>{
    return<Forecast
        time = {props.forecast[i].dt_txt}
        max_temperature={props.forecast[i].main.temp_max}  
        min_temperature={props.forecast[i].main.temp_min} 
        humidity={props.forecast[i].main.humidity}
        description={props.forecast[i].weather[0].description}
        icon={props.forecast[i].weather[0].icon}
        />
    })
    return (<div className="vertical-menu">{finalForecast}</div>)
}

export default Enlist;