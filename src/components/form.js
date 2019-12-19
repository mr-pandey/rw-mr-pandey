import React from 'react';

const Form=(props)=>(
        <form className="topnav" onSubmit={props.loadWeather}>
            <input className="topnavtext" type="text" name="city" placeholder="Enter a city"></input>
            <button className="gobtn">Go!</button>
        </form>
);

export default Form;