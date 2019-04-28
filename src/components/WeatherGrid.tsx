import React from 'react';
import {ICurentWeather, IWeatherData} from '../dto';

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
            <div className="weather-day-grid">
                <div className="weather-day">
                    <p>1</p>
                </div>
                <div className="weather-day">
                    <p>2</p>
                </div>
                <div className="weather-day">
                    <p>3</p>
                </div>
                <div className="weather-day">
                    <p>4</p>
                </div>
            </div>
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
                <i title="Humidity" className="wi wi-humidity"> {props.currentWeather.humidity}%</i>
            </div>
            <div>
                <i title="Pressure" className="wi wi-barometer"> {props.currentWeather.pressure} Mbar</i>
            </div>
            <div>
                <i title="Cloudiness" className="wi wi-cloud"> {props.currentWeather.clouds} %</i>
            </div>
            <div>
                <i title="Wind direction" className={`wi wi-direction-${props.currentWeather.wind.direction}`}> {props.currentWeather.wind.speed} m/s</i>
            </div>
        </div>
    );
}
