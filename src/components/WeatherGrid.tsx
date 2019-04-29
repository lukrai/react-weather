import React from 'react';
import {ICurentWeather, IForecast, IWeatherData} from '../dto';

interface IPropsWeatherData {
    weatherData: IWeatherData;
}

export default function WeatherGrid(props: IPropsWeatherData) {

    return (
        <div className="weather-grid">
            <div className="weather-city-title">
                <p>{props.weatherData.city.name}, {props.weatherData.city.country}</p>
            </div>
            <WeatherTemperature currentWeather={props.weatherData.currentWeather}/>
            <WeatherInfo currentWeather={props.weatherData.currentWeather}/>
            <WeatherForecast forecast={props.weatherData.forecast}/>
        </div>
    );
}

function WeatherTemperature(props: { currentWeather: ICurentWeather }) {
    return (
        <div className="weather-temperature">
            <p>{props.currentWeather.temperature}°</p>
            <i className="wi wi-day-cloudy"/>
            <div className="weather-description">
                {props.currentWeather.description}
            </div>
        </div>
    );
}

function WeatherInfo(props: { currentWeather: ICurentWeather }) {
    return (
        <div className="weather-info">
            <div>
                <i title="Humidity" className="wi wi-humidity"><span> {props.currentWeather.humidity}%</span></i>
            </div>
            <div>
                <i title="Pressure" className="wi wi-barometer"><span> {props.currentWeather.pressure} Mbar</span></i>
            </div>
            <div>
                <i title="Cloudiness" className="wi wi-cloud"><span> {props.currentWeather.clouds} %</span></i>
            </div>
            <div>
                <i title="Wind direction" className={`wi wi-direction-${props.currentWeather.wind.direction}`}><span> {props.currentWeather.wind.speed} m/s</span></i>
            </div>
        </div>
    );
}

function WeatherForecast(props: { forecast: IForecast[] }) {
    return (
        <div className="weather-forecast-grid">
            <div id="border-top"></div>
            {props.forecast.map((o, i) => {
                return (
                    <div key={i} className="weather-forecast-item">
                        <p id="date">{o.month + 1}.{o.date}</p>
                        <i className="wi wi-cloud"></i>
                        <p id="temperature">{o.tempMin}..{o.tempMax}°C</p>
                    </div>
                );
            })}

            <div id="border-bottom"></div>
        </div>
    );
}
