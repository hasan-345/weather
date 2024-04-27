import React, { useEffect, useState } from 'react';
import Weather from './Weather'
import search from './assets/search.png'
import Clouds from './assets/cloud.png'
import Clear from './assets/clear.png'
import drizzle from './assets/drizzle.png'
import humidity from './assets/humidity.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import wind from './assets/wind.png'
import './App.css'
function WeatherApp() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState('karachi');
  let {alldata,loading,error}  = Weather(show.toLowerCase())
  const sendData = () => {
   setShow(input);
   
  };
  if(alldata !== null && loading){
    document.title = alldata.name
   }

   let image = Clear;
  if(alldata != null){
    if(alldata.weather[0].main === "Clouds") {
       image = Clouds
    }else if(alldata.weather[0].main === "Clear"){
        image = Clear
    }else if(alldata.weather[0].main === "Rain"){
      image = rain
    }else if(alldata.weather[0].main === "Drizzle"){
     image = drizzle
    }else{
      image = Clouds
    }
  }
 
  return (
    <div className='weather'>
      <div className="container">
      <div className="display"><input type="text" value={input} onKeyPress={(event)=>{
        if(event.key === 'Enter'){
          sendData()
        }
      }} onChange={(e) => setInput(e.target.value)} placeholder={alldata != null && loading === true? alldata.name: "__"} /> <img src={search} onClick={sendData} /> </div>
     <div className="error">{error}</div> 
        
     
          <div className='height'>
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="temp">
              <h1>{alldata != null && loading === true?Number(Math.round(alldata.main.temp - 273)) : "__" }°C</h1>
            </div>
            <h1>{alldata != null && loading === true?alldata.name: "__"}</h1>
            <div className="div">
              <div className="hum">
                <img src={humidity} alt="" />
                <div>
                  <p>{alldata != null && loading === true?alldata.main.humidity: "__"}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="hum">
                <img src={wind} alt="" />
                <div>
                  <p>{alldata != null && loading === true?alldata.wind.speed: "__"} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
      
         
  
      </div>
      
  
      {/* Humidity: {alldata != null? alldata.main.humidity: ""} % */}
    </div>
  );
}

export default WeatherApp;