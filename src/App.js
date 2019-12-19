import React from "react";
import './App.css'
import Form from "./components/form";
import Enlist from "./components/enlist";

class App extends React.Component {
  state={
    forecast:[]
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
    const API_CALL=await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=5cfb27661a39eee755aaf62d492bf507&units=metric`);
    const response=await API_CALL.json();
      this.setState({
        forecast:response.list
      });
    }
  }

  render() {
    return (
      <div className="container">
          <Form loadWeather={this.getWeather} />
          <Enlist forecast={this.state.forecast} />
      </div>
    );
  }
};

export default App;