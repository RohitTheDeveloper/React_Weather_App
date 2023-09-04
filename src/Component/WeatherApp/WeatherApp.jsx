import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assest/search.png';
import clear_icon from '../Assest/clear.png';
import cloud_icon from '../Assest/cloud.png';
import drizzle_icon from '../Assest/drizzle.png';
import humidity_icon from '../Assest/humidity.png'; 
import rain_icon from '../Assest/rain.png';
import snow_icon from '../Assest/snow.png';
import wind_icon from '../Assest/wind.png';
import { clear } from '@testing-library/user-event/dist/clear';
export const WeatherApp = () => {

        let api_key ="94e6f6d611af9939063af2082cec48cf";

        const [wicon,setwicon] = useState(cloud_icon);

        
        const search= async()=>{
            const element = document.getElementsByClassName("cityInput")
            if(element[0].value==="")
            {
                return 0;
            }
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`

            let response = await fetch(url);
            let data = await response.json();
             const humidity = document.getElementsByClassName("humidity-percent")
             const wind = document.getElementsByClassName("wind-rate")
            const temprature = document.getElementsByClassName("weather-temp")
            const location = document.getElementsByClassName("weather-location")

            humidity[0].innerHTML= data.main.humidity+" %";
            wind[0].innerHTML= data.wind.speed+" km/h";
            temprature[0].innerHTML= Math.floor(data.main.temp - 273.15)+" °c";//math.floor(data.main.tem) to remov the decimal value
            location[0].innerHTML= data.name;

            if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
            {
                setwicon(clear_icon)
            }
            else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
            {
                setwicon(cloud_icon)
            }
            else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
            {
                setwicon(drizzle_icon)
            }
            else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
            {
                setwicon(drizzle_icon)
            }
            else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
            {
                setwicon(rain_icon)
            }
            else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
            {
                setwicon(rain_icon)
            }
            else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
            {
                setwicon(snow_icon)
            }
            else 
            {
                setwicon(clear_icon)
            }
        }

  return (
    <div className='container'>
        <div className="top-bar">
             <input type="text" className="cityInput" placeholder='search'/>
             <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
             </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24.c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
